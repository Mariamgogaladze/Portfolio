import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Titillium Web', sans-serif;
    background-color: white;
  }
  *, *:after, *:before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

