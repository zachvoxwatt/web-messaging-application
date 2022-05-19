import '../css/Input.css'
import {processComponent} from './InputUtils'

const InputBox = (props) =>
{
    return(
        <div className='inputBox'>
            <textarea wrap='hard' type='text' id='textField' onInput={(event) => {processComponent(event.target)}}></textarea>
            <button id='sendButton'><span id='sendButtonSymbol'>✅</span></button>
        </div>
    )
}

export default InputBox