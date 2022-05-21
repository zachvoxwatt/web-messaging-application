const enterKeyPressed = (event) =>
{
    let regexrule = /^\n*$/
    let keycode = (event.keyCode ? event.keyCode : event.which)
    let contents = event.target.value

    if(keycode === 13 && !event.shiftKey)
    {
        if (contents !== '' && (contents.match(regexrule) === null))
        {
            let tobeSent = event.target.value.trim()
            console.log(tobeSent) // send message method goes here!                
        }

        event.target.value = ''
        event.preventDefault()
    }
}

export { enterKeyPressed }