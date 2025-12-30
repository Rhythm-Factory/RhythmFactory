// Rhythm Factory - Poste sua música, crie seu ritmo.
// Copyright (C) 2025 Cleverton Santiago
//
// Este programa é licenciado sob a GNU GPLv3. 
// Para mais detalhes, veja o arquivo LICENSE no repositório ou <https://www.gnu.org/licenses/>.

// Componentes
import Button from "./Button";
import Logo from "./Logo";

// Header
export default function Header() {
    console.log("Header component loaded")
    return (
        <header className="header">
            <div className="right">
                <Logo />
                <Button link="/sobre">Sobre Nós</Button>
            </div>
            <div className="left">
                <Logo />
            </div>
        </header>
    );
}
