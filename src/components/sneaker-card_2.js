import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { images } from '../constants'

// styled
const StyledCard = styled.div`
  .card {
    position: relative;
    width: 280px;
    height: 420px;
    padding: 5px 30px 0 30px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .sneaker-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    margin: 0 10px;
    .sneaker-card--circle {
      position: absolute;
      z-index: 1;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: rgb(241, 66, 61);
      background: linear-gradient(117deg, rgba(241, 66, 61, 1) 6%, rgba(250, 144, 89, 1) 47%, rgba(56, 97, 156, 1) 94%);
    }
    img {
      z-index: 2;
      transition: all 500ms ease-out;
    }
  }
  .info-card {
    h2 {
      color: var(--primary);
      font-size: var(--fz-xxl);
      margin-bottom: 15px;
      transition: all 750ms ease-out;
    }
    h3 {
      color: rgba(61, 74, 91, 0.75);
      font-weight: 400;
      font-size: var(--fz-sm);
      margin-bottom: 15px;
      text-transform: uppercase;
      transition: all 750ms ease-out;
    }
    .info-card--sizes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 750ms ease-out;
      button {
        padding: 5px 15px;
        border: none;
        color: var(--white);
        font-size: var(--fz-xs);
        border-radius: 30px;
        background-color: var(--body);
        &.active {
          background-color: var(--primary);
        }
      }
    }
    .info-card--purchase {
      position: absolute;
      bottom: 30px;
      transition: all 750ms ease-out;
      button {
        width: 160px;
        margin: 0 30px;
        padding: 12px 0;
        border: none;
        color: var(--white);
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        border-radius: 30px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        background-color: var(--secondary);
        background-color: #3b82b9;
      }
    }
  }
`

// markup
const SneakerCard = () => {
  const cardRef = useRef(null)
  const titleRef = useRef(null)
  const sneakerRef = useRef(null)
  const descRef = useRef(null)
  const sizesRef = useRef(null)
  const buyRef = useRef(null)
  const [mouseAxis, setMouseAxis] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const cardCurrent = cardRef.current
    const sneakerCurrent = sneakerRef.current
    const titleCurrent = titleRef.current
    const descCurrent = descRef.current
    const sizesCurrent = sizesRef.current
    const buyCurrent = buyRef.current

    const handleMoveMousePosition = e => {
      setMouseAxis({ x: (window.innerWidth / 2 - e.pageX) / 25, y: (window.innerHeight / 2 - e.pageY) / 25 })
      let posX = (window.innerWidth / 2 - e.pageY) / 25
      let posY = (window.innerHeight / 2 - e.pageX) / 25
      cardCurrent.style.transform = `rotateX(${posX}deg) rotateY(${posY}deg)`
    }

    const handleEnterMousePosition = e => {
      console.log(sneakerCurrent)
      cardCurrent.style.transition = 'none'
      sneakerCurrent.style.transform = 'translateZ(200px) rotate(-30deg)'
      titleCurrent.style.transform = 'translateZ(75px)'
      descCurrent.style.transform = 'translate3d(0,0,150px)'
      sizesCurrent.style.transform = 'translate3d(0,0,150px)'
      buyCurrent.style.transform = 'translate3d(0,0,150px)'
    }

    const handleLeaveMousePosition = e => {
      setMouseAxis({ x: 0, y: 0 })
      cardCurrent.style.transition = 'all 0.3sec ease'
      cardCurrent.style.transform = 'rotateX(0deg) rotateY(0deg)'
      sneakerCurrent.style.transform = 'translateZ(0px) rotate(0deg)'
      titleCurrent.style.transform = 'translateX(0px)'
    }

    if (cardRef && cardCurrent) {
      cardCurrent.addEventListener('mouseenter', handleEnterMousePosition)
      cardCurrent.addEventListener('touchenter', handleEnterMousePosition)
      cardCurrent.addEventListener('mousemove', handleMoveMousePosition)
      cardCurrent.addEventListener('touchmove', handleMoveMousePosition)
      cardCurrent.addEventListener('mouseleave', handleLeaveMousePosition)
      cardCurrent.addEventListener('touchleave', handleLeaveMousePosition)
    }

    return () => {
      cardCurrent.removeEventListener('mouseenter', handleEnterMousePosition)
      cardCurrent.removeEventListener('touchenter', handleEnterMousePosition)
      cardCurrent.removeEventListener('mousemove', handleMoveMousePosition)
      cardCurrent.removeEventListener('touchmove', handleMoveMousePosition)
      cardCurrent.removeEventListener('mouseleave', handleLeaveMousePosition)
      cardCurrent.removeEventListener('touchleave', handleLeaveMousePosition)
    }
  }, [])

  return (
    <StyledCard>
      <div className="card" ref={cardRef}>
        <div className="sneaker-card">
          <div className="sneaker-card--circle"></div>
          <img ref={sneakerRef} src={images.sneaker} alt="Sneaker" />
        </div>
        <div className="info-card">
          <h2 ref={titleRef}>Adidas Trainers ZX</h2>
          <h3 ref={descRef}>Future-ready sneaker with wrapped boost for optimal comfort.</h3>
          <small>
            Coords: {mouseAxis.x} {mouseAxis.y}
          </small>
          <div className="info-card--sizes" ref={sizesRef}>
            <button>38</button>
            <button>40</button>
            <button className="active">42</button>
            <button>44</button>
          </div>
          <div className="info-card--purchase" ref={buyRef}>
            <button>Buy Now!</button>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

export default SneakerCard
