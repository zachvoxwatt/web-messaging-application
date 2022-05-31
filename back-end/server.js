// Server resources initialization
const logger = require('./controllers/utils/EventLogger')
const express = require('express')
const cors = require('cors')
const https = require('https')
const { Server } = require('socket.io')
const expressServer = express()
const socketIOServer = new Server(https.createServer(expressServer))
const db = require('./controllers/utils/Database')

// Load the config JSON
const svcfg = require('./server-cfg')

// Route declarations
const loginRoute = require('./routes/Login')
const registerRoute = require('./routes/Registration')
const postTextRoute = require('./routes/PostText')

// Middleware declarations
expressServer.use(cors())
expressServer.use(express.urlencoded({extended: false}))
expressServer.use(express.json())

// Bind routes to the declared ones
expressServer.use('/login', loginRoute)
expressServer.use('/register', registerRoute)
expressServer.use('/postText', postTextRoute)

// Run the server
expressServer.listen(svcfg.SERVER_PORT, (e) => { db.testConnection(); logger(`Server is operational at port ${svcfg.SERVER_PORT}`)} )

socketIOServer.on('connection', (socket) => { console.log('A client has connected!') })