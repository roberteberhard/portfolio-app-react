import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Loader, Navbar } from '../components'
import { Footer } from '../container'
import { GlobalStyle, theme } from '../styles'
import useShop from '../context/AppContext'

// register gsap
gsap.registerPlugin(ScrollTrigger)

// styled
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

// markup
const Layout = ({ children }) => {
  const { loaded, appIsMounted } = useShop()
  const refTop = useRef(null)

  useEffect(() => {
    // wait until preload animation finishes
    if (!loaded) {
      return
    }

    const allLinks = Array.from(document.querySelectorAll('a'))
    const allSeparators = [...document.querySelectorAll('path.path-anim')]
    const locationHash = window.location.hash

    refTop.current.scrollIntoView()

    const mountedTimeout = setTimeout(() => {
      appIsMounted(true)
    }, 800)

    // handle all external links
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }

    // handle line seperators
    allSeparators.forEach(el => {
      const svgEl = el.closest('svg')
      const pathTo = el.dataset.pathTo
      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
        .to(el, {
          ease: 'none',
          attr: { d: pathTo }
        })
    })

    // smooth scroll to # anker point
    if (locationHash) {
      const id = locationHash.substring(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 100)
    }

    return () => {
      clearTimeout(mountedTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <a className="skip-to-content" href="#content">
        Skip to Content
      </a>
      {loaded ? (
        <StyledContent ref={refTop}>
          <Navbar />
          <div id="content">{children}</div>
          <Footer />
        </StyledContent>
      ) : (
        <Loader />
      )}
    </ThemeProvider>
  )
}

export default Layout
