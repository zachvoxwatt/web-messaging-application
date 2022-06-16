// Loads all of the configs
require('dotenv').config()
const svCfg = process.env
const socketIOUtils = require('./utils/socketIO')

// Initialize server resources
const express = require('express')
const cors = require('cors')
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
expressServer.use(cors())

// Initialize the routes
expressServer.use('/pingSv', require('./routes/pingRoute'))
expressServer.use('/sendtobackend', require('./routes/postTextRoute'))
expressServer.use('/joinapp', require('./routes/joinRoute'))
expressServer.use('/leaveapp', require('./routes/leaveRoute'))
expressServer.use('/refreshapp', require('./routes/refreshRoute'))

// Runs the server
httpServer.listen(svCfg.SERVER_PORT, () => { db.runTest(); console.log(`Server is operational on port ${svCfg.SERVER_PORT}`) })