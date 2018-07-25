import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => <Icon icon="menu" />)
  .add('height', () => <Icon icon="close" height={100} />)
