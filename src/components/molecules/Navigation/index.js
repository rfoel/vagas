import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Link, ButtonWithIcon } from 'components'

const mobileBreakpoint = '700px'

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid ${palette('gray', 5)};
`

const NavBrand = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  margin-right: auto;
  list-style: none;
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    align-items: stretch;
    flex-shrink: 0;
  }
`

const NavMenu = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  margin-left: auto;
  list-style: none;
  > :last-child {
    margin-left: 0.75rem;
  }
  @media (max-width: ${mobileBreakpoint}) {
    display: none;
    text-align: center;
    margin: 0 auto;
    > :last-child {
      margin-left: 0;
      margin-bottom: 1rem;
    }
    &.active {
      flex-direction: column;
      flex-wrap: wrap;
      display: flex;
    }
  }
`

const NavLink = styled(({ reverse, palette, ...props }) => <Link {...props} />)`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  font-family: ${font('primary')};
  color: ${palette('gray', 2)};
  margin: 0.5rem 0.3rem;
  height: 2.2em;
  padding: 0 0.8em;
  border-radius: 0.5em;

  &:hover {
    color: ${palette('gray', 1)};
    background: ${palette('gray', 2, true)};
  }
  &:active {
    color: ${palette('gray', 0)};
    background: ${palette('gray', 3, true)};
  }

  @media (max-width: ${mobileBreakpoint}) {
    margin: 0;
  }
`

const NavButtonWithIcon = styled(({ reverse, palette, ...props }) => <ButtonWithIcon {...props} palette={palette} />)`
  margin: 0.5rem;
  @media (max-width: ${mobileBreakpoint}) {
    margin-right: 0;
    margin-left: 0;
  }
`

const NavBurger = styled(({ reverse, palette, ...props }) => <ButtonWithIcon transparent {...props} />)`
  display: none;
  @media (max-width: ${mobileBreakpoint}) {
    display: inline-flex;
    margin-left: auto;
  }
`

class Navigation extends Component {
  state = {
    isToggled: false,
  }

  toggle = () => {
    this.setState({
      isToggled: !this.state.isToggled,
    })
  }

  render() {
    return (
      <Nav {...this.props}>
        <NavBrand>
          <NavLink to="/">Front-End Brasil</NavLink>
          <NavBurger icon={this.state.isToggled ? 'close' : 'menu'} onClick={this.toggle} />
        </NavBrand>
        <NavMenu className={this.state.isToggled ? 'active' : null}>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/vagas">Vagas</NavLink>
          <NavButtonWithIcon icon="github" palette="gray" reverse href="https://github.com/rfoel/vagas" target="_blank">
            GitHub
          </NavButtonWithIcon>
        </NavMenu>
      </Nav>
    )
  }
}

Navigation.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Navigation.defaultProps = {
  palette: 'primary',
}

NavLink.defaultProps = {
  palette: 'primary',
}

export default Navigation
