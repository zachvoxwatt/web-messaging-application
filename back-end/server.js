const express = require('express')
const server = express()
const RUNNING_PORT = 1765

server.listen(RUNNING_PORT, (e) => 
{
    console.log(`Server is operational at port ${RUNNING_PORT}`)
    console.log(e)
})