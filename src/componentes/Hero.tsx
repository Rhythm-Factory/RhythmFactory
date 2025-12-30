// Rhythm Factory - Poste sua música, crie seu ritmo.
// Copyright (C) 2025 Cleverton Santiago
//
// Este programa é licenciado sob a GNU GPLv3. 
// Para mais detalhes, veja o arquivo LICENSE no repositório ou <https://www.gnu.org/licenses/>.

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
