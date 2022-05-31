exports.login = async (req, res, next) =>
{
    let logger = require('./utils/EventLogger')
    let getConnectedIPv4 = require('./utils/RequestIPGetter')
    let { validateLoginDatagram } = require('./utils/DatagramValidation')

    let returnDtgram = { message: '' }
    let validateResults = validateLoginDatagram(req.body)
    if (!validateResults.allowed)
    {
        returnDtgram.message = 'Access Denied! Your credentials are incorrect!'
        res.send(returnDtgram)
        logger(`A client @ ${getConnectedIPv4(req)} failed to sign in. Reason: Prohibited special characters or spacings exist in either or both fields.`)
        return
    }

    let { userName, userPassword } = req.body
    
    let mysqlConnector = require('./utils/Database')
    let mysqlQueries = require('./utils/DBQuery')

    let results
    let bcrypt = require('bcrypt')
    results = await mysqlConnector.query(mysqlQueries.GET_LOGIN_CREDENTIALS, [userName])
        
    if (results[0].length !== 0)
    {    
        bcrypt.compare(userPassword, results[0][0].userPassword).then((result) => {
            if (result)
            {
                returnDtgram.message = 'Welcome!'
                res.status(200).send(returnDtgram)
                logger(`A client @ ${getConnectedIPv4(req)} successfully signed in.`)
            }

            else
            {
                returnDtgram.message = 'Access Denied! Your credentials are incorrect!'
                res.send(returnDtgram)
                logger(`A client @ ${getConnectedIPv4(req)} failed to sign in. Reason: Incorrect credentials`)
            }
        })
    }

    else
    {
        returnDtgram.message = 'Access Denied! Your credentials are incorrect!'
        res.send(returnDtgram)
        logger(`A client @ ${getConnectedIPv4(req)} failed to sign in. Reason: Unknown credentials`)
    }
}