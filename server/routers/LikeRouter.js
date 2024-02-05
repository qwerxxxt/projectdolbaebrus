const Router = require('express')
const router = new Router()
const LikeController = require('../controllers/LikeController')

router.post('/like', LikeController.create)
router.delete('/like/:id', LikeController.deleteLike)

module.exports = router
