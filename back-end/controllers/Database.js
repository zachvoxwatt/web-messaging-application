const mysql = require('mysql2')
const cfgInfo = require('../server-cfg')
const logger = require('./EventLogger')

var connection

//Test connection
const isLocal = cfgInfo.isLocal //cfgInfo.REMOTE

if (isLocal) connection = mysql.createConnection(cfgInfo.MYSQL_LOCAL)
else connection = mysql.createConnection(cfgInfo.MYSQL_REMOTE)

connection.connect((error) => 
{
    if (error)
    {
        logger('Ping test between server and Database engine failed. This is most likely due to the Database engine is OFFLINE.')
        throw error
    }
    
    let logMsg = `Ping test between server and Database engine successful.`
    logger(logMsg)
})
connection.end()

// Exports a pool of connection instead of just one for concurrency
var connectionPool
if (isLocal) connectionPool = mysql.createPool(cfgInfo.MYSQL_LOCAL).promise()
else connectionPool = mysql.createPool(cfgInfo.MYSQL_REMOTE).promise()

module.exports = connectionPool