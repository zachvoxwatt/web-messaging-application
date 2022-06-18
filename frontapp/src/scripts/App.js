import SigninWidget from './signin';
import ChatDisplayWidget from './chat_display';
import RequiredAuth from '../scripts/AuthMandatory'
import { Routes, Route, Navigate } from 'react-router-dom'

const ExecutingApplication = () => {
  return (
    <div>
        <Routes>
          <Route path='/'>
            <Route path='' element={<Navigate to="/join" replace />}></Route>
            <Route path='*' element={<Navigate to="/join" replace />}></Route>
            <Route path='join' element={<SigninWidget />}></Route>
            
            <Route element={<RequiredAuth />}>
              <Route path='texttime' element={<ChatDisplayWidget />}></Route> 
            </Route>
            </Route>
        </Routes>
    </div>
  )
}

export default ExecutingApplication;
