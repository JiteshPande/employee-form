import React from "react";
import { Routes, Route } from "react-router-dom";
import HtmlAddBackup from "./form/HtmlAddBackup";
import RegistrationForm from "./form/Registration";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<RegistrationForm />} />
        <Route exact path="/grid" element={<HtmlAddBackup />} />
      </Routes>
    </div>
  );
}
export default App;
