import React, { useState } from 'react'
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setloading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setloading(true)
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create.create(contact).then(() => {
      setloading(false)
      setIsFormSubmitted(true)
    })
  }

  const FadeInWhenVisible = ({ children }) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 30 }
        }}
      >
        {children}
      </motion.div>
    )
  }
  return (
    <StyledContactSection id="contact">
      <IconSeparatorDown />
      <StyledContactContent>
        <StyledContactInner>
          <FadeInWhenVisible>
            <h2 className="numbered-heading">Contact</h2>
            {!isFormSubmitted ? (
              <div>
                <div>
                  <input className="p-text" type="text" placeholder="Your Name" name={name} value={name} onChange={handleChangeInput} />
                </div>
                <div>
                  <input className="p-text" type="email" placeholder="Your Email" name={email} value={email} onChange={handleChangeInput} />
                </div>
                <div>
                  <textarea className="p-text" placeholder="Your Message" name={message} value={message} onChange={handleChangeInput} />
                </div>
                <button className="p-text" type="button" onClick={handleSubmit}>
                  {loading ? 'Sending' : 'Send Message'}
                </button>
              </div>
            ) : (
              <div>
                <h3>Thand You for getting in touch.</h3>
              </div>
            )}
          </FadeInWhenVisible>
        </StyledContactInner>
      </StyledContactContent>
    </StyledContactSection>
  )
}

export default Contact
