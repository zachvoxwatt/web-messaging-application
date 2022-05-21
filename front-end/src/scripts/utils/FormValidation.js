const validateForm = (datagram) =>
{
    let samp_uname = datagram.username
    let samp_email = datagram.email
    let samp_pass = datagram.password
    let samp_cpass = datagram.confirmpass

    let regex_uname_pass = /^[a-zA-Z0-9._]+$/
    let regex_email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})/

    if (samp_uname.length === 0 || samp_email.length === 0 || samp_pass.length === 0 || samp_cpass.length === 0)
    {
        console.log('Submit denied. Reason: Input fields can not be empty!')
        return
    }

    if (!samp_uname.match(regex_uname_pass))
    {
        console.log('Unacceptable Username. Reason: Input information contains prohibited special characters or spacing')
        return
    }

    if (samp_uname.length < 4 || samp_uname.length > 17)
    {
        console.log('Unacceptable Username. Reason: Input information is too long. It should be between 4 to 17 characters')
        return
    }
    
    if (!samp_email.match(regex_email))
    {
        console.log('Unacceptable Email. Please input a valid email format')
        return
    }    

    if (!samp_pass.match(regex_uname_pass))
    {
        console.log('Unacceptable Password. Reason: Information contains prohibited special characters or spacing')
        return
    }

    if (samp_pass.length < 8)
    {
        console.log('Unacceptable Password. Reason: Input information is too short. It must be at least 6 characters')
        return
    }

    if (samp_pass !== samp_cpass)
    {
        console.log('Both password fields do not match. Please try again')
        return
    }

    console.log('Successfully Validated. Data sent to back end server, here is the datagram:')
    console.log(datagram)
}

export { validateForm }