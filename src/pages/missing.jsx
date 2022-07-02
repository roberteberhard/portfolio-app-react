import React from 'react'
import { Layout } from '../layout'
import { Error } from '../container'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const Missing = () => {
  return (
    <Layout>
      <StyledMainContainer id="home">
        <Error />
      </StyledMainContainer>
    </Layout>
  )
}

export default Missing
