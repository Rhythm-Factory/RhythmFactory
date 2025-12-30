// Rhythm Factory - Poste sua música, crie seu ritmo.
// Copyright (C) 2025 Cleverton Santiago
//
// Este programa é licenciado sob a GNU GPLv3. 
// Para mais detalhes, veja o arquivo LICENSE no repositório ou <https://www.gnu.org/licenses/>.

// Types
import type { ReactNode } from 'react';

// Navegação
import { useNavigate } from "react-router-dom";

// Css
import '../css/componentes/Button.css';

// Botão...................................................... kkkk
export default function Button({ children, link }: { children: ReactNode; link: string }) {
  const navigate = useNavigate();

  return (
    <button className="button" onClick={() => navigate(link)}>
      {children}
    </button>
  );
}
