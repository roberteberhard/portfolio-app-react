import React from 'react'
import { Layout } from '../layout'
import { PrivacyPolicy } from '../container'
import styled from 'styled-components'

// styles
const StyledMainContainer = styled.main`
  counter-reset: section;
`

// markup
const PrivacyPage = () => {
  return (
    <Layout>
      <StyledMainContainer id="home">
        <PrivacyPolicy />
      </StyledMainContainer>
    </Layout>
  )
}

export default PrivacyPage
