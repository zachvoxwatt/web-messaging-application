// Server resources initialization
const logger = require('./controllers/EventLogger')
const express = require('express')
const server = express()
const db = require('./controllers/Database')

// Load the config JSON
const svcfg = require('./server-cfg')

// Route declarations
const loginRoute = require('./routes/Login')
const registerRoute = require('./routes/Registration')

// Middleware declarations
server.use(express.urlencoded({extended: false}))
server.use(express.json())

// Bind routes to the declared ones
server.use('/login', loginRoute)
server.use('/register', registerRoute)

// Run the server
server.listen(svcfg.SERVER_PORT, (e) => { logger(`Server is operational at port ${svcfg.SERVER_PORT}`)} )