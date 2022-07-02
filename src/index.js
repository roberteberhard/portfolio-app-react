import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

// routes & components
import { Home, Privacy, Imprint, PageNotFound } from './pages'

const Index = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="*" component={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Index />)
