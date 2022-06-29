import React from 'react'
import styled from 'styled-components'

// styled
const StyledWorkSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;

  background: linear-gradient(to bottom, var(--sandy), var(--body));
`
const StyledWorkContent = styled.div`
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
const Work = () => {
  return (
    <StyledWorkSection id="work">
      <StyledWorkContent>Work</StyledWorkContent>
    </StyledWorkSection>
  )
}

export default Work
