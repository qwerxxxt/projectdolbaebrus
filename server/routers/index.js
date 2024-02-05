const Router = require('express')
const router = new Router()
const ProjectRouter= require('./ProjectRouter')
const userRouter= require('./userRouter')
const TeamRouter = require("./TeamRouter")
const ProjectInfoRouter = require('./ProjectinfoRouter')
const CommentRouter = require('./commentRouter')

//23
router.use('/project', ProjectRouter)
router.use('/Team', TeamRouter)
router.use('/user', userRouter)
router.use('/project_info', ProjectInfoRouter)
router.use('/comment', CommentRouter)


module.exports = router