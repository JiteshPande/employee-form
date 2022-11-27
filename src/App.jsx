import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './form/Registration';
import HtmlAddBackup from './form/HtmlAddBackup';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route exact path="/grid" element={<HtmlAddBackup />} />
      </Routes>
    </div>
  );
}
export default App;
