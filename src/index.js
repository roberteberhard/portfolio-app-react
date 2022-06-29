import React from 'react'
import { createRoot } from 'react-dom/client'

// routes & components
import Home from './pages/home'

const Index = () => {
  return <Home />
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Index />)
