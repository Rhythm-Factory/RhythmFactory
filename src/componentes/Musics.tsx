// Rhythm Factory - Poste sua música, crie seu ritmo.
// Copyright (C) 2025 Cleverton Santiago
//
// Este programa é licenciado sob a GNU GPLv3. 
// Para mais detalhes, veja o arquivo LICENSE no repositório ou <https://www.gnu.org/licenses/>.

type MusicsType = {
    title: string;
    artist: string;
    releasedAt: string;
}

export default function Musics() {
    const musics: MusicsType[] = [
        {
            title: "Test",
            artist: "uou",
            releasedAt: "num sei",
        }
    ];

    return (
        <div>
            {musics.map((music, index) => (
                <div key={index}>
                    <h3>{music.title}</h3>
                    <p>{music.artist}</p>
                    <p>{music.releasedAt}</p>
                </div>
            ))}
        </div>
    );
}
