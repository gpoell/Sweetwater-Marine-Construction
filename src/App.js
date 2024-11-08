import React from "react";
import Home from "./content/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};
export default App;
