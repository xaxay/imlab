// stubApp.js
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '@xaxay/portal/stores/counter';

export default {
  template: /*template*/`
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
      incrementCounter: store.incrementCounter
    };
  }
};
