# [POC] Alternative Life for MicroFrontEnd or Single-SPA

## Introduction

Developing a Single Page Application (SPA) with shared libraries, frameworks, components, and in-browser frontend micro-services.

This is an simplified alternative to **single-spa** (also known as **microfrontend** or **frontend-microservices**). 

This project aims to test new features without unnecessary complexity.

It leverages the new browser feature [Import Maps](https://html.spec.whatwg.org/multipage/webappapis.html#import-maps), allowing us to develop any component with a dedicated CI/CD pipeline (if required) and to simplify component development by different teams without affecting each other.

Without any code changes, it is possible to update any module URL in the import map, and the application will start using the new module. This simplifies new-version component debugging in any environment like development or staging. 

This example does not use any build systems like Vue CLI or Webpack to simplify the setup.

## Stack of Used Technologies

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **Vue Router**: The official router for Vue.js, providing routing capabilities.
- **Pinia**: A state management library for Vue, designed as a simpler and more performant alternative to Vuex.
- **Vuetify 3**: A material design component framework for Vue.js.
- **Import Maps**: A new browser feature that allows control over the resolution of module specifiers in JavaScript, enabling better module management.

## How the Project Works

The project is structured to demonstrate a micro-frontend architecture using Vue 3 and related technologies. Here's a brief overview of the key components:

1. **Import Map**: The `importmap` in the `index.html` file defines the module paths, allowing us to load external modules directly from URLs.
2. **Vue Application**: The main Vue application is created in `main.js`, where it sets up Vuetify, Pinia, and the router.
3. **Router Configuration**: The routes are dynamically configured based on the `routes.js` file, which maps paths to components.
4. **Pinia Store**: The state management is handled by Pinia, with a persistent state plugin to keep the state across sessions.
5. **Vuetify Components**: The UI components are built using Vuetify, providing a consistent material design look and feel.
6. **Micro-Frontend Structure**: The application is divided into smaller, self-contained components that can be developed and deployed independently.

## Key Features

1. **Shared Libraries and Frameworks Using Import Maps**:
   - Import maps allow sharing libraries like Vue, Vue Router, Pinia, and Vuetify across different micro-frontends without bundling them multiple times.
   
2. **Separate Micro-Frontend Components**:
   - Components such as the header, dashboard, and individual apps are developed as separate micro-frontends.
   - Apps are dynamically available on the dashboard based on the routes configuration.
   - Inaccessible apps are not available via their route paths.

3. **Dynamic Router**:
   - Routes are defined dynamically from a configuration file, allowing easy updates and extensions to the routing table.

4. **Shared Pinia Counter Store**:
   - A global counter state managed by Pinia is shared across all micro-frontends.
   - The counter can be incremented from any micro-frontend and the changes are visible across all.
   - The state persists across sessions, demonstrating Pinia's persistency capabilities.

5. **Dynamic Default Route Path**:
   - The default route is dynamically set based on the configuration.
   - Navigation between different micro-frontends adjusts the active default route accordingly.

## References

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vuetify 3](https://next.vuetifyjs.com/en/)
- [Import Maps](https://github.com/WICG/import-maps)
- [MDI Icons](https://materialdesignicons.com/)

## Installation

To install the necessary dependencies, you need to install the `serve` package globally if you haven't already:

```bash
npx i serve -g

```

# Starting HTTP Server in SPA Mode

Start the HTTP server in Single Application Mode (SPA):

```bash
npx serve -s
```

This command will start a local server serving your application as a single page application, handling routing on the client side.