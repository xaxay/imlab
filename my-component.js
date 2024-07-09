// my-component.js
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    }
  },
  template: /*html*/`
    <div id="app">
        <button @click="increment">Count is: {{ count }}</button>
    </div>`
}