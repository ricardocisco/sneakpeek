import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Products from './pages/Products'

export default function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/produtos' element={<Products />} />
        </Routes>
      </Router>
    </div>
  )
}
