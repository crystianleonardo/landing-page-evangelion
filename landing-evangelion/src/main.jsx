import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rotas } from './rotas/Rotas.jsx'
import './global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>

)
