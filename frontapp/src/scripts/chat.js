import '../css/chat_scrollbar.css'
import '../css/chat_comp.css'
import '../css/chat_text.css'
import React from "react";

const randomarr = ['Hello!', 'Hi!', 'What brings you here today?', 'Just a normal conversation 😗', 'Ah I see. What games do you play?', 'I play lots of them. My fav genre is sandbox and open world. You?', 'I love MMORPG', 'Awww sad that We do not share mutual genres', 'Oh well, its good seeing ya, gtg now', 'All right man, have a nice day!', 'You take good care now April!', 'See? She was nice...', 'She saw our faces', 'So what? We are just a bunch of guys who are not trying to kill her.', 'If you say so...', 'Common Brenner, I know you are better than that.', "Let's go kill those gun-toting assholes she was talking about. That will brighten your day up."]

const ChatWidget = () =>
{
    window.onload = () =>
    {
        scrollToBottom()
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
        }
    }

    const sendText = (data) => 
    {
        let contents
        if (data) contents = data
        else contents = document.getElementById('chatInputBox').value

        if (contents.trim().length === 0) { document.getElementById('chatInputSendButton').disabled = true; return }
        else document.getElementById('chatInputSendButton').disabled = false

        console.log(contents.trim()) // send method here!
        document.getElementById('chatInputBox').value = ''
    }

    return(
        <div className="chatMain">
           <div className='chatDisplayComp'>
                <div id='chatUtils'>
                    Put something here later...
                </div>

                <div id='chatScrollerComp'>
                    <div id='chatAppInfo'>
                        <h4 id='chatAppAuthor'>Author - Kha 'Voxous' Vox</h4>
                    </div>
                    
                    {randomarr.map(itor => <ChatTextBubble key={Math.floor(Math.random() * 2147483647)} data={itor} />)}
                </div>
            </div>

            <div className='chatInputComp'>
                <div className='chatInputUtils'>
                    <textarea rows='1' id='chatInputBox' onKeyDown={(event) => enterKeyPressed(event)} onLoad={event => {scrollToBottom()}} onChange={(event) => { updateInputBox(event) }}></textarea>
                    <button id='chatInputSendButton' onClick={(e) => sendText()}>Send</button>
                </div>
                <p id='chatInputTips'>Here is a tip! To send a text, press 'ENTER' or simply press that obvious button over there!<br/>To break a line, use 'SHIFT' and 'ENTER' combination!</p>
            </div> 
        </div>
    )
}

const bubbleStyles = {
    received: {
        background: '#272727',
        float: 'left'
    },
    sent: {
        background: '#bb7620',
        float: 'right'
    }
}

const ChatTextBubble = (props) => 
{
    let selected_style
    if (Math.floor(Math.random() * 2) === 0) selected_style = bubbleStyles.received
    else selected_style = bubbleStyles.sent

    return(
        <div className='chatTextMain'>
            <p style={selected_style} className='chatTextContent'>{props.data}</p>
        </div>
    )
}

export default ChatWidget

