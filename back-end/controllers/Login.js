exports.login = async (req, res, next) =>
{
    let logger = require('./EventLogger')
    let ip = req.connection.remoteAddress || req.headers['x-forwarded-for']
    let {userName, userPassword} = req.body
    
    let mysqlConnector = require('./Database')
    let mysqlQueries = require('./DBQuery')

    let results
    let bcrypt = require('bcrypt')
    results = await mysqlConnector.query(mysqlQueries.GET_LOGIN_CREDENTIALS, [userName])
    bcrypt.compare(userPassword, results[0][0].userPassword).then((result) => {
        if (result)
        {
            res.send('welcome!')
            logger(`Client at ${ip} successfully signed in.`)
        }
        else
        {
            res.send('Access Denied! Your credentials do not match any of our records!')
            logger(`Client at ${ip} failed to sign in. Reason: Incorrect Credentials`)
        }
    })
}