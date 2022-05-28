import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
 body {
    background-color: ${({ theme, isDark }) =>
      isDark ? theme.bg.dark : theme.bg.light};
    color: ${({ theme, isDark }) =>
      isDark ? theme.text.secondary : theme.text.primary};
    font-family:   'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.15em;
    margin: 0;
    
  } 
 
 
`;

export default GlobalStyles;
