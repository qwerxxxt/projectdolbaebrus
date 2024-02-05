const Router = require('express')
const router = new Router()
const ProjectRouter= require('./ProjectRouter')
const userRouter= require('./userRouter')
const Team = require("./TeamRouter");

router.use('/project', ProjectRouter)
router.use('/Team', Team)
router.use('/user', userRouter)



module.exports = router