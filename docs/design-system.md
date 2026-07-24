# Kookin Design System

## Diagnostico do site atual

O site atual da Kookin comunica a ideia certa, mas ainda nao sustenta uma percepcao premium de produto. A pagina inicial ja posiciona a marca como eletroportateis estilosos e confiaveis para familias brasileiras, com foco em praticidade e bons momentos na cozinha. Tambem destaca a Air Fryer e usa provas sociais sobre eficiencia, facilidade de uso e limpeza.

Os principais problemas percebidos:

- Inconsistencia de idioma: existem trechos em portugues, ingles, chines e textos placeholder.
- Acabamento editorial irregular: chamadas como "Discover" e "Customer Reviews" quebram a experiencia local.
- Catalogo pouco premium: filtros, estados de erro e produtos indisponiveis aparecem de forma fria, sem narrativa de beneficio.
- Baixa diferenciacao visual: a marca nao explora suficientemente tecnologia, vidro, inox, limpeza e alimento fresco.
- Oportunidade de produto: a air fryer com cuba de vidro pode virar o principal ativo visual, porque comunica transparencia, limpeza e controle.

## Plataforma de marca

**Essencia:** tecnologia simples para cozinhas mais leves.

**Promessa:** produtos praticos, bonitos e confiaveis que simplificam a rotina sem tirar o prazer de cozinhar.

**Territorio visual:** cozinha clara, superficies higienicas, vidro transparente, inox escovado, alimentos vivos e detalhes quentes de preparo.

**Tom de voz:** direto, acolhedor e confiante. Evitar linguagem tecnica excessiva; traduzir tecnologia em beneficio domestico.

Exemplos:

- "Mais controle, menos bagunca."
- "Cozinhe, acompanhe e limpe com facilidade."
- "Potencia para o dia a dia. Acabamento para ficar a mostra."
- "Design compacto para cozinhas reais."

## Principios de design

1. **Limpeza visivel:** fundos claros, bastante respiro e contraste preciso.
2. **Tecnologia silenciosa:** detalhes de interface, linhas finas e microinteracoes discretas.
3. **Alimento como cor:** vegetais, dourado de preparo e ervas entram como acentos, nao como fundo dominante.
4. **Produto em primeiro plano:** fotos grandes, recortes limpos e comparativos funcionais.
5. **Premium pratico:** materiais nobres sem distanciar a marca da rotina brasileira.

## Tokens de cor

| Token | Hex | Uso |
| --- | --- | --- |
| `--ink-900` | `#171513` | Texto principal, botoes escuros |
| `--ink-700` | `#37322d` | Titulos secundarios |
| `--stone-100` | `#f7f3ec` | Fundo quente limpo |
| `--stone-200` | `#eee7dc` | Faixas e bordas suaves |
| `--porcelain` | `#fffdf8` | Cards e superficies premium |
| `--steam` | `#eaf5f1` | Areas de tecnologia/frescor |
| `--sage` | `#78946f` | Selo de alimento, saude, frescor |
| `--copper` | `#eb5a2a` | CTA, marca, calor de preparo |
| `--glass` | `#b9d7dc` | Vidro, transparencia, detalhes tecnicos |
| `--steel` | `#9ca3a3` | Inox, specs, linhas de produto |

Regra de uso: a interface deve ser predominantemente clara. O laranja/cobre e o verde devem aparecer como acentos de decisao e informacao, nao como blocos dominantes.

## Tipografia

**Primaria:** Inter, system-ui, sans-serif.

**Display:** titulos com peso 700/800, letras sem tracking negativo e linhas compactas.

**Texto:** 16-18px em areas editoriais, 14-15px em cards e especificacoes.

Escala sugerida:

- Hero: 56px desktop / 38px mobile
- H2: 36px desktop / 28px mobile
- H3: 22px
- Body: 16px
- Caption/spec: 13px

## Grid e espacamento

- Container maximo: 1180px
- Gutter desktop: 32px
- Gutter mobile: 20px
- Secoes: 72-96px desktop, 48-64px mobile
- Cards: raio de 8px
- Botoes: raio de 999px para comandos principais, 8px para controles de produto

## Componentes

### Header

Header claro, fixo ao topo apenas quando necessario. Logo a esquerda, navegacao objetiva e CTA "Comprar agora" ou icone de carrinho. Evitar menus com labels mistos.

### Hero

Produto e cozinha real no primeiro viewport. H1 deve vender a categoria ou produto, nao uma frase generica.

Padrao recomendado:

- Eyebrow tecnico: "Air Fryer com cuba de vidro"
- H1: "Cozinha mais leve, crocante e facil de limpar."
- Subcopy: beneficio domestico claro
- CTAs: "Ver produtos" e "Conhecer tecnologia"
- Specs em chips: capacidade, potencia, timer, temperatura

### Cards de produto

Card claro, imagem grande, nome curto, beneficio em uma linha, preco e CTA. Estados de indisponibilidade devem ser tratados como "Avise-me" ou "Ver alternativas", nunca como erro visual.

### Blocos de beneficio

Usar icones simples e microcopy:

- Vidro que ajuda a acompanhar o preparo
- Menos oleo no dia a dia
- Pecas faceis de remover e lavar
- Design compacto para guardar melhor

### Faixa de tecnologia

Um bloco tecnico com contraste suave, usando `--steam` e linhas finas. Traduzir specs em experiencia: temperatura ajustavel, desligamento automatico, potencia, capacidade.

### Reviews

Reviews devem ser totalmente localizados em portugues, com nome, produto comprado e uma frase de prova concreta.

## Direcao fotografica

- Produto em cozinhas claras, madeira leve, pedra branca e alimento colorido.
- Mostrar transparencia da cuba de vidro sempre que possivel.
- Evitar fundos escuros, sombras pesadas e composicoes muito genericas.
- Usar close-ups de textura: dourado/crocancia, legumes, vapor leve, limpeza da cuba.
- Para ecommerce, combinar fundo branco premium com uma foto de uso real.

## Estrutura sugerida da nova homepage

1. Hero com air fryer, CTA e specs rapidas.
2. Beneficios essenciais: acompanha, cozinha, limpa, guarda.
3. Destaque de produto com detalhes materiais.
4. Colecoes: Air Fryers, Mixers, Preparacao, Casa pratica.
5. Secao "Tecnologia que aparece no resultado".
6. Reviews reais/localizados.
7. Footer com atendimento, garantia e canais.

## Checklist de qualidade

- Todo texto em portugues do Brasil.
- Nenhum placeholder ou idioma estrangeiro no front.
- Produto sempre visivel acima da dobra.
- CTAs consistentes: "Comprar agora", "Ver detalhes", "Avise-me".
- Estados de erro e indisponibilidade tratados com linguagem humana.
- Fotos otimizadas, sem cortes que escondam o produto.
- Contraste minimo WCAG AA em textos e botoes.

