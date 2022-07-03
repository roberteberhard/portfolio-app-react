import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// styled
const StyledSkillsSection = styled.section`
  display: grid;
  background-color: var(--sandy);
`

const StyledSkillContent = styled.div`
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
const Skills = () => {
  return (
    <StyledSkillsSection id="skills">
      <StyledSkillContent>
        <StyledInnerSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
          >
            <h2 className="numbered-heading">Skills</h2>
          </motion.div>
        </StyledInnerSection>
      </StyledSkillContent>
    </StyledSkillsSection>
  )
}

export default Skills
