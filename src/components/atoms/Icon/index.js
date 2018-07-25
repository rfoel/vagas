import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const fontSize = ({ width, height }) => {
  const size = width || height
  return size ? `${size / 16}rem` : '1.25em'
}

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: currentColor;
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    stroke: currentColor;
  }
`

const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

export default Icon
