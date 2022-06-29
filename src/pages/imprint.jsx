import React from 'react'
import { Layout } from '../layout'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const Imprint = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <h1>Imprint</h1>
      </StyledMainContainer>
    </Layout>
  )
}

export default Imprint
