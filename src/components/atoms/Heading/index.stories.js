import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from '.'

storiesOf('Heading', module)
  .add('default', () => <Heading>Front-End Brasil</Heading>)
  .add('palette center', () => (
    <Heading palette="primary" center>
      Front-End Brasil
    </Heading>
  ))
  .add('palette reverse', () => (
    <Heading palette="primary" reverse>
      Front-End Brasil
    </Heading>
  ))
  .add('h2', () => <Heading level={2}>Front-End Brasil</Heading>)
  .add('h3', () => <Heading level={3}>Front-End Brasil</Heading>)
