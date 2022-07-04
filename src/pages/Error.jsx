import React from 'react'
import { Layout } from '../layout'
import { Errors } from '../container'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const Error = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Errors />
      </StyledMainContainer>
    </Layout>
  )
}

export default Error
