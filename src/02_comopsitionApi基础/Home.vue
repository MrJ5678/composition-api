<template>
  <div>
    Home
    <h2>{{ message }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
// import { reactive } from "vue"
import { ref } from "vue"

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    // const state = reactive({
    //   counter: 100,
    // })
    const counter = ref(100)

    const increment = () => {
      counter.value++
    }

    const decrement = () => {
      counter.value--
    }

    // console.log(props)
    // console.dir(`context: ${context.attrs.name}`)
    // console.log(context.slots)
    return {
      counter,
      increment,
      decrement,
    }
  },
}
</script>

<style scoped></style>
