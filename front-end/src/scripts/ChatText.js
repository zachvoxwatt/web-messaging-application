import '../css/ChatText.css'

const ChatText = (props) =>
{
    let MAINTANANCE_MODE = true
    console.log(props)
    
    if (!MAINTANANCE_MODE)
        return(
            <div className='chatContent'>
                <p>
                    Incoming message! Sender is: {props.data.sender}<br/>
                    Content as follow: {props.data.content}
                </p>
            </div>
        )

    else
        return(
            <div className='chatContent'>
                <div className='avatar'>

                </div>
                <div className='text'>
                    {props.data.sender}: {props.data.content}
                </div>
            </div>
        )

}

export default ChatText