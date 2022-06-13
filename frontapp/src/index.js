import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import ExecutingApplication from './scripts/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ExecutingApplication />
    </React.StrictMode>
);
