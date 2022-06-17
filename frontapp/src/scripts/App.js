import SigninWidget from './signin';
import ChatDisplayWidget from './chat_display';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const ExecutingApplication = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='' element={<Navigate to="/join" replace />}></Route>
            <Route path='*' element={<Navigate to="/join" replace />}></Route>
            <Route path='join' element={<SigninWidget />}></Route>
            <Route path='texttime' element={<ChatDisplayWidget />}></Route> 
          </Route>
        </Routes>    
      </BrowserRouter>
    </div>
  )
}

export default ExecutingApplication;
