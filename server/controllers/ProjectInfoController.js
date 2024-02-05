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
}

module.exports = new ProjectInfoContoller()