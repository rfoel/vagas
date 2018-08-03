import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const fontSize = ({ height }) => `${height / 40}rem`

const color = ({ transparent, outlined, disabled }) =>
  transparent || outlined ? palette(disabled ? 4 : 2) : palette('gray', 0, true)

const background = ({ transparent, outlined, disabled }) =>
  transparent || outlined ? 'transparent' : palette(disabled ? 4 : 2)

const hoverBackground = ({ transparent, outlined }) => (transparent || outlined ? palette('gray', 1, true) : palette(1))

const activeBackground = ({ transparent, outlined }) =>
  transparent || outlined ? palette('gray', 2, true) : palette(0)

const styles = css`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  font-family: ${font('primary')};
  font-size: ${fontSize};
  color: ${color};
  background ${background};
  height: 2.2em;
  padding: 0 0.8em;
  border-radius: 0.5em;
  appearance: none;
  box-sizing: border-box;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  border: 0.0625em solid ${ifProp('outlined', 'currentcolor', 'transparent')};
  cursor: ${ifProp('disabled', 'auto', 'pointer')};
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  user-select: ${ifProp('disabled', 'none', 'auto')};

  &:hover {
    background ${hoverBackground};
  }
  &:active {
    background ${activeBackground};
  }

  &:focus {
    outline: none;
  }
`

const StyledLink = styled(({ ...props }) => <Link {...props} />)`
  ${styles};
`

const StyledButton = styled.button`
  ${styles};
`

const Anchor = styled.a`
  ${styles};
`

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  palette: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.number,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  outlined: PropTypes.bool,
  href: PropTypes.string,
}

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
}

export default Button
