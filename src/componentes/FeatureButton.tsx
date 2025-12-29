// Cleverton Júnior - 2025

// Type
import type { ReactNode } from 'react';

// Navegação
import { useNavigate } from "react-router-dom";

// Css
import '../css/componentes/FeatureButton.css';

// Botão pra destacar
export default function FeatureButton({ children, link, className, onClick }: { children: ReactNode; link?: string; className?: string; onClick?: () => void; }) {
  const navigate = useNavigate();

  return <a className={['featurebutton', className].filter(Boolean).join(' ')} onClick={() => { if (onClick) onClick(); else navigate(link); }}>{children}</a>;
}
