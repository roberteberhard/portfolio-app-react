import React from 'react'
import { Layout } from '../layout'
import { Impressum } from '../container'
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
        <Impressum />
      </StyledMainContainer>
    </Layout>
  )
}

export default Imprint
