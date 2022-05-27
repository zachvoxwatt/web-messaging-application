exports.register = async (req, res, next) => 
{
    let logger = require('./EventLogger')
    let ip = req.connection.remoteAddress || req.headers['x-forwarded-for']
    let { username, display_name, email, password } = req.body

    console.log(req.body)

    let serverCfg = require('../server-cfg')
    let mysqlConnector = require('../controllers/Database')
    let mysqlQueries = require('./DBQuery')
    let check_mail, check_name

    check_name = await mysqlConnector.query(mysqlQueries.CHECK_EXISTING_USERNAME, [username])
    if (check_name[0].length !== 0)
    {    
        if (check_name[0][0].userName === username)
        {
            res.send('Failed! That username has already been taken!')
            logger(`Client at ${ip} failed to create a new account. Reason: An existing username is present.`)
            return
        }
    }

    check_mail = await mysqlConnector.query(mysqlQueries.CHECK_EXISTING_EMAIL, [email])
    if (check_mail[0].length !== 0)
    {
        if (check_mail[0][0].userEmail === email)
        {
            res.send('Failed! That email has already been taken!')
            logger(`Client at ${ip} failed to create a new account. Reason: An existing email is present.`)
            return
        }
    }
    
    let {v4} = require('uuid')
    let bcrypt = require('bcrypt')
    let hashedPassword

    await bcrypt.hash(password, serverCfg.BCRYPT_SALTS).then((result) => { hashedPassword = result })
    await mysqlConnector.query(mysqlQueries.REGISTER, [v4(), username, display_name, email, hashedPassword])

    res.send('Success! A new account has been created!')
    logger(`Back end server created a new account for client at ${ip}.`)
}

const validateDatagram = (datagram) =>
{
    return true
}