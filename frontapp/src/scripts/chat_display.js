import '../css/chat_scrollbar.css'
import '../css/chat_comp.css'
import '../css/chat_text.css'
import ChatInputWidget from '../scripts/chat_input'
import { io } from 'socket.io-client'
import React, { useState, useEffect } from "react";

const ChatDisplayWidget = () =>
{
    const [socket, setSocket] = useState(null)
    const [textHistory, updateTextHistory] = useState([])

    useEffect(() => {
        if (socket === null) setSocket(io('localhost:3001'))
        if (socket) socket.on('message', data => update(data))
    }, [socket])

    const update = (content) => { updateTextHistory(prevData => prevData.concat(content))}

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
                    
                    {textHistory.map(itor => <ChatTextBubble key={Math.floor(Math.random() * 2147483647)} data={itor} />)}
                </div>
            </div>

            <ChatInputWidget />
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

export default ChatDisplayWidget

