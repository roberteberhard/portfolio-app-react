import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { IconSeparatorUp } from '../assets/icons'
import { IconSeparatorDown } from '../assets/icons'
import useShop from '../context/AppContext'

// styles
const StyledImprintSection = styled.section`
  display: grid;
  padding-top: 100px;
  background-color: var(--body);

  .separator.separator--up {
    fill: var(--sandy);
    background-color: var(--body);
  }
  .separator.separator--down {
    fill: var(--body);
    background-color: var(--sandy);
  }
`

const StyledImprintContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  background-color: var(--sandy);

  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledInnerSection = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;

  h1.title {
    margin-bottom: 50px;
    text-align: center;
    font-size: clamp(40px, 5vw, 48px);
  }
  p.heading {
    display: block;
    position: relative;
    margin-bottom: 10px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 500;
    text-align: center;
    &:before {
      content: '--';
      display: inline-block;
      width: 50px;
      padding-right: 4px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 500;
      text-align: right;
    }
    &:after {
      content: '--';
      display: inline-block;
      width: 50px;
      padding-left: 4px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 500;
      text-align: left;
    }
  }
  p.strong {
    font-weight: 600;
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--primary);
    font-size: clamp(17px, 1.5vw, 18px);
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 15px;
    color: var(--primary);
    font-size: clamp(16px, 1.5vw, 17px);
  }
  .innerDistance {
    margin-top: 40px;
  }
`

// markup
const Errors = () => {
  const { mounted } = useShop()
  const [hasNoDelay, setHasNoDelay] = useState(mounted)

  useEffect(() => {
    setHasNoDelay(mounted)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const data = (
    <>
      <p className="heading">404</p>
      <h1 className="title">Page Not Found</h1>
    </>
  )

  return (
    <StyledImprintSection>
      <IconSeparatorDown className="down" />
      <StyledImprintContent>
        <StyledInnerSection>
          {hasNoDelay ? (
            <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0 }} className="fade-enter">
              {data}
            </motion.div>
          ) : (
            <motion.div animate={{ y: [30, 0], opacity: [0, 1] }} transition={{ delay: 0.6, duration: 0.5 }} className="fade-enter">
              {data}
            </motion.div>
          )}
        </StyledInnerSection>
      </StyledImprintContent>
      <IconSeparatorUp />
    </StyledImprintSection>
  )
}

export default Errors
