import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MiPortfolio } from './MiPortfolio'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiPortfolio />
  </StrictMode>,
)
