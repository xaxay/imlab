// counterStore.js
import { defineStore } from 'pinia';

console.log('counterStore.js created');

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  actions: {
    incrementCounter() {
      this.counter += 1;
    },
    multiplyCounter(factor = 2) {
      this.counter *= factor;
    },
    resetCounter() {
      this.counter = 0;
    }
  },
  persist: true
});
