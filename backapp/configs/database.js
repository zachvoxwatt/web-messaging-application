const mysql = require('mysql2')
const envCfg = process.env
const configs = {
    LOCAL: {
        host: envCfg.DB_URL_LOCAL,
        user: envCfg.DB_USER,
        password: envCfg.DB_PASS,
        database: envCfg.DB_SCHEMA
    },
    REMOTE: {
        host: envCfg.DB_URL_REMOTE,
        user: envCfg.DB_USER,
        password: envCfg.DB_PASS,
        database: envCfg.DB_SCHEMA
    }
}

const testConnection = async () =>
{
    let connection
    if (envCfg.DB_LOCAL === 'YES') connection = mysql.createConnection(configs.LOCAL)
    else connection = mysql.createConnection(configs.REMOTE)

    connection.connect((err) => { 
        if (err) throw err
        console.log('Database connection between server and engine established.')
    })

    connection.end()
}

var connectionPool

if (envCfg.DB_LOCAL === 'YES') connectionPool = mysql.createPool(configs.LOCAL).promise()
else connectionPool = mysql.createPool(configs.REMOTE).promise()

module.exports = connectionPool
module.exports.runTest = testConnection
