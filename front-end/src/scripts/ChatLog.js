import '../css/Conversation.css'
import '../css/Scrollbar.css'
import ChatText from '../scripts/ChatText'

const ChatLog = (props) =>
{
    let data1 = {
        'sender': 'Zach',
        'content': 'Hello! I am the guy who is making this app.'
    }

    let data2 = {
        'sender': 'Zach',
        'content': "This is just a prototype again! Don't judge too much 😗. Võ Công Kha"
    }

    return(
        <div className='chatLog' >
            <div className='chatLogScroll'>
                <ChatText data={data1}/>
                <ChatText data={data2}/>
            </div>
        </div>
    )
}

export default ChatLog