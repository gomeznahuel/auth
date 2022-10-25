import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }

  // Global colors

  /* :root {
    --primary: #1e90ff;
    --secondary: #ff6347;
    --success: #3cb371;
    --danger: #dc143c;
    --warning: #ffa500;
    --info: #00bfff;
    --light: #f8f9fa;
    --dark: #343a40;
    --white: #fff;
    --black: #000;
  } */
`;
