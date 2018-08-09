/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { palette, font } from 'styled-theme';

import Header from '../Header';
import Footer from '../Footer';

const LayoutWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  font-family: ${font('primary')};
  background: ${palette('grayscale', 0, true)};

  main {
    flex-grow: 1;
  }
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <main>{children}</main>
    <Footer />
  </LayoutWrapper>
);

export default Layout;
