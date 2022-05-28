exports.register = async (req, res, next) => 
{
    let logger = require('./EventLogger')
    let ip = req.connection.remoteAddress || req.headers['x-forwarded-for']
    
    let validationResult = validateDatagram(req.body)
    if (!validationResult.allowed)
    {
        let sendToClient = 'Failed! Your inputs contain some ineligible value(s). They are:'
        validationResult.logs.forEach((itor) => {sendToClient += `\n- ${itor}`})
        res.send(sendToClient)
        return
    }

    let serverCfg = require('../server-cfg')
    let mysqlConnector = require('../controllers/Database')
    let mysqlQueries = require('./DBQuery')
    let check_mail, check_name
    let { username, display_name, email, password } = req.body

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
    let samp_uname = datagram.username
    let samp_dispname = datagram.display_name
    let samp_email = datagram.email
    let samp_pass = datagram.password
    let samp_cpass = datagram.confirmpass

    let regex_uname_pass = /^[a-zA-Z0-9._]+$/
    let regex_email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})/
    let returnmsg = {
        allowed: false,
        logs: []
    }

    // Validate username's length and format
    if (samp_uname.length === 0)
        returnmsg.logs.push('Username field is empty!')
    
    else if (!samp_uname.match(regex_uname_pass)) 
        returnmsg.logs.push('Username contains prohibited special characters or spacings!')

    else if (samp_uname.length < 4 || samp_uname.length > 17) 
        returnmsg.logs.push('Username is either too short or too long. It should be between 4 and 17 characters.')

    // Validate email's length and format
    if (samp_email.length === 0)
        returnmsg.logs.push('Email field is empty!')
    
    else if (!samp_email.match(regex_email)) 
        returnmsg.logs.push('Email is not valid!')

    // Validate password length and format
    if (samp_pass.length === 0) 
        returnmsg.logs.push('Password field is empty!')
    
    else if (!samp_pass.match(regex_uname_pass)) 
        returnmsg.logs.push('Password contains prohibited special characters or spacings!')

    else if (samp_pass.length < 8) 
        returnmsg.logs.push('Password is too short. It should be more than or equal 8 characters')

    // Validate confirmation password length and format
    if (samp_cpass.length === 0) 
        returnmsg.logs.push('Confirm password field is empty!')

    else if (!samp_cpass.match(regex_uname_pass)) 
        returnmsg.logs.push('Confirmation password contains prohibited special characters or spacings!')
    
    // Compare both password fields    
    if (samp_pass !== samp_cpass) 
        returnmsg.logs.push('Both password fields do not match.')

    // Set allowed access for the return datagram and return the whole to the caller
    if (returnmsg.logs.length === 0) returnmsg.allowed = true

    return returnmsg
}