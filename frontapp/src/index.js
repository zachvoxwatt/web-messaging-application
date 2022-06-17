import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './css/index.css';
import ExecutingApplication from './scripts/App';
import { AuthProvider } from './context/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ExecutingApplication />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
