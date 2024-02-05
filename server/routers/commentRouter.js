const Router = require('express')
const router = new Router()
const commentController = require('../controllers/CommentContoller')

router.post('/create', commentController.create)
router.put('/upcom/:id', commentController.update)
router.delete('/com/:id', commentController.deleteComment)


module.exports = router
