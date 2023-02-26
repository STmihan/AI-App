import MainPage from "../modules/main/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import CatsAndDogsPage from "../modules/cats-and-dogs/pages/CatAndDogsPage.vue";

export const links = [
    {
        text: "Cat or Dog?",
        description: "Find out if your pet is a cat or a dog",
        path: "/cats-and-dogs",
        disable: false,
        component: CatsAndDogsPage,
    },
];

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    ...links
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(import.meta.env.BASE_URL),
    }
)

export default router