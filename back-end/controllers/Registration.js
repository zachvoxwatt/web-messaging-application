exports.register = async (req, res, next) => 
{
    let ip = req.connection.remoteAddress || req.headers['x-forwarded-for'] 
    let logger = require('./EventLogger')
    let serverCfg = require('../server-cfg')
    let mysqlConnector = require('../controllers/Database')
    let mysqlQueries = require('./DBQuery')
    let bcrypt = require('bcrypt')
    let {v4} = require('uuid')
    let { username, display_name, email, password } = req.body
    let existing_useremail_result, existing_username_result
    let hashedPassword

    existing_username_result = await mysqlConnector.query(mysqlQueries.CHECK_EXISTING_USERNAME, [username])
    if (existing_username_result[0].length !== 0)
    {    
        if (existing_username_result[0][0].userName === username)
        {
            res.send('Failed! That username has already been taken!')
            logger(`[EVENT] Client at ${ip} failed to create a new account. Reason: An existing username is present.`)
            return
        }
    }

    existing_useremail_result = await mysqlConnector.query(mysqlQueries.CHECK_EXISTING_EMAIL, [email])
    if (existing_useremail_result[0].length !== 0)
    {
        if (existing_useremail_result[0][0].userEmail === email)
        {
            res.send('Failed! That email has already been taken!')
            logger(`[EVENT] Client at ${ip} failed to create a new account. Reason: An existing email is present.`)
            return
        }
    }

    await bcrypt.hash(password, serverCfg.BCRYPT_SALTS).then((result) => { hashedPassword = result })
    await mysqlConnector.query(mysqlQueries.REGISTER, [v4(), username, display_name, email, hashedPassword])

    res.send('Success! A new account has been created!')
    logger(`[EVENT] Back end server created a new account for client at ${ip}.`)
}