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

}

module.exports = new UserController()
