const Router = require('express')
const router = new Router()
const projectinfoContoller = require('../controllers/ProjectInfoController')

router.post('/', projectinfoContoller.create)
router.put('/update/:id', projectinfoContoller.update)

module.exports = router
