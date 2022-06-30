import React from 'react'
import styled from 'styled-components'
import { IconSeparatorDown } from '../assets/icons'

// styled
const StyledContactSection = styled.section`
  display: grid;
  background-color: var(--body);
  .separator {
    fill: var(--sandy);
  }
`

const StyledContacContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledInnerSection = styled.div`
  margin: 0;
`

// markup
const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <IconSeparatorDown />
      <StyledContacContent>
        <StyledInnerSection>
          <h2 className="numbered-heading">Contact</h2>
        </StyledInnerSection>
      </StyledContacContent>
    </StyledContactSection>
  )
}

export default Contact
