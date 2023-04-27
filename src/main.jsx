import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import CartState from './context/CartState';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartState>
    <App />
  </CartState>
  </BrowserRouter>
)
