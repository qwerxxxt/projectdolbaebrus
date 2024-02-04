require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routers/index')
const path = require('path')
const fileUpload = require('express-fileupload')
const errorHandler = require('./middelware/ErrorHandlingMiddleware')


const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)


const start = async () => {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => {
        console.log(`Server work on ${PORT}`)
    })

}

start()