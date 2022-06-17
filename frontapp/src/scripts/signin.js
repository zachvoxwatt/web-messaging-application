import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../context/AuthProvider"
import axios from '../api/axios'
import '../css/signin.css'

const noticeStyles = {
    error: {
        background: '#382328',
        borderColor: '#853535'
    },
    wait: {
        background: '#26619c',
        borderColor: '#87cefa'
    },
    success: {
        background: '#2e8b57',
        borderColor: '#3cb371'
    }
}

const SigninWidget = () =>
{
    const { setAuth } = useContext(AuthContext) 
    const [name, set_name] = useState('')
    const [status, set_status] = useState('none')
    const [statusmsg, set_statusmsg] = useState('Connecting...')
    const nav = useNavigate()

    const signIn = async () => {
        let result = validateSuccess(name)
        if (!result.success) return
        else {
            set_status('wait')
            set_statusmsg('Connecting...')
            document.getElementById('signinButton').disabled = true
        }

        await axios.get('/pingsv')
        .then(result => {
            if (result.data.isOnline) set_statusmsg('Validating...')
        })
        .catch(err => { 
            document.getElementById('signinButton').disabled = false
            set_status('error') 
            set_statusmsg("Connection failed. Reason: The service is OFFLINE!")
            return
        })

        await axios.post('/joinapp', { displayName: name })
        .then(result => {
            let accessToken = result?.data?.accessToken
            let userID = result?.data?.userID
            let displayName = result?.data?.displayName
            
            setAuth({userID, displayName, accessToken})
            redirectToApp()
            set_status('success')
            set_statusmsg('Successfully joined!')
        })
        .catch(err => {
            set_status('error')
            set_statusmsg(`The name '${name}' has been taken by someone else. Please use another name!`)
            return
        })
        .finally(() => {
            document.getElementById('signinButton').disabled = false
        })
    }

    const validateSuccess = (sample) =>
    {
        let result = {
            success: true,
            processed: sample.trim()
        }

        if (result.processed.length === 0)
        {
            set_status('error')
            set_statusmsg('Name can not be blank! It should have alphabetical letters, numeric digits or emojis')
            result.success = false
        }

        return result
    }

    const redirectToApp = () => { setTimeout(() => { nav('/texttime') }, 1000) }

    return(
        <div className="signinMain">
            <h2 id='signinTitle'>Join the chat for FREE candies 🍬🍭🍫</h2>

            {
                status === 'error' &&
                <div className='signinNotice' style={noticeStyles.error}>
                    <h4 id='signinMsg'>{statusmsg}</h4>
                </div> 
            }

            {
                status === 'wait' &&
                <div className='signinNotice' style={noticeStyles.wait}>
                    <h4 id='signinMsg'>{statusmsg}</h4>
                </div> 
            }

            {
                status === 'success' &&
                <div className='signinNotice' style={noticeStyles.success}>
                    <h4 id='signinMsg'>{statusmsg}</h4>
                </div> 
            }

            <div className="signinForm">
                <input id='signinField' type='text' placeholder='Enter a name to join!' onChange={(e) => { set_name(e.target.value.trim()) }}></input>
                <button id='signinButton' onClick={() => signIn()}>Confirm</button>
            </div>
        </div>
    )
}

export default SigninWidget