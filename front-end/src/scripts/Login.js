import { useState } from 'react'
import { validateForm, sendToBackend } from './utils/LoginFormValidation'
import '../css/Login.css'

const LoginScreen = (props) =>
{
    const [loginname, set_loginname] = useState('')
    const [loginpass, set_loginpass] = useState('')

    const datagram = {
        name: loginname,
        pass: loginpass
    }

    return(
        <div className="loginMaster">
            
            <div className='loginBox' id='loginBoxID'>
                <h2 id='webTitle'>Welcome Back!</h2>

                <div className='inputFieldsHolder' id='loginFieldsID'>
                    <div className='inputForm'>    
                        <input type='text' onInput={(event) => {set_loginname(event.target.value)}} onKeyUp={(e) => validateForm(datagram)} className='logFields' id='loginUname' placeholder='Username goes here!'/>
                        
                        <input type='password' onInput={(event) => {set_loginpass(event.target.value)}} onKeyUp={(e) => validateForm(datagram)} className='logFields' id='loginPass' placeholder="Password is hidden! Don't worry!"/>
                    </div>
                </div>
                
                <div className='loginButtonHolder' id='loginButtonHolderID'>
                    <button onClick={(event) => {sendToBackend(datagram)}} id='loginButt'>Sign In</button>
                </div>

                <div className='loginFailBox' id='loginFailBoxID'><p id='loginFailMsg'>Login failed. No existing username or password matches your input</p></div>
            </div>

            <div className='reminderBox'>
                <p className='reminderText'>Don't have an account?</p>
                <a id='url' href='/register'>Create one here</a>
            </div>
        </div>
    )
}

export default LoginScreen