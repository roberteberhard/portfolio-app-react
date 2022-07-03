import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
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
  const FadeInWhenVisible = ({ children }) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <StyledAboutSection id="about">
      <IconSeparatorUp />
      <StyledAboutContent>
        <StyledInnerSection>
          <FadeInWhenVisible>
            <h2 className="numbered-heading">About me</h2>
          </FadeInWhenVisible>
        </StyledInnerSection>
      </StyledAboutContent>
    </StyledAboutSection>
  )
}

export default About
