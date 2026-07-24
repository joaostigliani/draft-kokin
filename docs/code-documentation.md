# Documentacao do codigo

## Visao geral

O projeto e uma landing page estatica com alto foco visual. A experiencia usa HTML para a estrutura editorial, CSS para o sistema visual e JavaScript para sincronizar scroll, video e transicoes 3D.

## Arquitetura

### `public/index.html`

Arquivo principal da interface. Organiza a pagina em cinco blocos:

1. `site-header`: navegacao fixa e CTA principal
2. `hero`: video cinematografico com scrub controlado pela rolagem
3. `product-journey`: palco fixo com narrativa tecnica em quatro capitulos
4. `material-story`: secao editorial de materiais e construcao
5. `result-story`: secao final orientada a resultado e conversao

### `public/assets/css/main.css`

Contem:

- tokens de cor, espacamento e raio
- estilos globais
- layout responsivo das secoes
- composicoes visuais do hero, palco tecnico e secoes editoriais
- regras de reduced motion

### `public/assets/js/app.js`

Responsabilidades:

- carregar o video da hero apenas quando necessario
- iniciar o Lenis para smooth scroll
- registrar o GSAP `ScrollTrigger`
- sincronizar o `currentTime` do video com a rolagem
- atualizar indicadores visuais do hero
- animar a secao tecnica com zoom, mascara e transicao 3D
- aplicar parallax nas secoes de materiais e resultado

### `server.js`

Servidor HTTP local sem dependencias externas.

Motivo de existir:

- servidores estaticos simples nem sempre suportam `Range Requests`
- o scrub do video depende de seek confiavel via `currentTime`
- este servidor responde com `206 Partial Content` quando o navegador pede trechos do mp4

## Convencoes

- `public/assets/images/brand`: ativos de marca
- `public/assets/images/hero`: poster e imagens ligadas ao primeiro viewport
- `public/assets/images/product`: imagens usadas nas secoes narrativas
- `public/assets/video`: midias finais de producao
- `references/`: arquivos brutos, backups e insumos historicos

## Dependencias de runtime

As bibliotecas visuais sao consumidas por CDN no HTML:

- Lenis
- GSAP
- GSAP ScrollTrigger

Isso reduz setup local e mantem o projeto simples para publicacao estatica.
