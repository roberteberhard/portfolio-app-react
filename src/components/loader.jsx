import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { IconLoader } from '../assets/icons'
import useShop from '../AppContext'

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
  .brand-icon {
    width: max-content;
    max-width: 100px;
    opacity: ${props => (props.isLoaded ? 0 : 1)};
    transition: var(--transition);
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
  const { loaded } = useShop()

  return (
    <StyledLoader isLoaded={loaded}>
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <div className="brand-icon">
        <IconLoader />
      </div>
    </StyledLoader>
  )
}

export default Loader
