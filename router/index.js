import { createRouter, createWebHistory } from "vue-router"
import QuizzesView from "../views/QuizzesView.vue"

const router = createrRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizzes',
            component: QuizzesView
        }
    ]
})

export default router