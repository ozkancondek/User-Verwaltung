import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/Global.style";
import React from "react";
import { Router } from "./routes/Router";
import { ApiProvider } from "./providers/ApiProvider";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./components/Error";

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
  <ErrorBoundary FallbackComponent={Error}>
    <BrowserRouter>
      <ThemeProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

export default Main;
