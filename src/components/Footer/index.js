import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  color: ${palette('grayscale', 1, true)};

  a {
    text-decoration: none;
    color: ${palette('grayscale', 2, true)};
  }
`;

const Footer = () => (
  <FooterWrapper>
    Feito por&nbsp;
    <a href="https://github.com/rfoel" target="_blank" rel="noopener noreferrer">
      @rfoel
    </a>
  </FooterWrapper>
);

export default Footer;
