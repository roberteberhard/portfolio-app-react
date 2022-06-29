import React from 'react'
import styled from 'styled-components'

// styled
const StyledFooterSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;
  background-color: var(--pink);
`
const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// markup
const Footer = () => {
  return (
    <StyledFooterSection id="contact">
      <StyledFooterContent>Footer</StyledFooterContent>
    </StyledFooterSection>
  )
}

export default Footer
