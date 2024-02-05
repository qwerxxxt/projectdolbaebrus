const Router = require('express')
const router = new Router()
const ProjectRouter= require('./ProjectRouter')
const userRouter= require('./userRouter')
const TeamRouter = require("./TeamRouter")
const ProjectInfoRouter = require('./ProjectinfoRouter')


router.use('/project', ProjectRouter)
router.use('/Team', TeamRouter)
router.use('/user', userRouter)
router.use('/project_info', ProjectInfoRouter)



module.exports = router