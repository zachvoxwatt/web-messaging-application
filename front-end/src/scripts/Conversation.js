import ChatLog from "./ChatLog"
import ActiveUsers from "./ActiveList"
import InputBox from "./InputBox"

const ConversationScreen = (props) =>
{
    console.log(props)

    return(
        <div className='convoHolder'>
            <div className='upperComp'>
                <ChatLog incoming={props.messages}/>
                <ActiveUsers incoming={props.connected_users}/>
            </div>
            
            <div className='lowerComp'>
                <InputBox />
            </div>
        </div>
    )
}

export default ConversationScreen