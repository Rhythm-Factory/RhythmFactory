// Cleverton Júnior - 2025

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./paginas/Dashboard";
import Signup from "./paginas/Signup";
import "./css/globais/importfontes.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard nome="teste" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
