import React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraph from '.'

storiesOf('Paragraph', module)
  .add('default', () => <Paragraph>Espaço para divulgação de vagas para front-enders.</Paragraph>)
  .add('reverse', () => <Paragraph reverse>Espaço para divulgação de vagas para front-enders.</Paragraph>)
