import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

import { Home, Privacy, Imprint, Error } from './pages'

const Index = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </React.StrictMode>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Index />)
