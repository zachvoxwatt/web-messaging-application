import { validateForm } from './utils/RegFormValidation'
import { useState } from 'react'
import '../css/Register.css'

const RegisterScreen = () =>
{
    const [username, set_username] = useState('')
    const [display_name, set_displayname] = useState('')
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')
    const [confirmpass, set_confirmpass] = useState('')

    const datagram = {
        username: username,
        display_name: display_name,
        email: email,
        password: password,
        confirmpass: confirmpass
    }

    return(
        <div className='registrationMaster'>
            <div id='infoBox'>    
                <h2 id='registerTitle'>Registration</h2>

                <div id='fieldsBox'>
                    <div id='regForm'>
                        <input className='regFields' type='text' placeholder='Username' id='regUname' onInput={(event) => {set_username(event.target.value)}}/>

                        <input className='regFields' type='text' placeholder='Display Name' onInput={(event) => {set_displayname(event.target.value)}}/>
                        
                        <input className='regFields' type='email' placeholder='Email' onInput={(event) => {set_email(event.target.value)}}/>
                        
                        <input className='regFields' type='password' placeholder="Password" onInput={(event) => {set_password(event.target.value)}}/>
                        
                        <input className='regFields' type='password' id='regConfPass' placeholder='Password Confirmation' onInput={(event) => {set_confirmpass(event.target.value)}}/>
                    </div>
                </div>

                <div id='buttonsHolder'>
                        <button id='createButt' onClick={(e) => {validateForm(datagram)}}>Summon your account!</button>
                        <button id='cancelButt'>Cancel</button>
                </div>
            </div>

            <div id='errorBox'><h5 id='errorMsg'>Lorem ipsum dolor sit amet</h5></div>
    </div>    
    )
}

export default RegisterScreen