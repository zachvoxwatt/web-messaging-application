import { enterKeyPressed } from './utils/InputBoxHandler'
import '../css/InputBox.css'

const InputBox = (props) =>
{
    return(
        <div className='inputSpace'>
            <div className='textBox'>
                <textarea className='textField' rows='3' onKeyDown={(event) => enterKeyPressed(event)}></textarea>
            </div>
            <div id='tip'><p>Psst! To break a line, use 'Shift' AND 'Enter'! To send it, simply use 'Enter'!</p></div>
        </div>
    )
}

export default InputBox