import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NvqApp from './NvqApp';
import reportWebVitals from './reportWebVitals';

const Nvqroot = ReactDOM.createRoot(document.getElementById('Nvqroot'));
Nvqroot.render(
  <React.StrictMode>
    <NvqApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
