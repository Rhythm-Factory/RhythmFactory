// Cleverton Júnior - 2025

// Type
import type { ReactNode } from 'react';

// Css
import "../css/componentes/Paragraph.css";

// Paragrafo (estilizado, óbvio)
export default function Paragraph({ children, className }: { children: ReactNode; className?: string; }) {
  return <p className={['paragraph', className].filter(Boolean).join(' ')}>{children}</p>;
}
