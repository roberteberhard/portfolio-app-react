import { css } from 'styled-components'

const variables = css`
  :root {
    --body: #c9c9c9;
    --body-opac: rgba(201, 201, 201, 0.85);
    --body-darker: #c9c9c9;
    --body-scroll: #3d4a5b;
    --black: #030303;
    --white: #ffffff;
    --sandy: #e3e0d9;
    --primary: #3d4a5b;
    --primary-shadow: rgb(37, 47, 56, 0.25);
    --secondary: #ff7f50;
    --secondary-tint: #3d4a5b;
    --ternary: #ff7f50;
    --font-sans: 'Poppins', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 28px;

    --pad-xxl: 100px;
    --pad-xl: 70px;
    --pad-lg: 50px;
    --pad-md: 40px;
    --pad-sm: 25px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`

export default variables
