import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import variables from './variables'
import transition from './transition'

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  * {
    margin: 0;
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    background-color: #F0738F;
    color: var(--white);
  }
  html {
    width: 100%;
    scroll-behavior: smooth;
    line-height: 1;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;

  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    color: var(--primary);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--body);
    @media (max-width: 480px) {
      font-size: var(--fz-sm);
    }
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      header {
        background-color: transparent;
      }
      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }
  button,
  input,
  textarea,
  select {
    font: inherit;
  }
  img,
  video,
  canvas,
  svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    &.feather {
      fill: none;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    color: var( --white);
    font-weight: 700;
    line-height: 1;
    overflow-wrap: break-word;
  }
  p {
    margin: 0 0 15px 0;
    font-weight: 400;
    line-height: 1.5;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
    & > code {
      padding: 0.3em 0.5em;
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      background-color: var(--secondary);
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--secondary);
    }
    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  blockquote {
    border-left-color: var(--secondary);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;
    p {
      font-style: italic;
      font-size: 24px;
    }
  }
  hr {
    background-color: var();
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }
  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--secondary);
    outline-offset: 3px;
  }
  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }
  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--secondary);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--body-scroll) var(--body);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--body);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--body-scroll);
    border: 3px solid var(--body);
    border-radius: 10px;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  .skip-to-content {
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;
    &:focus,
    &:active {
      background-color: var(--secondary);
      color: var(--primary);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }

  .large-heading {
    margin: 0 0 15px;
    font-size: clamp(40px, 8vw, 56px);
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }
  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--secondary);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }
    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--primary);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
  .subtitle {
    color: var(--secondary);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }
  }

  .special-fx {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transform-origin: right;
      transform: scale3d(0, 1, 1);
      transition: transform 300ms cubic-bezier(0.5, 0.5, 0.3, 1);
    }
    &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      height: 100%;
      padding: 2px 0;
      transform: translate3d(150%, 0, 0);
      transition: transform 300ms cubic-bezier(0.5, 0.5, 0.3, 1);
    }
    & span {
      display: inline-block;
      padding: 2px 0;
      transition: transform 300ms cubic-bezier(0.5, 0.5, 0.3, 1);
    }
    &:hover:before {
      transform-origin: left;
      transform: scale3d(1, 1, 1);
    }
    &:hover span {
      transform: translate3d(-150%, 0, 0);
    }
    &:hover:after {
      transform: translate3d(0, 0, 0);
    }
  }

  .separator {
    display: block;
    pointer-events: none;
    width: 100%;
    height: 100px;
    fill: var(--body);
  }
  .separator--up {
    top: -1px;
  }
  .separator--down {
    bottom: -1px;
  }
  ${transition};
`

export default GlobalStyle
