// Rhythm Factory - Poste sua música, crie seu ritmo.
// Copyright (C) 2025 Cleverton Santiago
//
// Este programa é licenciado sob a GNU GPLv3. 
// Para mais detalhes, veja o arquivo LICENSE no repositório ou <https://www.gnu.org/licenses/>.

// Type
import type { ReactNode } from 'react';

// Css
import "../css/componentes/Paragraph.css";

// Paragrafo (estilizado, óbvio)
export default function Paragraph({ children, className }: { children: ReactNode; className?: string; }) {
  return <p className={['paragraph', className].filter(Boolean).join(' ')}>{children}</p>;
}
