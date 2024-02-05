const {Project_info, Project, Comment, Like} = require("../models/models");
const ApiError = require('../error/ApiError')
const {resolve} = require("path");
const uuid = require('uuid')

class ProjectController {


    async create(req, res, next) {
        try {
            const {user_id,project_name,} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + 'jpg'
            img.mv(resolve(__dirname, '..', 'static', imageName))

            const project = await Project.create({user_id,project_name, img: imageName}).then(newProject => {
                Project_info.create({
                    project_id: newProject.id,
                });
                Comment.create({
                   project_id: newProject.id,
                });
                Like.create({
                    project_id: newProject.id,
                })
                return res.json("Проект успешно создан!")
            });


            return res.json(project)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }



    async deleteProject(req,res) {
        const id = req.params.id
        const project = await Project.destroy({where: {id}})
        return res.json(project)

    }

}



module.exports = new ProjectController()