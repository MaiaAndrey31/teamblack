import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import  Router from './Routes/Routes'
import  GlobalStyle  from './GlobalStyles'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Router />
   </BrowserRouter>
    <GlobalStyle />
    
  </React.StrictMode>
);

