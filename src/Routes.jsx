import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

export default function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Products />} />
        </Routes>
      </Router>
    </div>
  )
}
