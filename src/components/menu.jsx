import React, { useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { useOnClickOutside } from '../hooks'
import { Icon } from '../assets/icons'
import { email, navLinks, socialMedia } from '../config'
import styled from 'styled-components'

// styles
const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--secondary);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)});
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--secondary);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.menuOpen ? `100%` : `100%`)};
      top: ${props => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${props => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)')};
    }
    &:after {
      width: ${props => (props.menuOpen ? `100%` : `100%`)};
      bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) => (menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`

const StyledSidebar = styled.aside`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    z-index: 9;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--body-darker);
    box-shadow: -10px 0px 30px -15px var(--primary-shadow);
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }
  nav {
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    color: var(--white);
    li {
      position: relative;
      margin: 0 auto 10px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
      &:before {
        content: '0' counter(item) '.';
        display: inline-block;
        width: 80px;
        margin-bottom: 5px;
        color: var(--secondary);
        font-family: var(--font-sans);
        font-size: var(--fz-sm);
        font-weight: 500;
        text-align: right;
        @media (max-width: 480px) {
          width: 60px;
        }
      }
    }
    a {
      ${({ theme }) => theme.mixins.link};
      width: calc(100% - 80px);
      padding: 3px 20px 20px;
      color: var(--white);
      font-family: var(--font-mono);
      font-size: var(--fz-lg);
      font-weight: 500;
      @media (max-width: 480px) {
        width: calc(100% - 60px);
        padding: 3px 20px 20px 10px;
      }
    }
  }
  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% 0 0 101px;
    width: max-content;
    @media (max-width: 480px) {
      margin: 10% 0 0 71px;
    }
  }
`

const StyledEmailWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--white);
  a {
    margin: 15% 0 0 50px;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    line-height: var(--fz-lg);
    font-weight: 500;
    letter-spacing: 0;
    @media (max-width: 480px) {
      margin: 15% 0 0 25px;
      font-size: var(--fz-sm);
    }
  }
`

const StyledSocialLinks = styled.div`
  display: block;
  width: 100%;
  margin: 0 0 10px;
  color: var(--white);
  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 60%;
    padding: 0;
    margin: 10px 0 0 50px;
    list-style: none;
    @media (max-width: 480px) {
      width: 80%;
      margin: 10px 0 0 25px;
    }
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

// markup
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const buttonRef = useRef(null)
  const sidebarRef = useRef(null)
  const wrapperRef = useRef(null)

  useOnClickOutside(wrapperRef, () => setMenuOpen(false))

  return (
    <>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef} aria-label="Menu">
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={sidebarRef}>
            {navLinks && (
              <ol>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <a href={url} onClick={() => setMenuOpen(false)}>
                      {name}
                    </a>
                  </li>
                ))}
              </ol>
            )}

            <a href="/resume.pdf" className="resume-link">
              Resume
            </a>

            <StyledEmailWrapper>{email && <a href={`mailto:${email}`}>{email}</a>}</StyledEmailWrapper>

            <StyledSocialLinks>
              <ul>
                {socialMedia &&
                  socialMedia.map(({ name, url }, i) => (
                    <li key={i}>
                      <a href={url} aria-label={name}>
                        <Icon name={name} />
                      </a>
                    </li>
                  ))}
              </ul>
            </StyledSocialLinks>
          </nav>
        </StyledSidebar>
      </div>
    </>
  )
}

export default Menu
