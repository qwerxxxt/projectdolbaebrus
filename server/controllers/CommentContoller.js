const {Comment, Project} = require('../models/models')
const db = require('../db')
const ApiError = require('../error/ApiError');

class CommentContoller{
    async create(req,res,next){
        try {
            let{text_comment,user_id,project_id} = req.body
            const com = await Comment.create({text_comment,user_id,project_id});
            return res.json(com)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async update(req,res,next){
        try{
            const {text_comment} = req.body
            const {id}=req.params
            const update_comment = Comment.update({text_comment}, {where: {id}})
            return res.json(update_comment)
        }catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }
    async deleteComment(req,res){
        const id = req.params.id
        const detcom = await Comment.destroy({where: {id}})
        return res.json(detcom)
    }
}
module.exports = new CommentContoller()