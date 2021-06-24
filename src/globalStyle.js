import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    
    html, body {
        overflow-x: hidden;
    }

   .navbar.active {
    background: #FFFFFF;
    opacity: .97;
  }

  .active .navlink {
      color: #4a4a4a;
      font-weight: 500;
  }

`;

export default GlobalStyle;
