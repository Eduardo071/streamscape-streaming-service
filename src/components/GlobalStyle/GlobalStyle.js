import { createGlobalStyle } from "styled-components";

// Estilo global
export const GlobalStyle = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    list-style-type: none;
    text-decoration: none;
    overflow-x: hidden;
    ::-webkit-scrollbar{
      display: none;
    }
    font-size: 62.5%;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

`;
