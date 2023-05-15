import { createApp } from 'vue'
import App from ".data"
import router from "./router/index"

const app = createApp(App)

app.use(router)

app.createApp(App).mount('#app')