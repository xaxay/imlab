# Distributed Pure Single Page Application (SPA): Proof of Concept

## Introduction

A proof of concept for a Distributed SPA, enabling separate teams to develop and manage UI components independently.

## Phase 1

[Click to see Demo](https://xaxay.github.io/poc-mfe-pure/)

It is pure implementation - no any bundler IMPORT-MAPS / HTML / JS / CSS / VUE3 / VUETIFY3 / PINIA.

It is important how it is implemented, not what. It proves that import maps (in-browser modules) is working approach!
And interaction of shared code among in-browser modules like Pinia counterStore. It shows how to cinitalize and use vue2/vuetify3 and pinia using import maps!

## Phase2

[Click to open Phase 2](https://xaxay.github.io/poc-mfe-vite/)

It is full-fledged development version - VITE / VITE-PLUGINS / IMPORT-MAPS / HTML / JS / CSS / VUE3 / VUETIFY3 / PINIA / ESLINT / PLAYWRITE.


## Installation

Install `serve` globally if not already installed: npx i serve -g

### Visual Studio Code Extension

- es6-string-html

## Starting HTTP Server in SPA Mode

npx serve -s

## Target Audience

Designed for teams seeking to streamline development, improve collaboration, and enhance maintainability.

- **Development Teams:** Work on components independently.
- **Project Managers:** Reduce bottlenecks.
- **QA Engineers:** Seamless testing and debugging.
- **DevOps Teams:** Simplify deployment.
- **Technical Leads:** Maintain a scalable architecture.

## Key Features

- **Independent Development and Deployment:** Teams work separately, speeding up development.
- **Transparent Version Management:** Update module URLs in import maps without code changes.
- **Environment-Agnostic Testing:** Test components locally with others from any environment.
- **Scalable and Maintainable Architecture:** Self-contained components make the codebase easier to manage.
- **Dedicated Resources for Components:** Each component can have its own team, repository, CI/CD pipeline, and hosting.
- **Dynamic Library and Framework Management:** Share common libraries and frameworks, updating versions on the fly.

## Stack of Used Technologies

- **Vue 3**
- **Vue Router**
- **Pinia**
- **Vuetify 3**
- **Import Maps**

## How the Project Works

- **Import Map:** Defines module paths in `index.html`.
- **Vue Application:** Sets up Vuetify, Pinia, and the router in `main.js`.
- **Router Configuration:** Dynamic routes in `routes.js`.
- **Pinia Store:** Persistent state management.
- **Vuetify Components:** Consistent material design UI.
- **Micro-Frontend Structure:** Independent components developed and deployed separately.

## References

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vuetify 3](https://next.vuetifyjs.com/en/)
- [Import Maps](https://github.com/WICG/import-maps)
- [MDI Icons](https://materialdesignicons.com/)
- [Single-SPA](https://single-spa.js.org/)
