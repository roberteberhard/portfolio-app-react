import React from 'react'
import { Layout } from '../layout'
import { PrivacyPolicy } from '../container'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const Privacy = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <PrivacyPolicy />
      </StyledMainContainer>
    </Layout>
  )
}

export default Privacy
