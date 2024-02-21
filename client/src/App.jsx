import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

 import Dashbord from './pages/Dashbord'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="Signin" element={ <Signin/> } />
        <Route path="Signup" element={ <Signup/> } />
        <Route path="dashbord" element={ <Dashbord/> } />
      
       
      </Routes>
    </div>
  )
}

export default App