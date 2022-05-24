import ChatLog from "./ChatLog"
import ActiveUsers from "./ActiveList"
import InputBox from "./InputBox"

const ConversationScreen = (props) =>
{   
    return(
        <div className='convoHolder'>
            <div className='upperComp'>
                <ChatLog />
                <ActiveUsers />
            </div>
            
            <div className='lowerComp'>
                <InputBox />
            </div>
        </div>
    )
}

export default ConversationScreen