import '../css/chat_scrollbar.css'
import '../css/chat_comp.css'
import '../css/chat_text.css'
import ChatInputWidget from '../scripts/chat_input'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import useAuth from '../hooks/useAuth'
import useRefreshToken from '../hooks/useRefreshToken'
import axios from '../api/axios'

const URL = 'localhost:3001'
const ChatDisplayWidget = () =>
{
    const refresh = useRefreshToken()
    const { auth } = useAuth()
    const { setAuth } = useAuth()
    const [textHistory, updateTextHistory] = useState([])
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        if (socket === null) setSocket(io(URL))
        if (socket) socket.on('message', data => update(data)) 
    }, [socket])

    const nav = useNavigate()
    const update = (content) => { updateTextHistory(prevData => prevData.concat(content))}
    const leaveApp = async () => 
    { 
        setAuth({}); 
        nav('/join');
        socket.emit('leaveapp')
        setSocket(null)
        await axios.get('/leaveapp')
    }

    return(
        <div className="chatMain">
           <div className='chatDisplayComp'>
                <div id='chatDisplayUtils'>
                    <button id='chatLeaveButton' onClick={(e) => { leaveApp() }}>Leave</button>
                </div>

                <div id='chatScrollerComp'>
                    <div id='chatAppInfo'>
                        <h4 id='chatAppAuthor'>Author - Kha 'Voxous' Vox</h4>
                    </div>
                    
                    {textHistory.map(itor => <ChatTextBubble key={Math.floor(Math.random() * 2147483647)} data={itor} />)}
                </div>
            </div>

            <ChatInputWidget />

            <button onClick={() => {refresh()}}>Click to refresh token</button>
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

