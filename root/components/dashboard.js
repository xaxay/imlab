// dashboard.js
import { ref } from 'vue';

export default {
  template: `
    <v-container fluid>
      <div class="app-grid">
        <v-card
          v-for="(app, index) in apps"
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
    for (let i = 1; i <= 18; i++) {
      apps.value.push({
        name: `App ${i}`,
        icon: 'mdi-application',
        route: `/app${i}`
      });
    }

    const openApp = (route) => {
      router.push(route);
    };

    return {
      apps,
      openApp
    };
  }
};
