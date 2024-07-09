import { createApp, ref, computed } from 'vue';
import { createVuetify } from 'vuetify';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import HeaderComponent from '@xaxay/portal/ui/header';
import { router } from '@xaxay/portal/router'

const vuetify = createVuetify();
const pinia = createPinia();
pinia.use(createPersistedState());


  
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

