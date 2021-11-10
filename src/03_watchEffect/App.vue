<template>
  <div>
    <button @click="changeFirst">change firstName</button>
    <button @click="changeLast">change lastName</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue"

export default {
  setup() {
    let firstName = ref("jiang")
    let lastName = ref("longdong")

    const changeFirst = () => {
      firstName.value = "LILI"
      firstName.value = "LIL"
      firstName.value = "LI"
      firstName.value = "L"
    }

    const changeLast = () => {
      lastName.value = "xixi"
      lastName.value = "xix"
      lastName.value = "xi"
      lastName.value = "x"
    }

    watchEffect(
      () => {
        console.log(`${firstName.value} ${lastName.value}`)
      },
      {
        flush: "sync",
      }
    )

    return {
      changeLast,
      changeFirst,
    }
  },
}
</script>

<style scoped></style>
