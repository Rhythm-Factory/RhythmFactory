[![Sponsor](https://img.shields.io/badge/Sponsor-GitHub-brightgreen)](https://github.com/sponsors/Rhythm-Factory)
<<<<<<< HEAD
=======

# Rhythm Factory
>>>>>>> 83986291fbc17068cd4c95eb8bb8e2daaba4a9b4

# Rhythm Factory

**Poste sua música, crie seu ritmo.**

## Sumário
- [Objetivo](#objetivo)
- [Compilando o Projeto](#compilando-o-projeto)
- [Componentes necessários](#componentes-necessários)
- [Dicas adicionais](#dicas-adicionais)

## Objetivo

O Rhythm Factory é totalmente gratuito e simplifica a distribuição de músicas. Diferente de outras plataformas de streaming, você não precisa de intermediários — publique sua música e ela chega diretamente ao público.

## Compilando o Projeto

Para executar o Rhythm Factory em seu sistema, você pode compilar o projeto para o seu sistema operacional. Compilando manualmente, o aplicativo ficará compatível com o MacOS, que no momento não temos suporte no GitHub.

### Componentes necessários

Instale os seguintes itens em sua máquina:

* **Node.js / npm**
* **Git**
* **[Rust](https://www.rust-lang.org/tools/install)** (necessário para o Tauri)
* **Dependências de sistema** dependendo do OS:

  * **Linux:**
    - libgtk-3-dev
    - libwebkit2gtk-4.1-dev
    - libappindicator3-dev
    - librsvg2-dev
    - patchelf
    - pkg-config
    - libglib2.0-dev

  * **Windows:** 
    - Visual Studio Build Tools (C++);
  * **MacOS:** 
    - Xcode Command Line Tools

### Clonando o repositório

```bash
git clone https://github.com/Rhythm-Factory/rhythm-factory.git
cd rhythm-factory
```

### Instalando Node.js/npm

Se não tiver Node.js/npm, instale via NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
nvm install 18
```

### Instalando dependências do projeto
Instale as dependências do projeto com o comando

```bash
npm install
```

### Compilação do Projeto
#### Frontend

```bash
npm run build
```

#### Aplicativo

```bash
npm run tauri build
```

### Localização do aplicativo compilado
Após a compilação, o aplicativo estará localizado em:

* **Windows:** `<ProjectDir>/src-tauri/target/release/bundle/*.exe`
* **MacOS:** `<ProjectDir>/src-tauri/target/release/bundle/*.dmg`
* **Linux:** `<ProjectDir>/src-tauri/target/release/bundle/appimage/*.AppImage`

## Troubleshooting
Caso encontre problemas durante a instalação ou compilação, estas soluções podem ajudar:

* **Erro ao instalar dependências com npm**  
  Tente limpar o cache e instalar novamente:
  ```bash
  npm cache clean --force
  npm install
  ```

* **Erro ao instalar dependências do sistema (Linux):**
  Tente atualizar e instalar novamente, dependendo da distribuição:

  **Debian/Ubuntu-based**:
  ```bash
  sudo apt update
  sudo apt install -y libgtk-3-dev libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf pkg-config libglib2.0-dev
  ```

  **Arch-based**:
  ```bash
  sudo pacman -Syu
  sudo pacman -S gtk3 webkit2gtk libappindicator-gtk3 librsvg patchelf pkgconf glib2
  ```

  **RPM-based** (Fedora, CentOS):
  ```bash
  sudo dnf upgrade --refresh
  sudo dnf install gtk3 webkit2gtk3 libappindicator librsvg2 patchelf pkgconfig glib2
  ```

## Dicas adicionais

* Utilize Node.js versão 18 ou superior e Rust versão 1.92.0 ou superior.
* Para compilações multiplataforma, use o ambiente correto ou máquinas virtuais.
* Utilize cache de dependências em CI/CD para acelerar compilações repetidas.
