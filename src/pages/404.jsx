import React from 'react'
import { Layout } from '../layout'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const PageNotFound = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <h1>PageNotFound</h1>
      </StyledMainContainer>
    </Layout>
  )
}

export default PageNotFound
