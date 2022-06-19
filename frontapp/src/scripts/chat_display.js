import '../css/chat_scrollbar.css'
import '../css/chat_comp.css'
import '../css/chat_text.css'
import ChatInputWidget from '../scripts/chat_input'
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import useAuth from '../hooks/useAuth'
import useLeaveApp from '../hooks/useLeaveApp'

const socketURL = 'http://localhost:3001'
const ChatDisplayWidget = () =>
{
    const { auth } = useAuth()
    const [textHistory, updateTextHistory] = useState([])
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        if (socket === null) setSocket(io(socketURL))
        if (socket) socket.on('message', data => update(data))
    }, [socket])

    const nav = useNavigate()
    const leave = useLeaveApp()

    const update = (content) => { updateTextHistory(prevData => prevData.concat(content) )}

    const leaveApp = async () => 
    {
        socket.emit('leaveapp')
        setSocket(null)
        await leave()
        nav('/join');
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
                    
                    {textHistory.map(itor => <ChatTextBubble key={itor.contentID} owner={itor.userID} content={itor.contents} curr_session={auth} />)}
                </div>
            </div>

            <ChatInputWidget data={auth}/>
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
    let contentOwnerID = props.owner
    let text = props.content
    let session = props.curr_session

    let selected_style
    if (contentOwnerID !== session.userID) selected_style = bubbleStyles.received
    else selected_style = bubbleStyles.sent

    return(
        <div className='chatTextMain'>
            <p style={selected_style} className='chatTextContent'>{text}</p>
        </div>
    )
}

export default ChatDisplayWidget

