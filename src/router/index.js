import Vue from "vue";
import VueRouter from "vue-router";

// views
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";
import Experience from "../views/Experience.vue";
import Education from "../views/Education.vue";
import Portfolio from "../views/Portfolio.vue";
import Gallery from "../views/Gallery.vue";
//import Contact from "../views/Contact.vue";

import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: '../components/HelloWorld.vue',
                name: 'HelloWorld',
                component: HelloWorld
            },
        ]
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills
    },
    {
        path: "/experience",
        name: "Experience",
        component: Experience
    },
    {
        path: "/education",
        name: "Education",
        component: Education
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import(/* webpackChunkName: "contact" */'../views/Contact.vue')
    },
];

const router = new VueRouter({
    routes
});

export default router;
