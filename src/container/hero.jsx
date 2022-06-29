import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { IconPlus } from '../assets/icons'
import { SneakerCard } from '../components'

// styled
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px 50px;
  
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`
const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`

const StyledHeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 420px);
  @media (max-width: 1080px) {
    width: 100%;
  }
  h1 {
    margin: 0 0 25px;
    color: var(--secondary);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-lg));
    font-weight: 500;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h3 {
    color: var(--primary);
    line-height: 0.9;
    margin-bottom: 30px;
  }
  p {
    max-width: 560px;
    margin-bottom: 35px !important;
  }
  .button-box {
    .button-link {
      ${({ theme }) => theme.mixins.bigButton};
    }
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`
const StyledHeroRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  position: relative;
  .hero-card {
    display: flex;
    width: 420px;
    height: 480px;
    justify-content: center;
    align-items: center;
  }
  .card-plus-1 {
    position: absolute;
    z-index: 3;
    width: 28px;
    height: 28px;
    top: 170px;
    left: -20px;
  }
  .card-plus-2 {
    position: absolute;
    z-index: 3;
    width: 28px;
    height: 28px;
    top: 80px;
    right: 5px;
  }
  .card-plus-3 {
    position: absolute;
    z-index: 3;
    width: 28px;
    height: 28px;
    bottom: -30px;
    right: 110px;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`

// markup
const Hero = () => {
  const isHome = true
  const [isMounted, setIsMounted] = useState(!isHome)
  const one = <h1>Hi, my name is</h1>
  const two = <h2 className="large-heading">Robert Eberhard.</h2>
  const three = <h3 className="large-heading">I build apps for the web.</h3>
  const four = <p>I am a freelance web developer with more than 2 decades of experience in developing solid and scalable front-end products using modern web technologies for clients across several countries.</p>
  const five = (
    <div className="button-box">
      <a href="/#contact" className="button-link">
        Let's talk
      </a>
    </div>
  )
  const items = [one, two, three, four, five]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <StyledHeroSection id="hero">
      <StyledHeroContent>
        <StyledHeroLeft>
          {isMounted &&
            items.map((item, i) => (
              <motion.div key={i} custom={i} animate={{ y: [30, 0], opacity: [0, 1] }} transition={{ delay: i * 0.1 + 0.8, duration: 0.3 }} className="fade-up">
                {item}
              </motion.div>
            ))}
        </StyledHeroLeft>
        <StyledHeroRight>
          {isMounted && (
            <div className="hero-card">
              <motion.div animate={{ scale: [1.1, 1], opacity: [0, 1] }} transition={{ delay: 1.6, duration: 0.3 }} className="fade-enter">
                <SneakerCard />
              </motion.div>
              <motion.div animate={{ scale: [0.25, 1], opacity: [0, 1] }} transition={{ delay: 1.8, duration: 0.3 }} className="card-plus-1 fade-enter">
                <IconPlus />
              </motion.div>
              <motion.div animate={{ scale: [0.25, 1], opacity: [0, 1] }} transition={{ delay: 1.9, duration: 0.3 }} className="card-plus-2 fade-enter">
                <IconPlus />
              </motion.div>
              <motion.div animate={{ scale: [0.25, 1], opacity: [0, 1] }} transition={{ delay: 2, duration: 0.3 }} className="card-plus-3 fade-enter">
                <IconPlus />
              </motion.div>
            </div>
          )}
        </StyledHeroRight>
      </StyledHeroContent>
    </StyledHeroSection>
  )
}

export default Hero
