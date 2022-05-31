import React from 'react'
import ReactDOM from 'react-dom/client'
import RunnyApplication from './scripts/_RunnyApplication'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><BrowserRouter><RunnyApplication /></BrowserRouter></React.StrictMode>);
