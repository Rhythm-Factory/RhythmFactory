// Cleverton Júnior - 2025

import Highlight from "../componentes/Highlight";

export default function Dashboard({ nome }: { nome: string }) {
    return (
        <>
            <Highlight>Olá, {nome}!</Highlight>
            <p>Suas Músicas</p>
        </>
    );
}
