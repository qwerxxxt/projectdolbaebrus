const Router = require('express')
const router = new Router()
const ProjectController = require('../controllers/ProjectController')

router.post('/create', ProjectController.create)

module.exports = router