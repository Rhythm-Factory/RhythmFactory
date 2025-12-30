// Rhythm Factory - Poste sua música, crie seu ritmo.
// Copyright (C) 2025 Cleverton Santiago
//
// Este programa é licenciado sob a GNU GPLv3. 
// Para mais detalhes, veja o arquivo LICENSE no repositório ou <https://www.gnu.org/licenses/>.

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
