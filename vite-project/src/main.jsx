/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HotelRooms from './Q2b.jsx'
import App1 from './Q1b.jsx'
import { AuthProvider } from './Q1a.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
    <AuthProvider>
      <App1/>
    </AuthProvider>
     */}
     <HotelRooms/>
  </StrictMode>,
)
