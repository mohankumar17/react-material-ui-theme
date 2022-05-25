import React from "react";
import "./App.css";
import MUISelect from "./components/MUISelect";
import MUITextField from "./components/MUITextField";
import MUITypography from "./components/MUITypography";
import MUIButton from "./components/MUIButton";

function App() {
  return (
    <div className="App">
      <MUITypography></MUITypography>
      <MUIButton></MUIButton>
      <MUITextField></MUITextField>
      <MUISelect></MUISelect>
    </div>
  );
}

export default App;
