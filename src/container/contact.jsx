import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { IconSeparatorDown } from '../assets/icons'

// styled
const StyledContactSection = styled.section`
  display: grid;
  background-color: var(--body);
  .separator {
    fill: var(--sandy);
  }
`

const StyledContactContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledContactInner = styled.div`
  margin: 0;
`

// markup
const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <IconSeparatorDown />
      <StyledContactContent>
        <StyledContactInner>
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
            <h2 className="numbered-heading">Contact</h2>
          </motion.div>
        </StyledContactInner>
      </StyledContactContent>
    </StyledContactSection>
  )
}

export default Contact
