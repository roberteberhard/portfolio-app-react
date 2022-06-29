import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Navbar } from '../components'
import { Footer } from '../container'
import { GlobalStyle, theme } from '../styles'

// styled
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
// markup
const Layout = ({ children }) => {
  useEffect(() => {
    // attributes
    const locationHash = window.location.hash
    const allLinks = Array.from(document.querySelectorAll('a'))

    // smooth scroll to # anker point
    if (locationHash) {
      const id = locationHash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }

    // set attributes ot external links
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <a className="skip-to-content" href="#content">
        Skip to Content
      </a>
      <StyledContent>
        <Navbar />
        <div id="content">
          {children}
          <Footer />
        </div>
      </StyledContent>
    </ThemeProvider>
  )
}

export default Layout
