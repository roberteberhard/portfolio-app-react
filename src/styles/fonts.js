import { css } from 'styled-components'

import IbmPlexMonoRegularWoff from '../fonts/ibm-plex-mono/ibm-plex-mono-regular.woff'
import IbmPlexMonoRegularWoff2 from '../fonts/ibm-plex-mono/ibm-plex-mono-regular.woff2'
import IbmPlexMonoMediumWoff from '../fonts/ibm-plex-mono/ibm-plex-mono-500.woff'
import IbmPlexMonoMediumWoff2 from '../fonts/ibm-plex-mono/ibm-plex-mono-500.woff2'
import IbmPlexMonoSemiboldWoff from '../fonts/ibm-plex-mono/ibm-plex-mono-600.woff'
import IbmPlexMonoSemiboldWoff2 from '../fonts/ibm-plex-mono/ibm-plex-mono-600.woff2'

import PoppinsRegularWoff from '../fonts/poppins/poppins-regular.woff'
import PoppinsRegularWoff2 from '../fonts/poppins/poppins-regular.woff2'
import PoppinsMediumWoff from '../fonts/poppins/poppins-500.woff'
import PoppinsMediumWoff2 from '../fonts/poppins/poppins-500.woff2'
import PoppinsSemiboldWoff from '../fonts/poppins/poppins-600.woff'
import PoppinsSemiboldWoff2 from '../fonts/poppins/poppins-600.woff2'
import PoppinsBoldWoff from '../fonts/poppins/poppins-700.woff'
import PoppinsBoldWoff2 from '../fonts/poppins/poppins-700.woff2'

import SFMonoRegularWoff from '../fonts/SFMono/SFMono-Regular.woff'
import SFMonoRegularWoff2 from '../fonts/SFMono/SFMono-Regular.woff2'
import SFMonoSemiboldWoff from '../fonts/SFMono/SFMono-Semibold.woff'
import SFMonoSemiboldWoff2 from '../fonts/SFMono/SFMono-Semibold.woff2'

import SFMonoRegularItalicWoff from '../fonts/SFMono/SFMono-RegularItalic.woff'
import SFMonoRegularItalicWoff2 from '../fonts/SFMono/SFMono-RegularItalic.woff2'
import SFMonoSemiboldItalicWoff from '../fonts/SFMono/SFMono-SemiboldItalic.woff'
import SFMonoSemiboldItalicWoff2 from '../fonts/SFMono/SFMono-SemiboldItalic.woff2'

const ibmPlexMonoNormalWeights = {
  400: [IbmPlexMonoRegularWoff, IbmPlexMonoRegularWoff2],
  500: [IbmPlexMonoMediumWoff, IbmPlexMonoMediumWoff2],
  600: [IbmPlexMonoSemiboldWoff, IbmPlexMonoSemiboldWoff2]
}
const poppinsNormalWeights = {
  400: [PoppinsRegularWoff, PoppinsRegularWoff2],
  500: [PoppinsMediumWoff, PoppinsMediumWoff2],
  600: [PoppinsSemiboldWoff, PoppinsSemiboldWoff2],
  700: [PoppinsBoldWoff, PoppinsBoldWoff2]
}

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2]
}

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2]
}

const ibmPlexMono = {
  name: 'IBMPlexMono',
  normal: ibmPlexMonoNormalWeights
}

const poppins = {
  name: 'Poppins',
  normal: poppinsNormalWeights
}

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights
}

const createFontFaces = (family, style = 'normal') => {
  let styles = ''
  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]
    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }
  return styles
}

const ibmPlexMonoNormal = createFontFaces(ibmPlexMono)
const poppinsNormal = createFontFaces(poppins)
const sfMonoNormal = createFontFaces(sfMono)
const sfMonoItalic = createFontFaces(sfMono, 'italic')

const Fonts = css`
  ${ibmPlexMonoNormal + poppinsNormal + sfMonoNormal + sfMonoItalic}
`

export default Fonts
