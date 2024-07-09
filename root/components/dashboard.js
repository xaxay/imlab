// dashboard.js
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  template: /*template*/`
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
    const router = useRouter();

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


