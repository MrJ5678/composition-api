<template>
  <div>
    <!-- <h2>{{ message }}</h2>
    <button @click="foo">按钮</button> -->
    <home />
  </div>
</template>

<script>
// import { demoMixin } from "./mixins/demoMixin"
import Home from './pages/Home.vue'

export default {
  // mixins: [demoMixin],
  components: {
    Home,
  },
}
</script>

<style scoped></style>
