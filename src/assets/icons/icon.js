import React from 'react'

import { IconExternal, IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from '../icons'

const Icon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />
    case 'Instagram':
      return <IconInstagram />
    case 'Linkedin':
      return <IconLinkedin />
    case 'Twitter':
      return <IconTwitter />
    default:
      return <IconExternal />
  }
}

export default Icon
