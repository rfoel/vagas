import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #fff;
  font-weight: 300;
  color: ${palette('grayscale', 1)};

  h1 {
    font-size: 1.3rem;
    font-weight: 300;
    margin: 2rem 0;
  }
`;

const Footer = () => (
  <HeaderWrapper>
    <h1>Vagas</h1>
  </HeaderWrapper>
);

export default Footer;
