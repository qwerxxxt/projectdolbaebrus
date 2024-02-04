const Router = require('express')
const router = new Router()
const newsController = require('../controllers/ProjectController')

router.post('/create', newsController.create)


module.exports = router