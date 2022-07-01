import React from 'react'
import { Layout } from '../layout'
import { Hero, About, Work, Skills, Testimonials, Contact } from '../container'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const Home = () => {
  return (
    <Layout>
      <StyledMainContainer id="home">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Contact />
      </StyledMainContainer>
    </Layout>
  )
}

export default Home
