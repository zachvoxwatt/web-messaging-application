const validateForm = (datagram) =>
{
    let errorboxh5 = document.getElementById('errorBox')
    let errormsgh5 = document.getElementById('errorMsg')
    
    let samp_uname = datagram.username
    let samp_email = datagram.email
    let samp_pass = datagram.password
    let samp_cpass = datagram.confirmpass

    let regex_uname_pass = /^[a-zA-Z0-9._]+$/
    let regex_email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})/

    let errormsg = ''
    if (samp_uname.length === 0 || samp_email.length === 0 || samp_pass.length === 0 || samp_cpass.length === 0)
    {
        errormsg = 'Submission failed!<br/>One or more input fields is empty!'
        updateNotiBox(errorboxh5, errormsgh5, errormsg, false)
        return 
    }

    if (!samp_uname.match(regex_uname_pass))
    {
        errormsg = 'Submission failed!<br/>Username contains prohibited special characters or spacings!'
        updateNotiBox(errorboxh5, errormsgh5, errormsg, false)
        return 
    }

    if (samp_uname.length < 4 || samp_uname.length > 17)
    {
        errormsg = 'Submission failed!<br/>Username is either too short or too long. It should be between 4 and 17 characters.'
        updateNotiBox(errorboxh5, errormsgh5, errormsg, false)
        return 
    }
    
    if (!samp_email.match(regex_email))
    {
        errormsg = 'Submission failed!<br/>Given email is not valid'
        updateNotiBox(errorboxh5, errormsgh5, errormsg, false)
        return 
    }    

    if (!samp_pass.match(regex_uname_pass))
    {
        errormsg = 'Submission failed!<br/>Password contains prohibited special characters or spacings!'
        updateNotiBox(errorboxh5, errormsgh5, errormsg, false)
        return 
    }

    if (samp_pass.length < 8)
    {
        errormsg = 'Submission failed!<br/>Password is too short. It should be more than or equal 8 characters'
        updateNotiBox(errorboxh5, errormsgh5, errormsg, false)
        return 
    }

    if (samp_pass !== samp_cpass)
    {
        errormsg = 'Submission failed!<br/>Both password fields do not match.'
        updateNotiBox(errorboxh5, errormsgh5, errormsg, false)
        return 
    }

    errormsg = 'Submission successful!<br/>Please wait...'
    updateNotiBox(errorboxh5, errormsgh5, errormsg, true)
}

var timeOutRefresh = null

const updateNotiBox = (box, h5, msg, isAllowed) =>
{
    clearTimeout(timeOutRefresh)
    fadeIn(box)
    h5.innerHTML = msg
    box.style.display = 'block'
    
    if (!isAllowed) { timeOutRefresh = setTimeout(() => fadeOut(box), 3000); return }
    else
    {
        box.style.background = '#238636'
        document.getElementById('createButt').disabled = true
        document.getElementById('cancelButt').disabled = true
        fadeOut(box)
    }
}

const fadeIn = (component) => { component.style.opacity = 1 }
const fadeOut = (component) => { component.style.opacity = 0 }


export { validateForm }