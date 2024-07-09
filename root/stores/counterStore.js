// counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  actions: {
    incrementCounter() {
      this.counter += 1;
    }
  },
  persist: true
});
