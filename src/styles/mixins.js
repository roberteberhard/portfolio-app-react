import { css } from 'styled-components'

const button = css`
  color: var(--secondary);
  background-color: transparent;
  border: 1px solid var(--secondary);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--secondary-tint);
    outline: none;
  }
  &:after {
    display: none !important;
  }
`

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--secondary);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--secondary);
    &:hover,
    &:focus,
    &:active {
      color: var(--secondary);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--secondary) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--secondary);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button,

  smallButton: css`
    cursor: pointer;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    border: 2px solid var(--secondary);
    color: var(--white);
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    background-color: var(--secondary);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      outline: none;
      border-color: var(--secondary-tint);
      background-color: var(--secondary-tint);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    cursor: pointer;
    padding: 1.15rem 1.65rem;
    border-radius: 4px;
    border: 2px solid var(--secondary);
    color: var(--white);
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    background-color: var(--secondary);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      outline: none;
      border-color: var(--secondary-tint);
      background-color: var(--secondary-tint);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--primary-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--primary-shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--secondary);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `
}

export default mixins
