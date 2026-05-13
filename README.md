# HABIT

Site estático multi-página (HTML, CSS e JavaScript) para navegação por categorias, destaques, newsletter e área de administração de exemplo.

## Descrição

O **HABIT** apresenta uma home com hero, categorias populares, listagem de tags, posts em destaque com barra lateral, e páginas dedicadas para assinatura de newsletter, listagem por categoria, grelha de destaques e painel admin. O layout é **mobile-first**, com cabeçalho fixo, menu em overlay e formulário de busca acessível.

## Tecnologias

- HTML5 semântico (`header`, `main`, `nav`, `section`, `article`, `aside`, `footer`)
- CSS com **design tokens** em `:root` ([`css/style.css`](css/style.css))
- JavaScript vanilla para menu e interações ([`assets/script.js`](assets/script.js) e scripts por página)
- [Font Awesome](https://fontawesome.com/) (kit) e [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)

## Estrutura do repositório

```text
index.html          # Home
assinar.html        # Newsletter
categoria.html      # Posts por categoria
destaque.html       # Grelha de destaques
admin.html          # Painel admin (mock)
css/                # Estilos globais e por página
assets/             # Scripts JS
docs/
  screenshots/      # Capturas geradas pela auditoria (mobile / tablet / desktop)
  visual-baseline/  # Referência para comparação pixel a pixel (desktop)
  AUDIT-REPORT.md   # Relatório após `npm run audit`
```

## Breakpoints e responsividade

Os estilos base aplicam-se primeiro ao **mobile**. As media queries em [`css/style.css`](css/style.css) usam sobretudo **`min-width`**, por exemplo:

- `480px`, `768px`, `56.25rem` (~900px), `1200px`, `1440px`
- Ajustes extra em [`css/category.css`](css/category.css) e [`css/admin.css`](css/admin.css)

Viewports testados automaticamente na auditoria: **375**, **768** e **1440** px de largura (ver `scripts/run-audit.mjs`).

## Acessibilidade

- Um único `<main>` por página; regiões com `aria-label` / `aria-labelledby` onde faz sentido
- Formulários com `label` (visível ou `.sr-only`) associado a `id` nos campos
- Estados de menu com `aria-expanded` e `aria-controls`
- Foco visível com **`:focus-visible`** e anel consistente (variáveis `--focus-outline` em `style.css`)
- Imagens com `alt` descritivo; `alt=""` apenas quando decorativas

Recomenda-se validar com **axe** / **Lighthouse** após alterações (`npm run audit`).

## Decisões técnicas

- **Tokens CSS** (cores, espaçamento, tipografia, raios) centralizados em `:root` para consistência e auditoria de contraste mais simples
- **Font Awesome kit** externo para ícones; em produção real avaliar self-host ou SVG inline para CSP e performance
- **Placeholders** (`placehold.co`) para imagens de demonstração

## Licença

Uso interno / demonstração; ajustar conforme o teu projeto.
