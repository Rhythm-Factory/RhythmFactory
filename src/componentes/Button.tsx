// Cleverton Júnior - 2025

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
