// Arquivo principal do Sistema ou aplicativo

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const authRouter = require('./routes/authRoutes')
const projectRouter = require('./routes/ProjectRouter')

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routas
app.use(authRouter)
app.use(projectRouter)

module.exports = app