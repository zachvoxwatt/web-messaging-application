import '../css/Input.css'
import {checkLineNumbers, checkLongText} from './InputUtils'

const InputBox = (props) =>
{
    return(
        <div className='inputBox'>
            <textarea wrap='hard' type='text' id='textField' rows='3'></textarea>
        </div>
    )
}

export default InputBox