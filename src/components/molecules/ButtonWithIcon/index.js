import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, ifNotProp } from 'styled-tools'

import { Icon, Button } from 'components'

const StyledButton = styled(Button)`
  flex-direction: ${ifProp('right', 'row-reverse', 'row')};
`

const Text = styled.span`
  padding: 0 ${ifProp('right', '0.4em', 0)} 0 ${ifNotProp('right', '0.4em', 0)};
`

const ButtonWithIcon = ({ icon, children, ...props }) => {
  return (
    <StyledButton hasText={!!children} {...props}>
      <Icon icon={icon} />
      {children && <Text right={props.right}>{children}</Text>}
    </StyledButton>
  )
}

ButtonWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.number,
  children: PropTypes.node,
  right: PropTypes.bool,
}

export default ButtonWithIcon
