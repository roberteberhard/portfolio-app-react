import React from 'react'
import { Layout } from '../layout'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const Privacy = () => {
  return (
    <Layout>
      <StyledMainContainer id="home">
        <h1>Privacy</h1>
      </StyledMainContainer>
    </Layout>
  )
}

export default Privacy
