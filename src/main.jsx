import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UploadView from './pages/UploadView/UploadView'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UploadView />
  </StrictMode>,
)
