import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Products from './components/Products'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Products />
    </Router>
  )
}

export default App