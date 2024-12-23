import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthContextProvider from './context/AuthProvider.jsx'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import ShopContextProvider from './context/ShopProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <ShopContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ShopContextProvider>
  </AuthContextProvider>
  </StrictMode>,
)
