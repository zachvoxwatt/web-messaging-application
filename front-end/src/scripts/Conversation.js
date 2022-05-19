import ChatLog from "./ChatLog"
import ActiveUsers from "./ActiveList"
import InputBox from "./InputBox"
import InputUtils from "./InputUtils"

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
                <InputUtils />
            </div>
        </div>
    )
}

export default ConversationScreen