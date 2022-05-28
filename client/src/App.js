import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/Global.style";
import React from "react";
import { Router } from "./routes/Router";

function App() {
  const { panel, isDark } = useTheme();

  return (
    <React.Fragment>
      <GlobalStyles isDark={isDark} theme={panel} />
      <Router />
    </React.Fragment>
  );
}

const Main = () => (
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

export default Main;
