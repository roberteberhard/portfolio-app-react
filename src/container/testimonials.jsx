import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// styled
const StyledTestimonialsSection = styled.section`
  display: grid;
  background-color: var(--sandy);
`

const StyledTestimonialsContent = styled.div`
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
const Testimonials = () => {
  return (
    <StyledTestimonialsSection id="testimonials">
      <StyledTestimonialsContent>
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
            <h2 className="numbered-heading">Testimonials</h2>
          </motion.div>
        </StyledInnerSection>
      </StyledTestimonialsContent>
    </StyledTestimonialsSection>
  )
}

export default Testimonials
