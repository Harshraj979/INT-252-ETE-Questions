/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import HotelRooms from './Q2b.jsx'
import FormQ3 from './Q3.jsx'
import Q4 from './Q4b.jsx'
import Q5 from './Q5.jsx'
import Q7 from './Q7.jsx'
import Q10 from './Q10b.jsx'
import ContactForm from './Q12.jsx'
import Calculator from './Q6.jsx'
import CountDown from './Q9.jsx'
import App1 from './Q1b.jsx'
import Counter from './Q11.jsx'
import Q13 from './Q13b.jsx'
import { AuthProvider } from './Q1a.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/*
     <AuthProvider>
       <App1/>
     </AuthProvider>
      */}
      <Q13/>
  </StrictMode>,
  // <BrowserRouter>
  //   <Q7/>
  // </BrowserRouter>
)
