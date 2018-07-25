import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#503d81', '#5a4692', '#654ea3', '#8f7dc1', '#bcb1da'],
  gray: ['#080808', '#212121', '#414141', '#616161', '#eeeeee', '#f7f7f7', '#ffffff'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
}

theme.sizes = {
  maxWidth: '900px',
}

export default theme
