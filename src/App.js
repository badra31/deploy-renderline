import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import About from "./pages/About";
import Render from "./pages/Render";
import Project from "./pages/Project";
import Tool_1 from "./pages/Tool_1";
import Tool_2 from "./pages/Tool_2";
import Tool_3 from "./pages/Tool_3";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/render" element={<Render />} />

          <Route
            path="/project"
            element={
              <ProtectedRoute>
                <Project />
              </ProtectedRoute>
            }
          />
          <Route
            path="/data"
            element={
              <ProtectedRoute>
                <Data />
              </ProtectedRoute>
            }
          />
          <Route path="/documentation-1" element={<Tool_1 />} />
          <Route path="/documentation-2" element={<Tool_2 />} />
          <Route path="/documentation-3" element={<Tool_3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
