import ChatLog from "./ChatLog"
import InputBox from "./Input"
import ActiveUsers from "./ActiveList"

const ConversationScreen = (props) =>
{   
    return(
        <div className='convoHolder'>
            <div className='upperComp'>
                <ChatLog />
                <ActiveUsers />
            </div>
            
            <div className='lowerComp'><InputBox /></div>
        </div>
    )
}

export default ConversationScreen