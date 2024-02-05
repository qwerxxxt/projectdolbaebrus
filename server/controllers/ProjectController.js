const {Project_info, Project} = require("../models/models");
const ApiError = require('../error/ApiError')
const {resolve} = require("path");
const uuid = require('uuid')

class ProjectController {


    async create(req, res   , next) {
        try {
            const {project_name} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + 'jpg'
            img.mv(resolve(__dirname, '..', 'static', imageName))

            const project = await Project.create({project_name, img: imageName}).then(newProject => {
                Project_info.create({
                    project_id: newProject.id,
                });
            });


            return res.json(project)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ProjectController()