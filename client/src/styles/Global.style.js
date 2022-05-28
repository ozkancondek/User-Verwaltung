import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.root};
    color: ${({ theme }) => theme.root};
    font-family: ${({ theme }) => theme.root};
    font-size: 1.15em;
    margin: 0;
    
  }
 
 
`;

export default GlobalStyles;
