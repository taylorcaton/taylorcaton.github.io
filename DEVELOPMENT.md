# Development

## Prerequisites

Node 22 LTS.

## Setup

```sh
npm ci
```

## Common commands

```sh
npm run dev         # dev server with hot reload
npm run build        # production build → dist/
npm run preview       # preview the production build locally
npm run test:unit      # run unit tests (Vitest)
npm run lint         # eslint --fix over src/
npm run format        # prettier --write over src/
```

## Recommended IDE setup

[VSCode](https://code.visualstudio.com/) +
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and
disable Vetur if installed).

## Notes

- `public/CNAME` binds the custom domain and must stay in `public/` — the
  deploy replaces the `gh-pages` branch wholesale, so anything GitHub Pages
  needs that Vite doesn't generate has to live there.
- Config files (`.eslintrc.cjs`, `lighthouserc.cjs`) use the `.cjs` extension
  because `package.json` sets `"type": "module"`.
