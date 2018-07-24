import React from 'react'
import PropTypes from 'prop-types'
import DOMLink from 'react-router-dom/Link'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Anchor = styled(({ palette, ...props }) => <DOMLink {...props} />)`
  text-decoration: none;
  cursor: pointer;
  font-family: ${font('primary')};
  color: ${palette(2)};
  &:hover {
    color: ${palette(1)};
  }
  &:active {
    color: ${palette(0)};
  }
`

const Link = ({ ...props }) => {
  return <Anchor {...props} />
}

Link.propTypes = {
  palette: PropTypes.string,
  to: PropTypes.string,
}

Link.defaultProps = {
  palette: 'primary',
}

export default Link
