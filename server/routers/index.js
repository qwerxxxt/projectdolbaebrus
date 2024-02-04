const Router = require('express')
const router = new Router()
const ProjectRouter= require('./ProjectRouter')

router.use('/project', ProjectRouter)



module.exports = router