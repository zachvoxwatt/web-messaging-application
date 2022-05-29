import '../css/Conversation.css'
import '../css/Scrollbar.css'
import ChatText from '../scripts/ChatText'
import {getCurrentUser, getData} from '../tests/data/sample'

const ChatLog = (props) =>
{
    

    return(
        <div className='chatLog' >
            <div className='chatLogScroll'>
                <ChatText incoming={getData(1)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(2)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(3)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(4)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(5)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(6)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(7)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(8)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(9)} current_user={getCurrentUser()}/>
                <ChatText incoming={getData(10)} current_user={getCurrentUser()}/>
            </div>
        </div>
    )
}

export default ChatLog