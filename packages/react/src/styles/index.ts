import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
  radii,
  space,
} from '@ignite-ui-khazaf/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    lineHeights,
    fontWeights,
    radii,
    space,
  },
})
