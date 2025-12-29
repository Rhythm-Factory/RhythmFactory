// Cleverton Júnior - 2025

// Type
import type { ReactNode } from "react"

// Navegação
import { useNavigate } from "react-router-dom"

// Css
import "../css/componentes/FeatureButton.css"

type Props = {
  children: ReactNode
  link?: string
  className?: string
  onClick?: () => void
}

// Botão pra destacar
export default function FeatureButton({
  children,
  link,
  className,
  onClick
}: Props) {
  const navigate = useNavigate()

  return (
    <a
      className={["featurebutton", className].filter(Boolean).join(" ")}
      onClick={() => {
        if (onClick) onClick()
        else if (link) navigate(link)
      }}
    >
      {children}
    </a>
  )
}
