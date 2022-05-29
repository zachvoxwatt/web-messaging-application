exports.register = async (req, res, next) => 
{
    let logger = require('./utils/EventLogger')
    let getConnectedIPv4 = require('./utils/RequestIPGetter')
    let { validateRegDatagram } = require('./utils/DatagramValidation')
    
    let validationResult = validateRegDatagram(req.body)
    if (!validationResult.allowed)
    {
        let sendToClient = 'Failed! Your inputs contain some ineligible value(s). They are:'
        validationResult.logs.forEach((itor) => {sendToClient += `\n- ${itor}`})
        res.send(sendToClient)
        return
    }

    let serverCfg = require('../server-cfg')
    let mysqlConnector = require('./utils/Database')
    let mysqlQueries = require('./utils/DBQuery')
    let check_mail, check_name
    let { username, display_name, email, password } = req.body

    check_name = await mysqlConnector.query(mysqlQueries.CHECK_EXISTING_USERNAME, [username])
    if (check_name[0].length !== 0)
    {    
        if (check_name[0][0].userName === username)
        {
            res.send('Failed! That username has already been taken!')
            logger(`A client @ ${getConnectedIPv4(req)} failed to create a new account. Reason: An existing username is present.`)
            return
        }
    }

    check_mail = await mysqlConnector.query(mysqlQueries.CHECK_EXISTING_EMAIL, [email])
    if (check_mail[0].length !== 0)
    {
        if (check_mail[0][0].userEmail === email)
        {
            res.send('Failed! That email has already been taken!')
            logger(`A client @ ${getConnectedIPv4(req)} failed to create a new account. Reason: An existing email is present.`)
            return
        }
    }
    
    let {v4} = require('uuid')
    let bcrypt = require('bcrypt')
    let hashedPassword

    await bcrypt.hash(password, serverCfg.BCRYPT_SALTS).then((result) => { hashedPassword = result })
    await mysqlConnector.query(mysqlQueries.REGISTER, [v4(), username, display_name, email, hashedPassword])

    res.send('Success! A new account has been created!')
    logger(`Back end server created a new account for a client @ ${getConnectedIPv4(req)}.`)
}
