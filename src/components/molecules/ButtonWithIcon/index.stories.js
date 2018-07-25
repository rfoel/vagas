import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonWithIcon } from 'components'

storiesOf('ButtonWithIcon', module)
  .add('default', () => <ButtonWithIcon icon="menu">Hello</ButtonWithIcon>)
  .add('icon right', () => (
    <ButtonWithIcon icon="menu" right>
      Hello
    </ButtonWithIcon>
  ))
  .add('outlined', () => (
    <ButtonWithIcon icon="menu" outlined>
      Hello
    </ButtonWithIcon>
  ))
  .add('icon only', () => <ButtonWithIcon icon="menu" />)
  .add('icon only transparent', () => <ButtonWithIcon icon="menu" transparent />)
  .add('height', () => (
    <ButtonWithIcon icon="menu" height={100}>
      Hello
    </ButtonWithIcon>
  ))
