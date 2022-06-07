import React, { useState } from "react"
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
    const [name, set_name] = useState('')
    const [status, set_status] = useState('none')
    const [statusmsg, set_statusmsg] = useState('Connecting...')

    const signIn = () => {
        let result = validateSuccess(name)
        if (!result.success) return
        else {
            set_status('wait')
            set_statusmsg('Connecting...')
            document.getElementById('signinButton').disabled = true
        }

        axios.get('/pingSv')
        .then(result => { set_status('success'); set_statusmsg('Success!') })
        .catch(err => { 
            document.getElementById('signinButton').disabled = false
            set_status('error') 
            set_statusmsg("Connection failed. Reason: The service is OFFLINE!") 
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
                <input id='signinField' type='text' placeholder='Enter a name to join!' onChange={(e) => { set_name(e.target.value) }}></input>
                <button id='signinButton' onClick={() => signIn()}>Confirm</button>
            </div>
        </div>
    )
}

export default SigninWidget