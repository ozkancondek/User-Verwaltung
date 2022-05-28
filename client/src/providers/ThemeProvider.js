import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const panel = {
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
      tertiary: "#2B5EA9",
    },
    bg: {
      light: " #FFFFFF",
      dark: "#2e2e2e",
      blue: " #3DBFEF",
      danger: "#ff1e1e",
      grey: "#747f81",
    },

    font: {
      primary: "'Roboto', sans-serif",
      secondary: "'Poppins', sans-serif;",
    },
    screen: {
      small_min: `@media(min-width:480px)`,
      small_max: `@media(max-width:480px)`,
      medium_min: `@media(min-width:768px)`,
      medium_max: `@media(max-width:768px)`,
      large_min: `@media(min-width:1024px)`,
      large_max: `@media(max-width:1024px)`,
    },
  };

  //states for night mood button and control state
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ panel, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const myTheme = useContext(ThemeContext);
  if (!myTheme) {
    throw new Error("useTheme must be used in ThemeProvider");
  }
  return myTheme;
};
