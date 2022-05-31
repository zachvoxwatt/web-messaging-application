const validateForm = (params) =>
{
    let samp_name = Array.from(params.userName)
    let samp_pass = Array.from(params.userPassword)
    
    let name_valid = false
    let pass_valid = false

    if (samp_name.length < 4 || samp_name > 17) name_valid = false
    else name_valid = true

    if (samp_pass.length < 8) pass_valid = false
    else pass_valid = true

    if (name_valid && pass_valid)
    {
        document.getElementById('loginButt').disabled = false
        return
    }
    else
    {        
        document.getElementById('loginButt').disabled = true
        return
    }
}

export { validateForm }
