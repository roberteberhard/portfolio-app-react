import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { images } from '../constants'

// styles
const StyledAboutSection = styled.section`
  background-color: var(--sandy);
  .inner {
    position: relative;
    display: flex;
    padding: 60px 0;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: stretch;

    .colour-block {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 75%;
    }

    @media (max-width: 768px) {
      display: block;
    }
  }
`

// markup
const About = () => {
  // register scrolltrigger
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const paths = [...document.querySelectorAll('path.path-anim')]
    paths.forEach(el => {
      const svgEl = el.closest('svg')
      const pathTo = el.dataset.pathTo
      gsap
        .timeline({
          scrollTrigger: {
            trigger: svgEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
        .to(el, {
          ease: 'none',
          attr: { d: pathTo }
        })
    })
  }, [])

  return (
    <StyledAboutSection id="about">
      <svg class="separator separator--up" width="100%" height="100%" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path class="separator__path path-anim" data-path-to="M 0 0 C 35 21 70 0 100 0 L 0 0 Z" vectorEffect="non-scaling-stroke" d="M 0 0 C 37 0 70 0 100 0 L 0 0 Z" />
      </svg>

      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div className="colour-block">e</div>
        <div className="apple">
          <img src={images.earpodA} width="120px" alt="apple earpod right" />
        </div>
        <div className="apple">
          <img src={images.earpodB} width="120" alt="apple earpod left" />
        </div>
      </div>
    </StyledAboutSection>
  )
}

export default About
