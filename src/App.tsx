import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>soy mas creativo</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
