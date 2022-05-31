import { Navigate } from "react-router-dom"
import ChatLog from "./ChatLog"
import ActiveUsers from "./ActiveList"
import InputBox from "./InputBox"

const ConversationScreen = (props) =>
{
    if (!props.session.authenticated)
    {
        console.log(props.session)
        return <Navigate to='/login'/>
    }
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