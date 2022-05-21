<<<<<<< Updated upstream
=======
import { enterKeyPressed } from './utils/InputBoxHandler'
>>>>>>> Stashed changes
import '../css/InputBox.css'

const InputBox = (props) =>
{
<<<<<<< Updated upstream
    const enterKeyPressed = (event) =>
    {
        let regexrule = /^\n*$/
        let keycode = (event.keyCode ? event.keyCode : event.which)
        let contents = event.target.value

        if(keycode === 13 && !event.shiftKey)
        {
            if (contents !== '' && (contents.match(regexrule) === null))
            {
                let tobeSent = event.target.value.trim()
                console.log(tobeSent) // send message method goes here!                
            }

            event.target.value = ''
            event.preventDefault()
        }
    }

=======
>>>>>>> Stashed changes
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