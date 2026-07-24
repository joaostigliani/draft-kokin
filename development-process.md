# Etapas de desenvolvimento

## 1. Analise inicial

- leitura do posicionamento atual da marca Kookin
- levantamento das caracteristicas-chave do produto
- identificacao do potencial visual da cuba de vidro como diferencial

## 2. Definicao do design system

- construcao de uma direcao visual premium, tecnica e acolhedora
- definicao de paleta, tipografia, tom de voz e principios de interface
- documentacao da linguagem visual em `design-system.md`

## 3. Direcao cinematografica

- definicao da experiencia como landing page de produto
- organizacao da jornada em hero, engenharia, materiais e resultado
- preparacao do brief cinematografico em `cinematic-design-brief.md`

## 4. Producao de midia

- uso de referencias reais do produto para manter consistencia
- refinamento do hero em video com formato 16:9
- geracao de imagem cinematografica para a segunda secao

## 5. Implementacao frontend

- composicao estatica em HTML
- sistema visual em CSS
- scroll coreografado com Lenis e GSAP ScrollTrigger
- sincronizacao do video da hero com a rolagem do usuario

## 6. Ajustes tecnicos

- reencode do video para scrub mais estavel
- criacao de servidor local com suporte a `Range Requests`
- validacao do comportamento de avancar e retroceder o filme pelo scroll

## 7. Preparacao de repositorio

- separacao entre codigo, documentacao e referencias
- normalizacao dos nomes de arquivos mais importantes
- criacao de `README`, `package.json` e `.gitignore`
- organizacao pronta para versionamento futuro no GitHub
