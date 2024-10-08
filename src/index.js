import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App_2 from './App_2';
import App_3 from './App_3';
import App_4 from './App_4';
import App_5 from './App_5';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <>
            <App />
            <App_2 />
            <App_3 />
            <App_4 />
            <App_5 />
        </>
    </React.StrictMode>
    
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
