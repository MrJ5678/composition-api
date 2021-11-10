<template>
  <div></div>
</template>

<script>
import { watch, reactive } from "vue"

export default {
  setup() {
    const state = reactive({
      id: 1,
      attributes: {
        name: "",
      },
    })

    // watch(
    //   () => state,
    //   (state, prevState) => {
    //     console.log(
    //       "not deep",
    //       state.attributes.name,
    //       prevState.attributes.name
    //     )
    //   }
    // )

    watch(
      () => state,
      (state, prevState) => {
        console.log("deep", state.attributes.name, prevState.attributes.name)
      },
      { deep: true }
    )

    state.attributes.name = "Alex" // 日志: "deep" "Alex" "Alex"
  },
}
</script>

<style scoped></style>
