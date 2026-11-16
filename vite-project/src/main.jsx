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
import Q14 from './Q14.jsx'
import Q15 from './Q15.jsx'
//import TodoList from './Q16.jsx'
import RegistrationForm from './Q17.jsx'
import Q18 from './Q18b.jsx'
import Q19 from "./Q19c.jsx"
import CountdownTimer from './Q20.jsx'
import Q21 from "./Q21c.jsx"
import Q22 from './Q22b.jsx'
import Q25 from './Q25c.jsx'
import UserProfile from './Q27.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/*
     <AuthProvider>
       <App1/>
     </AuthProvider>
      */}
      <UserProfile/>
  </StrictMode>
  // <BrowserRouter>
  //   <Q7/>
  // </BrowserRouter>
)
