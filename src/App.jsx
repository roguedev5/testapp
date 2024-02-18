import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes/Routes";

const defaultTheme = createTheme();

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
