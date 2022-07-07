import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Icon, IconSeparatorUp } from '../assets/icons'
import { SocialMedia } from '../config'
import { images } from '../constants'

// styled
const StyledAboutSection = styled.section`
  display: grid;
  background-color: var(--sandy);
  .separator {
    fill: var(--body);
  }
`

const StyledAboutContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledAboutInner = styled.div`
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
    background-color: var(--navy-light);
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const StyledPic = styled.div`
  position: relative;
  flex: 1;
  flex-basis: 50%;
  align-self: stretch;
  max-width: 50%;
  padding-left: 45px;
  margin-bottom: 20px;
  padding-right: 60px;
`

const StyledSocialLinks = styled.div`
  display: block;
  color: var(--light-slate);

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    width: 50%;
    list-style: none;

    a {
      padding: 0 10px;

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

const StyledText = styled.div`
  flex: 1;
  flex-direction: column;
  position: relative;
  flex-basis: 50%;
  align-self: stretch;
  max-width: 50%;
  padding-top: 20px;
  padding-right: 60px;
  padding-left: 40px;
`

// markup
const About = () => {
  const FadeInWhenVisible = ({ children }) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <StyledAboutSection id="about">
      <IconSeparatorUp />
      <StyledAboutContent>
        <StyledAboutInner>
          <FadeInWhenVisible>
            <>
              <h2 className="numbered-heading">About me</h2>
              <div className="colour-block"></div>
              <StyledPic>
                <img src={images.profile} alt="Robert Eberhards Headshot" />
                <StyledSocialLinks>
                  <ul>
                    {SocialMedia &&
                      SocialMedia.map(({ name, url }, i) => (
                        <li key={i}>
                          <a href={url} aria-label={name}>
                            <Icon name={name} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </StyledSocialLinks>
              </StyledPic>
              <StyledText>
                <p>Nice to meet you! My name is Robert and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!</p>
              </StyledText>
            </>
          </FadeInWhenVisible>
        </StyledAboutInner>
      </StyledAboutContent>
    </StyledAboutSection>
  )
}

export default About
