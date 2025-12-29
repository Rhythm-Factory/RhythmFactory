// Cleverton Santiago - 2025

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
