// dashboard.js
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import routesConfig from '@xaxay/portal/config/routes';

export default {
  template: /*template*/`
    <v-container fluid>
      <v-text-field
        v-model="searchQuery"
        label="Search Apps"
        flat
        clearable
        prepend-inner-icon="mdi-magnify"
        class="mb-1"
      ></v-text-field>
      <div class="app-grid">
        <v-card
          v-for="(app, index) in filteredApps"
          :key="index"
          @click="openApp(app.route)"
          class="app-card"
        >
          <v-card-text class="text-center">
            <v-icon class="app-icon" size="5rem">{{ app.icon }}</v-icon>
            <div class="app-name">{{ app.name }}</div>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  `,
  setup() {
    const apps = ref([]);
    const searchQuery = ref('');
    const router = useRouter();

    const routeEntries = Object.entries(routesConfig);

    // Define routes
    routeEntries
      .filter(([path, data]) => data.dashboard !== false)
      .forEach(([path, data]) => {
        apps.value.push({
          name: data.title,
          icon: 'mdi-application',
          route: path
        });
      });

    const openApp = (route) => {
      router.push(route);
    };

    const filteredApps = computed(() => {
      const search = searchQuery.value.toLowerCase();
      return apps.value.filter(app => !searchQuery.value || app.name.toLowerCase().includes(search));
    });

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
      apps,
      searchQuery,
      filteredApps,
      openApp
    };
  }
};

const STYLES = /*css*/`
.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
  justify-items: center;
}

.app-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  cursor: pointer;
}

.app-icon {
  font-size: 64px;
  margin-bottom: 10px;
}

.app-name {
  font-size: 1.2rem;
}
`;
