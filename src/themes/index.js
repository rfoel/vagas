import { reversePalette } from 'styled-theme/composer';

const theme = {};

theme.palette = {
  grayscale: ['#576ab3', '#697abb', '#7a89c3', '#d3d8eb', '#e4e7f3', '#f6f7fb'],
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
};

theme.sizes = {
  maxWidth: '1100px',
};

export default theme;
