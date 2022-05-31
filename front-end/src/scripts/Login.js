import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { validateForm } from './utils/LoginFormValidation'
import '../css/Login.css'

const backendServerURL = 'http://localhost:3001/login'
const LoginScreen = (props) =>
{
    const nav = useNavigate()
    
    const [session, set_session] = useState(props.session)
    const [loginname, set_loginname] = useState('')
    const [loginpass, set_loginpass] = useState('')
 
    useEffect(() => { console.log(session) }, [session])

    if (props.session.authenticated) return <Navigate to='/app'/>
    
    const datagram = {
        userName: loginname,
        userPassword: loginpass
    }

    const sendToBackend = () =>
    {
        if (datagram.userName.trim() === '' && datagram.userPassword.trim() === '')
        {
            document.getElementById('loginButt').disabled = true
            return
        }

        axios.post(backendServerURL, datagram)
        .then((response) =>
        {
            console.log(response)
            console.log(session)
            set_session({ authenticated: true }, () => { console.log(session) })
            nav('/app')
        })
        .catch((error) =>
        {
            console.log(error)
        })
        /*
        if (params.name === db_name && params.pass === db_pass) console.log('Success!')
        else
        {
            let loginBox = document.getElementById('loginBoxID')
            let inputFieldsHolder = document.getElementById('loginFieldsID')
            let loginButtonHolder = document.getElementById('loginButtonHolderID')
            let loginFailBox = document.getElementById('loginFailBoxID')

            loginBox.style.height = '57.5%'
            inputFieldsHolder.style.height = '26.05%'
            loginButtonHolder.style.height = '8.5%'
            loginFailBox.style.display = 'block'
        }
        */
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
                    <button onClick={(event) => {sendToBackend()}} id='loginButt'>Sign In</button>
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