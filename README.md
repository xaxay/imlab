# Distributed Single Page Application (SPA): A Proof of Concept

## Introduction

Welcome to our Proof of Concept (POC) for a Distributed Single Page Application (SPA). This project showcases a simplified method for building complex web applications by enabling separate teams to independently develop and manage UI components and libraries.

## Target Audience

Do you have a complex UI and want to streamline your development process, enhance collaboration, and improve the overall maintainability of your application? This Distributed SPA concept is designed for:

- **Development Teams:** Who need to work on separate components independently without waiting for other teams.
- **Project Managers:** Looking to reduce bottlenecks and accelerate the development process.
- **QA Engineers:** Who require seamless testing and debugging across different environments (development, staging, production).
- **DevOps Teams:** Seeking to simplify the deployment process with dedicated CI/CD pipelines for each component.
- **Technical Leads:** Aiming to maintain a scalable and modular architecture.

### What's the Big Idea?

This concept allows any component to have its own dedicated CI/CD pipeline, hosting, and repository, ensuring seamless integration and independent updates.
From other side all components used some shared frameworks and libraries to minimize overhead.
You can test and debug any local component with others from any environment (development, staging, production) without affecting other users.

### Key Features

#### Independent Development and Deployment
- **What it means:** Teams can work on their components separately, testing and deploying without waiting for others.
- **Why it's great:** This reduces bottlenecks and speeds up the development process.

#### Transparent Version Management
- **What it means:** You can update module URLs in the import map without changing the code, and the application will automatically use the new modules.
- **Why it's great:** It simplifies updating components and ensures the latest versions are always in use.

#### Environment-Agnostic Testing
- **What it means:** Test and debug any component version locally with components from any environment.
- **Why it's great:** It ensures everything works together perfectly, no matter where it's deployed.

#### Scalable and Maintainable Architecture
- **What it means:** Components are self-contained, making the codebase easier to manage and scale.
- **Why it's great:** It simplifies maintenance and allows the application to grow without major overhauls.

#### Dedicated Resources for Components
- **What it means:** Each component can have its own team, repository, CI/CD pipeline, and hosting.
- **Why it's great:** Enhances modularity and flexibility, allowing teams to work independently.

#### Dynamic Library and Framework Management
- **What it means:** Share common libraries and frameworks across all components, with the ability to change versions on the fly.
- **Why it's great:** Keeps everything up-to-date and compatible without manual code changes.

### How is This Different?

#### Simplicity Over Single-SPA
- **Why it's better:** Single-SPA often has a steep learning curve and extensive configuration. The concept focuses on simplicity and ease of integration while maintaining robust functionality.
  
#### Flexibility Over Module Federation
- **Why it's better:** Module Federation can become complex with multiple environments and versions. We use import maps for straightforward, environment-agnostic module management, making updates and testing smoother.

### Why Choose This concept?

This proof of concept leverages existing browser features like Import Maps to provide a practical, efficient solution for developing distributed SPAs.
It allows teams to work independently without disrupting each other, making it ideal for large-scale applications where rapid development and deployment are essential.

Explore this POC to see how it can streamline your development process, enhance collaboration, and improve the overall maintainability of your application.



## Stack of Used Technologies

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **Vue Router**: The official router for Vue.js, providing routing capabilities.
- **Pinia**: A state management library for Vue, designed as a simpler and more performant alternative to Vuex.
- **Vuetify 3**: A material design component framework for Vue.js.
- **Import Maps**: A new browser feature that allows control over the resolution of module specifiers in JavaScript, enabling better module management.

## How the Project Works

The project is structured to demonstrate a micro-frontend architecture using Vue 3 and related technologies.

**For simplicity**, this project does not use any build system.

Here's a brief overview of the key components:

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
   - it is easy to improve it and filter routes additionaly based on user permissions. 

## References

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vuetify 3](https://next.vuetifyjs.com/en/)
- [Import Maps](https://github.com/WICG/import-maps)
- [MDI Icons](https://materialdesignicons.com/)
- [Single-SPA](https://single-spa.js.org/)

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
