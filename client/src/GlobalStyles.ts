import { createGlobalStyle } from 'styled-components';
import { BACKGROUND, BLACK, MAIN_COLOR } from './Constants/colors';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    color: ${BLACK};
    background: ${BACKGROUND};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  a {
    color: ${MAIN_COLOR};
    text-decoration: none
  }


`;

export default GlobalStyle;
