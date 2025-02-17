import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pr1 from "./pages/pr1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pr1" element={<Pr1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
