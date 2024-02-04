const Router = require('express')
const router = new Router()
const ProjectRouter= require('./ProjectRouter')
const userRouter= require('./userRouter')

router.use('/project', ProjectRouter)
router.use('/user', userRouter)



module.exports = router