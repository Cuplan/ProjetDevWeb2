import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Controleur from './Controleurs/Controleur'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Controleur/> 
    </BrowserRouter>
  </StrictMode>,
)

// changer app pour Controleur en temps et lieu 
