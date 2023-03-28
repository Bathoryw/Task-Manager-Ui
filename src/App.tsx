import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Styles/theme";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
