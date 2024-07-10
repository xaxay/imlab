// stubApp.js
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '@xaxay/portal/stores/counter';

export default {
  template: /*template*/`
    <v-container fluid>
      <h1>{{ appName }}</h1>
      <p>Content for {{ appName }}</p>
      
      <v-badge :content="counter" color="red" overlap class="mt-4 mx-4" max="99">
        <v-btn icon @click="store.resetCounter" size="x-large">
          <v-icon size="x-large">mdi-bell-off</v-icon>
          0
        </v-btn>
      </v-badge>

      <v-badge :content="counter" color="red" overlap class="mt-4 mx-4" max="99">
        <v-btn icon @click="store.incrementCounter" size="x-large">
          <v-icon size="x-large">mdi-bell-plus</v-icon>
          +1
        </v-btn>
      </v-badge>

      <v-badge :content="counter" color="red" overlap class="mt-4 mx-4">
        <v-btn icon @click="store.multiplyCounter" size="x-large">
          <v-icon size="x-large">mdi-bell-remove</v-icon>
          x2
        </v-btn>
      </v-badge>

    </v-container>
  `,
  setup() {
    const router = useRouter();
    const store = useCounterStore();
    const route = computed(() => router.currentRoute.value);

    const appName = computed(() => {
      if (route.value && route.value.path) {
        const pathSegments = route.value.path.split('/');
        return pathSegments[pathSegments.length - 1] || 'home';
      }
      return 'home';
    });

    const counter = computed(() => store.counter);

    return {
      appName,
      counter,
      store
    };
  }
};
