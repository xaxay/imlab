// header.js
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useCounterStore } from '@xaxay/portal/stores/counter';
import routesConfig from '@xaxay/portal/config/routes';

export default {
  template: /*template*/`
    <v-app-bar app>
      <v-img src="logo.svg" alt="Logo" class="logo" max-width="5rem"></v-img>
      <v-toolbar-title>
        <span class="title">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="!isDashboardPage">
        <v-btn icon @click="goToDashboard">
          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
      </template>
      <v-btn icon @click="store.resetCounter">
        <v-badge :content="counter" color="red" offset-x="-5">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-avatar class="mx-4">
        <v-icon>{{ userIcon }}</v-icon>
      </v-avatar>
    </v-app-bar>
  `,
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useCounterStore();

    const userIcon = ref('mdi-account');

    const isDashboardPage = computed(() => route.path === '/dashboard');

    const title = computed(() => routesConfig[route.path]?.title || '');

    const counter = computed(() => store.counter);

    const goToDashboard = () => {
      router.push('/dashboard');
    };

    let styleElement;

    onMounted(() => {
      styleElement = document.createElement('style');
      styleElement.textContent = STYLES;
      document.head.appendChild(styleElement);
    });

    // TODO : onUnmounted is unknown 
    // onUnmounted(() => {
    //   if (styleElement) {
    //     document.head.removeChild(styleElement);
    //   }
    // });

    return {
      title,
      userIcon,
      counter,
      isDashboardPage,
      goToDashboard,
      store
    };
  }
};

const STYLES = /*css*/`
.logo {
}

.title {
  font-size: 1.5rem;
  margin-left: 1rem;
}
`;
