const {Project_info} = require('../models/models')
const db = require('../db')
const ApiError = require("../error/ApiError");



class ProjectInfoContoller {
    async create(req, res, next) {
        try {
            let {location, date, title, partners_id, type_id, description, project_id} = req.body
            const project_info = await Project_info.update({
                location,
                date,
                title,
                partners_id,
                type_id,
                description,
                project_id
            })
            return res.json(project_info)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}