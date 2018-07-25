import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => <Link to="/">Link</Link>)
  .add('gray', () => (
    <Link to="/" palette="gray">
      Link
    </Link>
  ))
