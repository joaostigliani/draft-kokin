# Kookin Air Fryer: design brief cinematografico

## Design read

Uma experiencia para consumidores brasileiros que querem praticidade sem abrir mao de qualidade percebida, com registro cinematografico preciso, residencial e acolhedor.

## Concept spine

O produto como palco transparente: a rolagem transforma a bancada em uma apresentacao tecnica continua, na qual forma, materiais, montagem e resultado aparecem em sequencia.

## Delivery tier

Spectacle: Lenis, GSAP ScrollTrigger, perspectiva 3D por CSS, mascaras, zoom e filme de produto controlado pela rolagem.

Animation mode: animated-website

## Palette

- Ink: `#0b0e0f`
- Ink soft: `#161b1d`
- Porcelain: `#f4f7f6`
- Smoke: `#899195`
- Kookin orange: `#f15a29`

O laranja e uma restricao explicita da marca Kookin e aparece somente como sinal de acao e engenharia. A base fria reforca vidro, metal, limpeza e precisao.

## Type

Manrope para display e texto. IBM Plex Mono para dados e rotulos tecnicos. Sem serifas para manter o produto contemporaneo e direto.

## Journey

1. Presenca: Air Fryer montada na bancada. Foco no desenho branco e no vidro. "Desenhada para ficar a vista."
2. Transparencia: aproximacao da cuba e dos ingredientes. Foco na leitura do preparo. "Transparencia que da controle."
3. Engenharia: vista organizada das quatro partes. Foco nos encaixes e na logica de uso. "Quatro partes. Uma logica simples."
4. Resultado: recipiente pronto para servir e limpar. Foco no alimento assado. "Da bancada para a mesa."

Camera architecture: A, voo continuo e realista com rotacao orbital lenta, aproximacao macro e abertura tecnica nao destrutiva.

Seam direction: movimento para frente com orbita suave; a vista tecnica continua a mesma velocidade e preserva o eixo vertical do produto.

Mobile framing: produto e componentes permanecem na area central; a fotografia usa `cover` somente onde nao remove controles, cuba ou alimentos.

Cost shape: um filme de 10 segundos fornecido pelo usuario, usado como hero e base para scrubbing bidirecional. A imagem gerada ocupa o primeiro capitulo da segunda secao.

Delivery budget: ate 32 MiB no filme desktop e 16 MiB em encode movel.

## Section plan

1. Hero full-bleed com headline sobre fotografia.
2. Jornada fixa em quatro capitulos com palco 3D.
3. Materiais em composicao editorial assimetrica.
4. Resultado em dipico de imagem e texto.
5. Rodape tecnico compacto.

## Asset plan

- Logo original Kookin.
- Quatro fotografias reais do produto.
- Frame-mae cinematografico gerado pelo ChatGPT a partir das quatro referencias reais.
- Filme de 10 segundos fornecido pelo usuario, 16:9, sem autoplay e controlado pelo scroll.
- Fallback de hero e capitulos usando as fotografias reais.

## CTA inventory

- Hero: link sublinhado com trilho de cor.
- Jornada: faixa horizontal com bordas e deslocamento lateral.
- Resultado: bloco solido laranja com deslocamento vertical.
- Navegacao: alvo com cantos tecnicos.
