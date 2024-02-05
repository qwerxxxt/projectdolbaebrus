const {Team} = require("../models/models");
const ApiError = require('../error/ApiError')
const {resolve} = require("path");
const uuid = require('uuid')



class TeamController {


    async create(req, res, next) {
        try {
            const {user_id, team_name,about_team} = req.body
            const {img} = req.files
            let imageName = uuid.v4() + 'jpg'
            img.mv(resolve(__dirname, '..', 'static', imageName))
            const team = await Team.create({user_id, team_name, about_team, img:imageName})



            return res.json(team)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async deleteTeam(req,res) {
        const id = req.params.id
        const deleteTeam = await Team.destroy({where: {id}})
        return res.json(deleteTeam)

    }

}



module.exports = new TeamController()