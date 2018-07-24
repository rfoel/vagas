import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Button', module)
  .add('default', () => <Button>Button</Button>)
  .add('transparent', () => <Button transparent>Button</Button>)
  .add('outlined', () => <Button outlined>Button</Button>)
  .add('disabled', () => <Button disabled>Button</Button>)
  .add('transparent and disabled', () => (
    <Button transparent disabled>
      Button
    </Button>
  ))
  .add('outlined and disabled', () => (
    <Button outlined disabled>
      Button
    </Button>
  ))
