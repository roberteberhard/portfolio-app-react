import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from '../assets/icons'
import { socialMedia } from '../config'

// styles
const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
  background-colol: var(--body);
`
const StyledInnerSection = styled.div`
  padding: 0px var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0px var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0px var(--pad-sm);
  }
`

const StyledSocialLinks = styled.div`
  display: block;
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  color: var(--white);
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--white);
  }
  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      padding: 10px;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

const StyledCredit = styled.div`
  color: var(--white);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  a {
    padding: 10px;
  }
  .github-stats {
    margin-top: 10px;
    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`

// markup
const Footer = () => {
  const [date, setDate] = useState()
  const getYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    getYear()
  }, [])

  return (
    <StyledFooter>
      <StyledInnerSection>
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
        <StyledCredit tabindex="-1">
          <a href="https://github.com/roberteberhard" target="_blank" rel="noopener noreferrer">
            <div>© {date} ROBERTEBERHARD</div>
          </a>
          <Link to="/privacy">Privacy</Link>
          <Link to="/imprint">Imprint</Link>
        </StyledCredit>
      </StyledInnerSection>
    </StyledFooter>
  )
}

export default Footer
