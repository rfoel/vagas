import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'

import { HomePage, JobsPage } from 'components'

import theme from './themes/default'

injectGlobal`
  ${reset};
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/vagas" component={JobsPage} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App
