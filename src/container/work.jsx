import React from 'react'
import styled from 'styled-components'

// styled
const StyledWorkSection = styled.section`
  background-color: var(--sandy);
`

const StyledWorkContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  border: 1px dotted salmon;
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
const Work = () => {
  return (
    <StyledWorkSection id="work">
      <StyledWorkContent>
        <StyledInnerSection>
          <h2 className="numbered-heading">Work</h2>
        </StyledInnerSection>
      </StyledWorkContent>
    </StyledWorkSection>
  )
}

export default Work
