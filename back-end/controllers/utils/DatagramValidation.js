const validateRegDatagram = (datagram) =>
{
    let samp_uname = datagram.username
    let samp_dispname = datagram.display_name
    let samp_email = datagram.email
    let samp_pass = datagram.password
    let samp_cpass = datagram.confirmpass

    let regex_uname_pass = /^[a-zA-Z0-9._]+$/
    let regex_email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})/
    let returndtg = {
        allowed: false,
        logs: []
    }

    // Validate username's length and format
    if (samp_uname.length === 0)
        returndtg.logs.push('Username field is empty!')
    
    else if (!samp_uname.match(regex_uname_pass)) 
        returndtg.logs.push('Username contains prohibited special characters or spacings!')

    else if (samp_uname.length < 4 || samp_uname.length > 17) 
        returndtg.logs.push('Username is either too short or too long. It should be between 4 and 17 characters.')

    // Validate email's length and format
    if (samp_email.length === 0)
        returndtg.logs.push('Email field is empty!')
    
    else if (!samp_email.match(regex_email)) 
        returndtg.logs.push('Email is not valid!')

    // Validate password length and format
    if (samp_pass.length === 0) 
        returndtg.logs.push('Password field is empty!')
    
    else if (!samp_pass.match(regex_uname_pass)) 
        returndtg.logs.push('Password contains prohibited special characters or spacings!')

    else if (samp_pass.length < 8) 
        returndtg.logs.push('Password is too short. It should be more than or equal 8 characters')

    // Validate confirmation password length and format; and confirm password
    if (samp_cpass.length === 0) 
        returndtg.logs.push('Confirm password field is empty!')

    else if (!samp_cpass.match(regex_uname_pass)) 
        returndtg.logs.push('Confirmation password contains prohibited special characters or spacings!')
    
    else if (samp_pass !== samp_cpass) 
        returndtg.logs.push('Both password fields do not match.')

    // Set allowed access for the return datagram and return the whole to the caller
    if (returndtg.logs.length === 0) returndtg.allowed = true

    return returndtg
}

const validateLoginDatagram = (datagram) =>
{
    let samp_uname = datagram.userName
    let samp_pass = datagram.userPassword
    
    let regex_uname_pass = /^[a-zA-Z0-9._]+$/
    let returndtg = {
        allowed: false,
        violations: 0
    }

    if (samp_uname.length === 0) returndtg.violations++
    if (!samp_uname.match(regex_uname_pass)) returndtg.violations++
    if (samp_uname.length < 4 || samp_uname.length > 17) returndtg.violations++
    if (samp_pass.length === 0) returndtg.violations++
    if (!samp_pass.match(regex_uname_pass)) returndtg.violations++
    if (samp_pass.length < 8) returndtg.violations++

    if (returndtg.violations === 0) returndtg.allowed = true
    return returndtg
}

exports.validateLoginDatagram = validateLoginDatagram
exports.validateRegDatagram = validateRegDatagram
