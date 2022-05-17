import '../css/ChatText.css'

const ChatText = (props) =>
{
<<<<<<< Updated upstream
    let MAINTANANCE_MODE = true
    
    
    
    if (!MAINTANANCE_MODE)
        return(
            <div className='chatContent'>
                <p>
                    Incoming message! Sender is: {props.data.sender}<br/>
                    Content as follow: {props.data.content}
                </p>
            </div>
        )
=======
    let displayData = props.data
>>>>>>> Stashed changes

    //renders the incoming contents
    if (displayData.current_user.id !== displayData.message.sender.id) 
        return(
            <div className='bubbleContent'>
                <div className='senderAvatar'>

                </div>
                
                <p className='receivedText'>{displayData.message.content}</p>
            </div>
        )
    
    //renders the sent content by user
    else return(
        <div className='bubbleContent'>
            <p className='sentText'>{displayData.message.content}</p>
        </div>
    )
}

export default ChatText