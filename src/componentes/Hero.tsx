// Cleverton Júnior - 2025

// Imports
import Highlight from "./Highlight";
import Paragraph from "./Paragraph";
import FeatureButton from "./FeatureButton";

// Css
import "../css/componentes/Hero.css";

// Hero
export default function Hero() {
  return (
    <div className='hero'>
      <Highlight className='title'>Rhythm Factory.</Highlight>
      <Paragraph className='paragraph'>Poste sua música, crie seu ritmo.</Paragraph>
      <FeatureButton className='download' link="/download">Baixe Agora</FeatureButton>
    </div>
  );
}
