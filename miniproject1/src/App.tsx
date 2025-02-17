import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pr1 from "./pages/mini-pr1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pr1" element={<Pr1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
