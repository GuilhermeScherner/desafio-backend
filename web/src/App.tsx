import React from "react";
import { routes } from "routes";
import { Routes, Route } from "react-router-dom";
import { theme } from "./styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";

function App() {
  return (
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </MaterialThemeProvider>
      </StyledThemeProvider>
  );
}

export default App;
