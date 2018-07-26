import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'
import { Icon, Link } from 'components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-family: ${font('primary')};
  height: ${props => props.height}px;
  color: ${palette('gray', 0, true)};
  background: ${palette(2)};
  padding: 2rem;
`

const Footer = ({ ...props }) => {
  return (
    <StyledFooter {...props}>
      <Icon icon="code" />&nbsp;por&nbsp;
      <Link href="https://rafaelfran.co" target="_blank" palette="gray" reverse>
        @rfoel
      </Link>
    </StyledFooter>
  )
}

Footer.propTypes = {
  palette: PropTypes.string,
  height: PropTypes.number,
}

Footer.defaultProps = {
  palette: 'gray',
  height: 100,
}

export default Footer
