// Cleverton Júnior - 2025

// Navegação
import { useNavigate } from "react-router-dom";

// Import pra detectar tema (escuro/claro)
import { useEffect, useState } from "react";

// Logo (auto explicativo)
export default function Logo() {
  const [isDark, setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const navigate = useNavigate();

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return <img className="logo"src={isDark ? "/assets/Icon-Dark.png" : "/assets/Icon-Light.png"} alt="Rhythm Factory logo" onClick={() => navigate("/")} />;
}
