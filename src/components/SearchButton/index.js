import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const SearchButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  background: #fff;
  border: 0;
  border-radius: 50%;
  padding 0.7rem;
  box-shadow: 0px 10px 40px -10px ${palette('grayscale', 2, true)};
  outline: none;
  color: ${palette('grayscale', 1, true)};

  &:hover {
    box-shadow: 0px 10px 40px -10px ${palette('grayscale', 3, true)};
  }

  &:hover {
    
  }

  svg {
    width: 100%;
    path {
      fill: currentColor;
    }
  }
`;

const SearchButton = () => (
  <SearchButtonWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451">
      <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" />
    </svg>
  </SearchButtonWrapper>
);

export default SearchButton;
