import '../css/ChatText.css'

const ChatText = (props) =>
{
    let display_data = props.incoming
    let current_user = props.current_user
    
    //renders the incoming contents
    if (current_user.id !== display_data.sender.id) 
        return(
            <div className='bubbleContent'>
                <div className='senderNamePlaceholder'>
                    <p className='senderName'>{display_data.sender.display_name}</p>
                </div>
                <div className='senderAvatar'>

                </div>
                
                <p className='receivedText'>{display_data.contents}</p>
            </div>
        )
    
    //renders the sent content by user
    else return(
        <div className='bubbleContent'>
            <p className='sentText'>{display_data.contents}</p>
        </div>
    )
}

export default ChatText