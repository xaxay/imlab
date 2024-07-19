# [PHASE 1] Distributed Pure Single Page Application (SPA): Proof of Concept

## Introduction

A proof of concept for a Distributed SPA, enabling separate teams to develop and manage UI components independently.
- It is pure implementation - no any bundler.
- ImportMaps / HTML / JS / CSS / Vue3 / Vuetify3 / Pinia.

## Demo

[Click to see Demo](https://xaxay.github.io/poc-mfe-pure/)

It proves that it works and demonstrate how all these parts are initialized
and interacted together from different in-browser modules!

It is full-fledged development version that is bases on

Vite / ImportMaps / HTML / JS / CSS / Vue3 / Vuetify3 / Pinia / ESLint / PlayWrite.


## Installation

Install `serve` globally if not already installed: `npx i serve -g`

### Visual Studio Code Extension

It is recomned to install vscode extension `es6-string-html`

## Starting HTTP Server in SPA Mode

It starts http server in SPA mode.
`npx serve -s`

## Key Features

- **Independent Development and Deployment:** Teams work separately, speeding up development.
- **Transparent Version Management:** Update module URLs in import maps without code changes.
- **Environment-Agnostic Testing:** Test components locally with others from any environment.
- **Scalable and Maintainable Architecture:** Self-contained components make the codebase easier to manage.
- **Dedicated Resources for Components:** Each component can have its own team, repository, CI/CD pipeline, and hosting.
- **Dynamic Library and Framework Management:** Share common libraries and frameworks, updating versions on the fly.

## How the Project Works

- **Import Map:** Defines module paths in `index.html`.
- **Micro-Frontend Structure:** Header, Dashboard, Applications, Router, Routes and CounterStore are in-broswe modules shared using ImportsMap;
- **Router Configuration:** Dynamic routes based on content specifited in routes module.
- **Vue Application:** Sets up Vuetify, Pinia, and the router in `main.js`.
- **Pinia Store:** Persistent state management. Shared across header and application. Can be changed in one place and visible in other.

## References
- [Phase-1](https://github.com/xaxay/poc-mfe-pure) pure implementation without any bundler.
- [Phase 2](https://github.com/xaxay/poc-mfe-vite/) It is full-fledged development version.
- [Phase-3](https://github.com/xaxay/poc-mfe-vite-root) Using of multiple repositiories.

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vuetify 3](https://next.vuetifyjs.com/en/)
- [Import Maps](https://github.com/WICG/import-maps)
- [MDI Icons](https://materialdesignicons.com/)
- [Single-SPA](https://single-spa.js.org/)






