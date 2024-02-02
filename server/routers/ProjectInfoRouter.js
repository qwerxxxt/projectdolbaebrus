const Router = require('express')
const router = new Router()
const newsController = require('../controllers/ProjectController')

router.post('/', newsController.create)
router.get('/getOneNews', newsController.getOneNews)
router.get('/getAllNews', newsController.getAllNews)
router.delete('/user', newsController.deleteNews)

module.exports = router