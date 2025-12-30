// Rhythm Factory - Poste sua música, crie seu ritmo.
// Copyright (C) 2025 Cleverton Santiago
//
// Este programa é licenciado sob a GNU GPLv3. 
// Para mais detalhes, veja o arquivo LICENSE no repositório ou <https://www.gnu.org/licenses/>.


import Highlight from "../componentes/Highlight";

export default function Dashboard({ nome }: { nome: string }) {
    return (
        <>
            <Highlight>Olá, {nome}!</Highlight>
            <p>Suas Músicas</p>
            <br />
        </>
    );
}
