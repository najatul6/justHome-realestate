import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Router/Routes'
import './index.css'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={Routes} />
  </StrictMode>,
)
