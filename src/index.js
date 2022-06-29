import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// routes & components
import Home from './pages/home'
import Privacy from './pages/privacy'
import Imprint from './pages/imprint'

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Index />)
