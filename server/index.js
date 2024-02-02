require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())



const start = async () => {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => {
        console.log(`Server work on ${PORT}`)
    })

}

start()