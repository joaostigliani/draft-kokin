# Kookin Air Fryer Cinematic Landing Page

Landing page cinematografica para a Air Fryer Kookin, com hero em video controlado por scroll, narrativa tecnica em 3D e arquitetura pronta para evoluir para um repositorio publico.

## Stack

- HTML5 sem framework
- CSS3 com design tokens e layout responsivo
- JavaScript vanilla
- GSAP `ScrollTrigger` para coreografia da rolagem
- Lenis para smooth scroll
- Node.js com servidor HTTP local e suporte a `Range Requests`
- Midias geradas e refinadas a partir de referencias reais do produto

## Estrutura

```text
Kokin-website/
├── docs/
│   ├── cinematic-design-brief.md
│   ├── code-documentation.md
│   ├── design-system.md
│   └── development-process.md
├── public/
│   ├── assets/
│   │   ├── css/main.css
│   │   ├── images/
│   │   │   ├── brand/
│   │   │   ├── hero/
│   │   │   └── product/
│   │   ├── js/app.js
│   │   └── video/
│   └── index.html
├── references/
│   ├── images/
│   └── videos/
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Como rodar

### Requisitos

- Node.js 18 ou superior

### Preview local

```bash
cd /Users/joaovictorstigliani/Documents/Projetos/Stigliani.Agent/outputs/Kokin-website
npm start
```

Abra `http://localhost:8042`.

## Scripts

- `npm start`: sobe o servidor local com suporte a scrub de video por scroll
- `npm run serve`: alias para preview local

## Organizacao de arquivos

- `public/`: tudo que vai para o navegador
- `docs/`: design system, racional criativo, documentacao tecnica e processo
- `references/`: insumos originais e arquivos de apoio que nao precisam ser servidos em producao

## Publicacao futura no GitHub

- O projeto ja esta pronto para versionamento como repositorio estatico
- O `README` descreve stack, estrutura e execucao
- A separacao entre `public`, `docs` e `references` evita misturar codigo com materia-prima
- O servidor local garante o comportamento correto de `video.currentTime` durante o scrub
