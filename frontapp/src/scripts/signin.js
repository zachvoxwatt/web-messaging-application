import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
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

const JOIN_URL = '/joinapp'

const SigninWidget = () =>
{
    const location = useLocation()
    const nav = useNavigate()
    const { setAuth } = useAuth()
    const [name, set_name] = useState('')
    const [status, set_status] = useState('none')
    const [statusmsg, set_statusmsg] = useState('Connecting...')
    
    useEffect(() =>{
        if (location.state?.notJoined)
        {
            set_status('error')
            set_statusmsg(location.state.message)
        }
    }, [location])

    const signIn = async () => {
        let result = validateSuccess(name)
        if (!result.success) return
        else {
            set_status('wait')
            set_statusmsg('Connecting...')
            document.getElementById('signinButton').disabled = true
        }
        
        try
        {
            let response = await axios.post(JOIN_URL, {displayName: name}, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
            
            let userID = response?.data?.userID
            let accessToken = response?.data?.accessToken

            setAuth({userID, displayName: name, accessToken})
            set_status('success')
            set_statusmsg('Successfully joined!')
            redirectToApp()
        }
        catch (err) {
            let errmsg
            if (!err?.response) errmsg = 'Failed to connect. Reason: The service is OFFLINE'
            else if (err.response?.status === 400) errmsg = 'Name can not be blank! It should have alphabetical letters, numeric digits or emojis'
            else if (err.response?.status === 401) errmsg = 'Unauthorized'
            else if (err.response?.status === 409) errmsg = `The name '${name}' has been taken by someone. Please use another name!`
            else errmsg = 'Login failed. Contact the author for resolution'

            set_status('error')
            set_statusmsg(errmsg)
        }

        finally { document.getElementById('signinButton').disabled = false }
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