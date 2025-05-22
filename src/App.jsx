import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
function App() {
 
  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
      <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
