import React, { useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import useShop from '../context/AppContext'

// styles
const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--body);
  #loader {
    width: max-content;
    max-width: 100px;
    opacity: 0;
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      user-select: none;
    }
  }
`

// markup
const Loader = () => {
  const { appIsLoaded } = useShop()
  const animate = () => {
    const animation = anime.timeline({ complete: () => appIsLoaded(true) })
    animation
      .add({
        targets: '#loader',
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 1
      })
      .add({
        targets: '#loader #re',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add(
        {
          targets: '#loader #circle',
          duration: 1500,
          easing: 'easeInOutQuart',
          strokeDashoffset: [anime.setDashoffset, 0]
        },
        '-=1200'
      )
      .add(
        {
          targets: '#loader #re',
          duration: 1500,
          easing: 'easeInOutQuart',
          fill: '#fff',
          opacity: 1
        },
        '-=900'
      )
      .add(
        {
          targets: '#loader #circle',
          duration: 900,
          easing: 'easeInOutQuart',
          fill: '#FF7F50',
          opacity: 1
        },
        '-=300'
      )
      .add(
        {
          targets: '#loader #circle',
          duration: 900,
          easing: 'easeInOutQuart',
          stroke: '#FF7F50'
        },
        '-=900'
      )
      .add(
        {
          targets: '#loader',
          duration: 300,
          easing: 'easeInOutQuart',
          opacity: 0,
          scale: 0.1
        },
        '+=300'
      )
  }

  useEffect(() => {
    animate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledLoader>
      <svg id="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g>
          <path id="circle" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#c9c9c9" d="M98.9993 50.001C98.9993 77.0635 77.0614 99.0019 49.9997 99.0019C22.9379 99.0019 0.999998 77.0635 0.999998 50.001C0.999998 22.9385 22.9379 0.999998 49.9997 0.999998C77.0614 0.999998 98.9993 22.9385 98.9993 50.001Z" />
          <path id="re" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#c9c9c9" d="M57.7197 36.097H56.7197V37.097V44.9834V45.9834H57.7197H72.2432C72.2698 45.9834 72.3258 45.9972 72.3828 46.0541C72.4397 46.111 72.4535 46.1669 72.4535 46.1937V53.1426C72.4535 53.2037 72.4315 53.2502 72.3913 53.2886C72.3447 53.3332 72.2869 53.3529 72.2432 53.3529H57.7007H56.7007V54.3529V62.9419V63.9419H57.7007H75.3663C75.4381 63.9419 75.4838 63.9671 75.5162 64.0006C75.5533 64.0389 75.5766 64.0932 75.5766 64.1522V71.0811C75.5766 71.1401 75.5533 71.1944 75.5162 71.2327C75.4838 71.2663 75.4381 71.2914 75.3663 71.2914H48.8579C48.7913 71.2914 48.7462 71.2691 48.712 71.2368C48.6799 71.2066 48.6576 71.1671 48.6476 71.1267V54.314V53.314H47.6476H43.49H42.8741L42.597 53.864L33.8535 71.2152C33.8465 71.222 33.8357 71.231 33.8217 71.2399C33.7899 71.2601 33.7538 71.2724 33.7107 71.2724H25.1997C25.0841 71.2724 25.0257 71.2466 25.0026 71.2333C24.9794 71.22 24.966 71.205 24.9561 71.1865C24.9357 71.1485 24.9083 71.0414 24.9879 70.8915C24.9882 70.8909 24.9885 70.8903 24.9888 70.8898L33.7503 54.7317L34.2859 53.7438L33.2425 53.3265C27.9706 51.2181 24.4037 46.8292 24.4037 41.4505C24.4037 34.4438 30.2076 28.7085 37.3606 28.7085H75.3853C75.4571 28.7085 75.5028 28.7337 75.5352 28.7672C75.5723 28.8055 75.5956 28.8598 75.5956 28.9188V35.8867C75.5956 35.9457 75.5723 36 75.5352 36.0383C75.5028 36.0718 75.4571 36.097 75.3853 36.097H57.7197ZM47.6286 46.0024H48.6286V45.0024V37.078V36.078H47.6286H38.1611C36.6968 36.078 35.2562 36.4339 34.1547 37.2546C33.0178 38.1017 32.3199 39.3911 32.3199 41.0407C32.3199 42.6965 33.0331 43.9846 34.1751 44.8284C35.2819 45.6461 36.7251 46.0024 38.1811 46.0024H47.6286Z" />
        </g>
      </svg>
    </StyledLoader>
  )
}

export default Loader
