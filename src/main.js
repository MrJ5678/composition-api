import { createApp } from 'vue'
import App from './04_watch/App.vue'

const app = createApp(App)

// app.mixin({
//   created() {
//     console.log('created called');
//   }
// })

app.mount('#app')