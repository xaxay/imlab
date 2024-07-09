import { createApp, ref, computed } from 'vue';
import { createVuetify } from 'vuetify';
import { createRouter, createWebHistory, useRoute } from 'vue-router';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

import Dashboard from '@xaxay/portal/ui/dashboard';
import HeaderComponent from '@xaxay/portal/ui/header';
import { useCounterStore } from '@xaxay/portal/stores/counter';
import routesConfig from '@xaxay/portal/config/routes';

const routeEntries = Object.entries(routesConfig);

// Define routes
const routes = [
  ...routeEntries.map(([path, data]) => ({
    path,
    component: () => import(data.module),
    meta: { title: data.title }
  }))
];

const defaultRouteEntry = routeEntries.find(([_routePath, routeData]) => routeData.default);

if (defaultRouteEntry) {
  const [defaultRoutePath] = defaultRouteEntry;
  routes.unshift({ path: '/', redirect: defaultRoutePath });
}

console.log('dynamic routes:', routes)



const vuetify = createVuetify();
const pinia = createPinia();
pinia.use(createPersistedState());

const title = ref('Dashboard');

const createAppComponent = (appId) => {
  return {
    template: `
      <v-container fluid>
        <h1>{{ appName }}</h1>
        <p>Content for {{ appName }}</p>
        <v-badge :content="counter" color="red" overlap>
          <v-btn icon @click="incrementCounter">
            <v-icon>mdi-counter</v-icon>
          </v-btn>
        </v-badge>
      </v-container>
    `,
    setup() {
      const store = useCounterStore();
      const appName = ref(`App ${appId}`);
      const counter = computed(() => store.counter);

      return {
        appName,
        counter,
        incrementCounter: store.incrementCounter
      };
    }
  };
};

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

router.beforeEach((to, from, next) => {
  title.value = to.meta.title;
  next();
});

  
const TEMPLATE = /*template*/`
    <v-app>
      <header-component/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  `;


const appTemplate = {
  template: TEMPLATE,
  components: {
    HeaderComponent
  },
  setup() {
    return {
    };
  }
};

createApp(appTemplate)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app');

