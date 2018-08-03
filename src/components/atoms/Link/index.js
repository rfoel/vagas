import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import NavLink from 'react-router-dom/NavLink'

const styles = css`
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

const StyledNavLink = styled(({ theme, reverse, palette, ...props }) => <NavLink {...props} />)`
  ${styles};
`

const Anchor = styled.a`
  ${styles};
`

const Link = ({ ...props }) => {
  if (props.to) {
    return <StyledNavLink onlyActiveOnIndex {...props} />
  }
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
