import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-80px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
  25% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
  75% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
  100% { opacity: 0; transform: translateX(220px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px); }
`
// styled
const Wrapper = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${breatheAnimation};
    animation-duration: 8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
`

// markup
const TextAnimation = () => {
  const appsArray = 'Apps'.split('')
  const pwaArray = "PWA's".split('')
  const shopsArray = 'Shops'.split('')
  const sitesArray = 'Sites'.split('')
  const themesArray = 'Themes'.split('')
  const hash = Math.floor(Math.random() * 100000)

  const [items, setItems] = useState(appsArray)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (active > 4) {
      setActive(0)
    } else if (active === 0) {
      setItems(appsArray)
    } else if (active === 1) {
      setItems(pwaArray)
    } else if (active === 2) {
      setItems(shopsArray)
    } else if (active === 3) {
      setItems(sitesArray)
    } else if (active === 4) {
      setItems(themesArray)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => prev + 1)
    }, 8000)
    return () => clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper>
      {items.map((item, index) => (
        <span key={index + hash}>{item}</span>
      ))}
    </Wrapper>
  )
}

export default TextAnimation
