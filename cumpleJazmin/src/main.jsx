import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Invite from './components/invite/Invite.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Invite />
  </StrictMode>
)
