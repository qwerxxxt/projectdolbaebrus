require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const {router} = require("express/lib/application");
const path = require('path')
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)


const start = async () => {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => {
        console.log(`Server work on ${PORT}`)
    })

}

start()