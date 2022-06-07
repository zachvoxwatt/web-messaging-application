import '../css/chat_comp.css'
import '../css/chat_text.css'
import React from "react";

const randomarr = ['Hello']

const ChatWidget = () =>
{
    return(
        <div className="chatMain">
           <div className='chatDisplayComp'>
                <div id='chatUtils'>
                    Put something here later...
                </div>

                <div id='chatScrollerComp'>
                    <div id='chatAppInfo'>
                        <h3 id='chatAppIntro'>Simple Messaging Web Application</h3>
                        <h4 id='chatAppAuthor'>by Kha 'Voxous' Vox</h4>
                    </div>
                    
                    {randomarr.map(itor => <ChatTextBubble data={itor} />)}
                </div>
            </div>

            <div className='chatInputComp'>
            
            </div> 
        </div>
    )
}

const ChatTextBubble = (props) => 
{
    return(
        <div className='chatTextMain'>
            <p className='chatTextContent'>{props.data}</p>
        </div>
    )
}

export default ChatWidget

