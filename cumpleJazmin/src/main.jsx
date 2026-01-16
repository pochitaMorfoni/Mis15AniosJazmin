import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Invite from './components/Invite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Invite />
  </StrictMode>
)
