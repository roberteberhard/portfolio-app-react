import React from 'react'
import { Layout } from '../layout'
import { About, Hero, Skills, Testimonials, Work } from '../container'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const Home = () => {
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Testimonials />
      </StyledMainContainer>
    </Layout>
  )
}

export default Home
