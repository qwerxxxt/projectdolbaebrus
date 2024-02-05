const {Project_info} = require('../models/models')
const db = require('../db')
const ApiError = require("../error/ApiError");



class ProjectInfoContoller {
    async create(req, res, next){
        try {
            let{date_project, about_project, project_id} = req.body
            const project_info = await Project_info.update({date_project, about_project,project_id})
            return res.json(project_info)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async update(req,res,next){
        try{
            const {date_project, about_project, } = req.body
            const {id} = req.params
            const update_project = await Project_info.update({date_project:date_project, about_project:about_project}, {where: {id}})
            return res.json(update_project)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ProjectInfoContoller()