import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette('grayscale', 2, true)};

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
    margin: 2rem 0;
    text-align: center;
  }
`;

const Home = () => (
  <HomeWrapper>
    <h2>Espaço para divulgação de vagas para front-enders</h2>
  </HomeWrapper>
);

export default Home;
