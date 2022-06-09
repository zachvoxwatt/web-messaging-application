import axios from "../api/axios"

const ChatInputWidget = (props) =>
{
    const sendText = async (data) => 
    {
        let contents
        if (data) contents = data
        else contents = document.getElementById('chatInputBox').value

        if (contents.trim().length === 0) { document.getElementById('chatInputSendButton').disabled = true; return }
        else document.getElementById('chatInputSendButton').disabled = false

        await axios.post('/sendToBackend', (contents)).then(r => { console.log('message sent successfully')})
        document.getElementById('chatInputBox').value = ''
    }

    const updateInputBox = (event) =>
    {
        event.target.scrollTop = event.target.scrollHeight
        event.target.style.height = 'auto'
        event.target.style.height = event.target.scrollHeight - 20 + 'px'

        if (event.target.value.trim().length === 0) document.getElementById('chatInputSendButton').disabled = true
        else document.getElementById('chatInputSendButton').disabled = false
    }

    const scrollToBottom = () =>
    {
        let component = document.getElementById('chatInputBox')
        component.scrollTop = component.scrollHeight
    }

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
                sendText(tobeSent) // send message method goes here!
            }

            event.target.value = ''
            event.preventDefault()
            event.target.style.height = '18px'            
        }
    }

    return(
        <div className='chatInputComp'>
            <div className='chatInputUtils'>
                    <textarea rows='1' id='chatInputBox' onKeyDown={(event) => enterKeyPressed(event)} onLoad={event => {scrollToBottom()}} onChange={(event) => { updateInputBox(event) }}></textarea>
                    <button id='chatInputSendButton' onClick={(e) => sendText()}>Send</button>
            </div>
            
            <p id='chatInputTips'>Here is a tip! To send a text, press 'ENTER' or simply press that obvious button over there!<br/>To break a line, use 'SHIFT' and 'ENTER' combination!</p>
        </div> 
    )
}

export default ChatInputWidget
