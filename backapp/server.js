// Loads all of the configs
require('dotenv').config()
const svCfg = process.env
const socketIOUtils = require('./utils/socketIO')

// Initialize server resources
const express = require('express')
const cors = require('cors')
const expressServer = express()
const httpServer = require('http').Server(expressServer)
const socketIOServer = socketIOUtils.prepareServer(httpServer)
socketIOUtils.connection(socketIOServer)

// Initialize express middlewares
expressServer.use(express.urlencoded({ extended: false }))
expressServer.use(express.json())
expressServer.use(cors())

// Initialize the routes
expressServer.use('/pingSv', require('./routes/ping'))
expressServer.use('/sendToBackend', require('./routes/posttext'))

// Runs the server
httpServer.listen(svCfg.SERVER_PORT, () => { console.log(`Server is operational on port ${svCfg.SERVER_PORT}`) })