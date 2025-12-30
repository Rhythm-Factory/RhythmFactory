// Rhythm Factory - Poste sua música, crie seu ritmo.
// Copyright (C) 2025 Cleverton Santiago
//
// Este programa é licenciado sob a GNU GPLv3. 
// Para mais detalhes, veja o arquivo LICENSE no repositório ou <https://www.gnu.org/licenses/>.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/index.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
