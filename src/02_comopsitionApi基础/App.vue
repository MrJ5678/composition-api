<template>
  <div>
    <home message="hi" name="jld"/>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import Home from "./Home.vue"

export default {
  components: {
    Home,
  },

}
</script>

<style scoped></style>
