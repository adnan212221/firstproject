import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import './styles/colors.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Brands from './components/Brands'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/mediaquerry.scss'






const App = () => {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/brands' element={<Brands />}/>
        <Route path='/services' element={<Services />}/>



      </Routes>
      <Footer />
    </Router>
  )
}

export default App