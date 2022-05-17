import '../css/Conversation.css'
import '../css/Scrollbar.css'
import ChatText from '../scripts/ChatText'
import {getData} from '../tests/data/sample'

const ChatLog = (props) =>
{
    let d1 = getData(1)
    let d2 = getData(3)

    return(
        <div className='chatLog' >
            <div className='chatLogScroll'>
                <ChatText data={d1}/>
                <ChatText data={d2}/>
                <ChatText data={getData(4)}/>
                <ChatText data={getData(2)}/>
                <ChatText data={getData(5)}/>
                <ChatText data={getData(6)}/>
                <ChatText data={getData(2)}/>
                <ChatText data={getData(2)}/>
                <ChatText data={getData(2)}/>
                <ChatText data={getData(2)}/>
                <ChatText data={getData(2)}/>
                <ChatText data={getData(2)}/>
                <ChatText data={getData(2)}/>
                <ChatText data={getData(2)}/>
            </div>
        </div>
    )
}

export default ChatLog