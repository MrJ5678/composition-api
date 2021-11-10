export const demoMixin = {
  data() {
    return {
      message: 'hello mixin'
    }
  },
  mounted() {
    console.log('mounted called');
  },
  methods: {
    foo() {
      console.log('foo methods');
    }
  }
}