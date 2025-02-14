import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './context/userContext'
import Home from './components/Home'
import Chnage from './components/Chnage'

function App() {


  return (
   <UserProvider>
    
    <Chnage/>
    <Home/>
   </UserProvider>
  )
}

export default App
