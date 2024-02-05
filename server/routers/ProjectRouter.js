const Router = require('express')
const router = new Router()
const ProjectController = require('../controllers/ProjectController')

router.post('/create', ProjectController.create)
router.delete('/delete/:id', ProjectController.deleteProject)

module.exports = router