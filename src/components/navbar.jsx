import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu } from '../components'
import { useScrollDirection } from '../hooks/'
import { IconLogo } from '../assets/icons'
import { navLinks } from '../config'
import useShop from '../context/AppContext'

// styled
const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--body-opac);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  ${props =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: var(--body-opac);
      box-shadow: 0 -5px 10px 5px var(--primary-shadow);
    `};
  ${props =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 -5px 10px -5px var(--primary-shadow);
    `};
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

const StyledNavbar = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  counter-reset: item 0;
  z-index: 10;
  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    a {
      border-radius: 50%;
      overflow: hidden;
      &:hover,
      &:focus {
        svg {
          #bg {
            fill: var(--primary);
          }
        }
      }
      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
        #bg {
          transition: var(--transition);
        }
      }
    }
    &.logo--small a {
      width: 42px;
      height: 42px;
    }
    &.logo--large a {
      width: 56px;
      height: 56px;
    }
  }
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      counter-increment: item 1;
      color: var(--white);
      font-family: var(--font-sans);
      font-size: 15px;
      font-weight: 400;
      margin: 0 15px;
      &:before {
        content: '0' counter(item) '.';
        padding-right: 8px;
        color: var(--secondary);
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        font-weight: 500;
      }
      a {
        color: var(--white);
        font-weight: 500;
      }
    }
  }
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`

const StyledMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

// markup
const Navbar = () => {
  const { mounted } = useShop()
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const LogoLink = (
    <>
      {scrolledToTop ? (
        <div className="logo logo--large" tabIndex="-1">
          <Link to="/" aria-label="Home">
            <IconLogo />
          </Link>
        </div>
      ) : (
        <div className="logo logo--small" tabIndex="-1">
          <a href="/#home" aria-label="Home">
            <IconLogo />
          </a>
        </div>
      )}
    </>
  )

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  )

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNavbar>
        {mounted ? (
          <div className="faded">{LogoLink}</div>
        ) : (
          <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.3 }} className="fade-enter">
            {LogoLink}
          </motion.div>
        )}

        <StyledLinks>
          <ol>
            {mounted
              ? navLinks.map(({ url, name }, i) => (
                  <li key={i} className="faded">
                    <a href={url} className="special-fx" data-text={name}>
                      <span>{name}</span>
                    </a>
                  </li>
                ))
              : navLinks.map(({ url, name }, i) => (
                  <motion.li key={i} custom={i} animate={{ y: [-30, 0], opacity: [0, 1] }} transition={{ delay: i * 0.1, duration: 0.3 }} className="fade-enter">
                    <a href={url} className="special-fx" data-text={name}>
                      <span>{name}</span>
                    </a>
                  </motion.li>
                ))}
          </ol>
          {mounted ? (
            <div className="faded">{ResumeLink}</div>
          ) : (
            <motion.div animate={{ y: [-30, 0], opacity: [0, 1] }} transition={{ delay: navLinks.length * 0.1, duration: 0.3 }} className="fade-enter">
              {ResumeLink}
            </motion.div>
          )}
        </StyledLinks>

        <StyledMenu>
          {mounted ? (
            <div className="faded">
              <Menu />
            </div>
          ) : (
            <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.3, duration: 0.3 }} className="fade-enter">
              <Menu />
            </motion.div>
          )}
        </StyledMenu>
      </StyledNavbar>
    </StyledHeader>
  )
}

export default Navbar
