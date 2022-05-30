import React, { useState } from 'react'
import LoginScreen from './Login'
import RegisterScreen from './Registration'
import ConversationScreen from './Conversation'
import { Route, Routes, Navigate } from 'react-router-dom'

const RunnyApplication = () =>
{
    const defaultState = {
        authenticated: false
    }

    const [state, setState] = useState(defaultState)

    return(
        <div>
            <Routes>
                <Route path='/'>
                    <Route path='' element={<Navigate to="/login" replace />}></Route>
                    <Route path='*' element={<Navigate to="/login" replace />}></Route>
                    <Route path='login' element={<LoginScreen session={state}/>}></Route>
                    <Route path='register' element={<RegisterScreen session={state}/>}></Route>
                    <Route path='app' element={<ConversationScreen session={state}/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default RunnyApplication