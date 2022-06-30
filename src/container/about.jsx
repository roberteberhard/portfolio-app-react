import React from 'react'
import styled from 'styled-components'
import { IconSeparatorUp } from '../assets/icons'

// styles
const StyledAboutSection = styled.section`
  display: grid;
  background-color: var(--sandy);
  .separator {
    fill: var(--body);
  }
`

const StyledAboutContent = styled.div`
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
const About = () => {
  return (
    <StyledAboutSection id="about">
      <IconSeparatorUp />
      <StyledAboutContent>
        <StyledInnerSection>
          <h2 className="numbered-heading">About Me</h2>
        </StyledInnerSection>
      </StyledAboutContent>
    </StyledAboutSection>
  )
}

export default About
