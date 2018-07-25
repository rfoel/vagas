import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Anchor = styled.a`
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
  to: PropTypes.string,
  href: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Link.defaultProps = {
  palette: 'primary',
}

export default Link
