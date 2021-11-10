<template>
  <div>
    <h1>{{ content }}</h1>
    <button @click="baseMethod">按钮</button>
  </div>
</template>

<script>
import BasePage from "./BasePage.vue"

export default {
  extends: BasePage,
  data() {
    return {
      content: "i am home content",
    }
  },
}
</script>

<style scoped></style>
