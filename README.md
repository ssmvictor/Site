# Portfólio de Victor Silva Mendes 🚀

Este repositório reúne o site estático do portfólio de Victor Silva Mendes, Consultor de TI especializado em Inteligência Artificial, integrações com ERP Sankhya e desenvolvimento full stack. O objetivo é apresentar experiência profissional, formação, projetos e contatos em um único lugar com um visual moderno.

## Visão geral

O site é composto por um `index.html` que carrega dinamicamente as seções "Sobre", "Experiência", "Projetos" e "Contato". Um tema escuro, tipografia elegante (Playfair Display e Poppins) e uma animação interativa de partículas no hero criam a identidade visual. Todas as interações são tratadas em `script.js`, incluindo rolagem suave, destaque de navegação, efeitos de entrada e integração direta com a API pública do GitHub. ✨

## Recursos principais

- Layout em página única com cabeçalho fixo, tema escuro e componentes responsivos.
- Carregamento dinâmico das seções (`sobre.html`, `experiencia.html`, `projetos.html`, `contato.html`) via `fetch`, com fallback automático para templates inline quando o site é aberto usando `file://`.
- Listagem automática dos 6 repositórios mais recentes do usuário GitHub configurado (padrão `ssmvictor`), com nome, descrição, linguagem e link direto.
- Animações de partículas em canvas, efeitos de fade-in via `IntersectionObserver`, rolagem suave e destaque do link ativo conforme o usuário navega.
- Mensagens de erro e instruções guiadas para orientar quem tentar abrir o site sem servidor local.

## Tecnologias e serviços

- HTML5 sem frameworks, com seções semânticas modulares.
- CSS3 moderno (`styles.css`) com variáveis de cor, grid responsivo e animações.
- JavaScript puro (ES6+) para manipulação da DOM, `fetch`, `IntersectionObserver` e canvas 2D.
- GitHub REST API v3 para listar repositórios públicos.
- Tipos de letra do Google Fonts (Playfair Display e Poppins).

## Estrutura do projeto

- `index.html`: shell da aplicação, header, hero, canvas, rodapé e importação do JS/CSS.
- `README.md`: documentação do projeto.
- `/css/`
  - `styles.css`: define tema escuro, grids, tipografia, animações e comportamento responsivo.
- `/js/`
  - `script.js`: centraliza lógica de carregamento das seções, animações, integração com GitHub e partículas.
- `/pages/`
  - `sobre.html`, `experiencia.html`, `projetos.html`, `contato.html`: blocos de conteúdo carregados em `#dynamic-content`.
- `/assets/`
  - `logo.png`: logomarca exibida no cabeçalho.

## Pré-requisitos

- Navegador moderno com suporte a ES6, `fetch`, `IntersectionObserver` e canvas.
- Servidor HTTP simples (necessário porque `fetch` não funciona usando o esquema `file://`).

## Como executar localmente

1. Clone este repositório e abra a pasta `portfolio-html` no seu editor.
2. Inicie um servidor local antes de abrir o navegador. Algumas opções:
   - Extensão **Live Server** do VS Code (`index.html` > *Open with Live Server*).
   - `python -m http.server 8000`
   - `npx http-server -p 8000`
3. Acesse `http://localhost:8000` (ou a porta que escolheu) para navegar com todas as seções e projetos carregados corretamente.

## Personalização rápida

- **Projetos do GitHub:** altere `const username = 'ssmvictor';` em `script.js` para apontar para outro usuário GitHub.
- **Links sociais e contato:** atualize os elementos no cabeçalho e em `contato.html` (LinkedIn, GitHub, YouTube, email e localização).
- **Conteúdo textual:** ajuste os blocos de texto em cada arquivo da pasta raiz ou edite diretamente os templates inline em `script.js`.
- **Estilo:** modifique as cores principais e espaçamentos em `styles.css`. Variáveis e classes utilitárias controlam botões, cards e grids.
- **Logo:** substitua `logo.png` mantendo proporção similar para preservar o layout do cabeçalho.

## Scripts e funcionalidades

- `loadSections()`: tenta buscar cada arquivo HTML via `fetch`. Em caso de erro ou execução com `file://`, aplica um fallback renderizando templates internos.
- `observeAnimatedElements()`: usa `IntersectionObserver` para revelar cards, textos e cabeçalhos com transições suaves apenas quando entram no viewport.
- `loadGithubProjects()`: consulta a API pública do GitHub, trata estados de carregamento/erro e popula a grade `.projects-grid` com os 6 repositórios mais recentes.
- `Particle` + `connect()`: criam e animam partículas responsivas ao movimento do mouse no canvas `#particle-canvas`.
- Manipuladores adicionais implementam rolagem suave, destaque do link ativo e mudanças de opacidade no header conforme o scroll.

## Conteúdo das seções

- `sobre.html`: biografia resumida e cards de habilidades (IA, desenvolvimento, ERP e BI).
- `experiencia.html`: histórico profissional, responsabilidades detalhadas e formação acadêmica.
- `projetos.html`: container para os projetos trazidos do GitHub e link para todos os repositórios.
- `contato.html`: informações de localização e email, além dos cartões para LinkedIn, GitHub e YouTube.

## Contato

- Email: `datavi@datavi.ia.br`
- LinkedIn: [Victor Silva Mendes](https://www.linkedin.com/in/victor-silva-mendes-3364b218b/)
- GitHub: [ssmvictor](https://github.com/ssmvictor/)
- YouTube: [DataviDevAI](https://www.youtube.com/@dataviAI)

© 2025 Victor Silva Mendes. Todos os direitos reservados.
