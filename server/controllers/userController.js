const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')
const db = require('../db')


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async Registration(req,res,next){
        const {email, password, role} = req.body
        if (!email || !password){
            return next(ApiError.badRequest("Не корректный email или password"))
        }
        const candidat = await User.findOne({where: {email}})
        if(candidat){
            return next(ApiError.badRequest('Пользователь с такой эл.почтой создан'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password:hashPassword})

        const token = await generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req,res,next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword =  bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.badRequest('Указан не верный пароль!'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req,res){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

}

module.exports = new UserController()
