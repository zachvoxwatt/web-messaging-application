// Loads all of the configs
require('dotenv').config()
const svCfg = process.env
const socketIOUtils = require('./utils/socketIO')

// Initialize server resources
const express = require('express')
const cors = require('cors')
const creds = require('./middlewares/credentials')
const cookieParser = require('cookie-parser')
const expressServer = express()
const httpServer = require('http').Server(expressServer)
const socketIOServer = socketIOUtils.prepareServer(httpServer)
const db = require('./configs/database')
socketIOUtils.connection(socketIOServer)

// Initialize express middlewares
expressServer.use(express.urlencoded({ extended: false }))
expressServer.use(express.json())
expressServer.use(cookieParser())
expressServer.use(creds)
expressServer.use(cors(require('./configs/cors_settings')))

// Initialize the routes
expressServer.use('/sendtobackend', require('./routes/postTextRoute'))
expressServer.use('/joinapp', require('./routes/joinRoute'))
expressServer.use('/leaveapp', require('./routes/leaveRoute'))
expressServer.use('/refreshapp', require('./routes/refreshRoute'))

const startServer = async () => {
    let result = await db.testConnection()
    if (!result) {
        await db.resetData()
        httpServer.listen(svCfg.SERVER_PORT, () => { console.log(`Database connection established successfully. Server is operational on port ${svCfg.SERVER_PORT}`)})
    }

    else console.log('Failed to establish a connection with Database engine. Shutting down server...')
}

startServer()

exports.sendToAll = (data) => { socketIOUtils.sendToAll(socketIOServer, data) }
