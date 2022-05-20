const mysql = require('mysql2')
const cfgInfo = require('../server-cfg')

var connection
if (cfgInfo.LOCAL)
{
    connection = mysql.createConnection(cfgInfo.MYSQL_LOCAL)
    connection.connect((error) => {
        if (error) throw error
        console.log('Local ping test successful between server and Database engine')
    })
}
else
{
    connection = mysql.createConnection(cfgInfo.MYSQL_REMOTE)
    connection.connect((error) => {
        if (error) throw error
        console.log('Remote ping test successful between server and Database engine')
    })
}
connection.end()

// Exports a pool of connection instead of just one for concurrency
var connectionPool
if (cfgInfo.LOCAL) connectionPool = mysql.createPool(cfgInfo.MYSQL_LOCAL).promise()
else connectionPool = mysql.createPool(cfgInfo.MYSQL_REMOTE).promise()

module.exports = connectionPool