import React from 'react'
import styled from 'styled-components'

// styled
const StyledTestimonialsSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;

  background: linear-gradient(to bottom, var(--body), var(--pink));
`
const StyledTestimonialsContent = styled.div`
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
const Testimonials = () => {
  return (
    <StyledTestimonialsSection id="testimonials">
      <StyledTestimonialsContent>Testimonials</StyledTestimonialsContent>
    </StyledTestimonialsSection>
  )
}

export default Testimonials
