import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import Home from './components/Home';
import theme from './themes/default';

injectGlobal`
  html, body, #root {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    height: 100%;
    
  }
    ::selection {
      background: ${theme.palette.primary[0]};
    }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Home />
    </Layout>
  </ThemeProvider>
);

export default App;
