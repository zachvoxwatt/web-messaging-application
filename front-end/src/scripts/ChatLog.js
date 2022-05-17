import '../css/Conversation.css'
import '../css/Scrollbar.css'
import ChatText from '../scripts/ChatText'
import {getData} from '../tests/data/sample'

const ChatLog = (props) =>
{
<<<<<<< Updated upstream
    let data1 = {
        'sender': 'Zach',
        'content': 'Hello! I am the guy who is making this app.'
    }

    let data2 = {
        'sender': 'Zach',
        'content': "This is just a prototype again!\nDon't judge too much 😗. Võ Công Kha"
    }

    let data3 = {
        'sender': 'System',
        'content': 'a'
    }
=======
    let d1 = getData(1)
    let d2 = getData(3)
>>>>>>> Stashed changes

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
            </div>
        </div>
    )
}

export default ChatLog