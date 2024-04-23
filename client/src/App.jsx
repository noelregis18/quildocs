import React from "react";
import Editor from "./components/Editor";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
        <Route path="/documents/:id" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
