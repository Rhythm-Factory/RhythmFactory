// Cleverton Júnior - 2025

// Type
import type { ReactNode } from 'react';

// Css
import "../css/componentes/Highlight.css";

// Títulos
export default function Highlight({ children, className }: { children: ReactNode; className?: string; }) {
  return <h1 className={['highlight', className].filter(Boolean).join(' ')}>{children}</h1>;
}
