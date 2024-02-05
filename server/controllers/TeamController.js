const {Team, Project, Project_info} = require("../models/models");
const ApiError = require('../error/ApiError')
const {resolve} = require("path");
const uuid = require('uuid')



class TeamController {


    async create(req, res, next) {
        try {
            const {user_id, team_name} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + 'jpg'
            img.mv(resolve(__dirname, '..', 'static', imageName))



            return res.json(Team)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async deleteTeam(req,res) {
        const id = req.params.id
        const Team = await Team.destroy({where: {id}})
        return res.json(Team)

    }

}



module.exports = new TeamController()