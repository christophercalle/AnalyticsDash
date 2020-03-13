import styled from 'styled-components';
import {medGrey, darkerGrey} from './GlobalStyle';

export const Card = styled.div`
  padding: 20px;
  margin-top: 20px;
  background-color: ${({dark}) => (dark ? darkerGrey : 'white')};
  box-shadow: 0 3px 5px ${({dark}) => (dark ? 'black' : medGrey)};
  box-sizing: border-box; 
  ${({height}) => height && `height: ${height}px;`}

  @media (max-width: 1200px){
    padding: 10px;
  }
`
