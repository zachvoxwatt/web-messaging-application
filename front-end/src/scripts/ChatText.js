import '../css/ChatText.css'

const ChatText = (props) =>
{
    let displayData = props.data

    //renders the incoming contents
    if (displayData.current_user.id !== displayData.message.sender.id) 
        return(
            <div className='bubbleContent'>
                <div className='senderNamePlaceholder'>
                    <p className='senderName'>{displayData.message.sender.display_name}</p>
                </div>
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