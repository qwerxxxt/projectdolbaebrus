const { Project, Like} = require("../models/models");
const ApiError = require('../error/ApiError')
const db = require('../db')

class LikeController{
    async  create(req, res, next){
        try {
            let{id, user_id, project_id} = req.body
            const like = await Like.create({id, user_id, project_id});
            return res.json(like)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async deleteLike(req,res){
        const id = req.params.id
        const like = await Like.destroy({where: {id}})
        return res.json(like)
    }

}


module.exports = new LikeController()