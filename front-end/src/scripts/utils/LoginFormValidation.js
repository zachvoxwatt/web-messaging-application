const validateForm = (params) =>
{
    let samp_name = Array.from(params.name)
    let samp_pass = Array.from(params.pass)
    
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

const sendToBackend = (params) =>
{
    if (params.name.trim() === '' && params.pass.trim() === '')
    {
        document.getElementById('loginButt').disabled = true
        return
    }

    const db_name = 'testing123'
    const db_pass = 'oppo66666'

    if (params.name === db_name && params.pass === db_pass) console.log('Success!')
    else
    {
        let loginBox = document.getElementById('loginBoxID')
        let inputFieldsHolder = document.getElementById('loginFieldsID')
        let loginButtonHolder = document.getElementById('loginButtonHolderID')
        let loginFailBox = document.getElementById('loginFailBoxID')

        loginBox.style.height = '57.5%'
        inputFieldsHolder.style.height = '26.05%'
        loginButtonHolder.style.height = '8.5%'
        loginFailBox.style.display = 'block'
    }
}

export { validateForm, sendToBackend }