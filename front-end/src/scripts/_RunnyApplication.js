import React from 'react'
import LoginScreen from './Login'
import RegisterScreen from './Registration'
import ConversationScreen from './Conversation'
import { Route, Routes, Navigate } from 'react-router-dom'

const RunnyApplication = () =>
{
    return(
        <div>
            <Routes>
                <Route path='/'>
                    <Route path='' element={<Navigate to="/login" replace />}></Route>
                    <Route path='*' element={<Navigate to="/login" replace />}></Route>
                    <Route path='login' element={<LoginScreen />}></Route>
                    <Route path='register' element={<RegisterScreen />}></Route>
                    <Route path='app' element={<ConversationScreen />}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default RunnyApplication