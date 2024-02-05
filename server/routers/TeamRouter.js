const Router = require('express')
const router = new Router()
const TeamController = require('../controllers/TeamController')


router.post('/createTeam', TeamController.create)
router.delete('/delete/:id', TeamController.deleteTeam)


module.exports = router