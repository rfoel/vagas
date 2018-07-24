import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#654EA3'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
}

theme.sizes = {
  maxWidth: '900px',
}

export default theme
