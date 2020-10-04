import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import SobreMi from '@/views/SobreMi.vue'
import Contacto from '@/views/Contacto.vue'
import Articulo from '@/views/Articulo.vue'
import NotFound from '@/views/NotFound.vue'
import Administrador from '@/views/Administrador.vue'
import AdministradorSimple from '@/views/AdministradorSimple.vue'
import AdministradorAvanzado from '@/views/AdministradorAvanzado.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path:'/home',
        name:'Home',
        redirect:'/',
    },
    {
        path:'/inicio',
        name:'Inicio2',
        redirect:'/',
    },
    {
        path:'/portada',
        name:'Portada',
        redirect:'/',
    },
    {
        path:'/sobremi',
        name: 'SobreMi',
        component: SobreMi,
        alias:['/acerca'],
    },
    {
        path:'/contacto',
        name:'Contacto',
        component: Contacto,
        alias:['/contactame'],
    },
    {
        path:'/post/1',
        name:'Articulo',
        component: Articulo,
    },
    {
        path:'*',
        name:'NotFound',
        component: NotFound,
    },
    {
        path:'/administrador',
        name: 'Administrador',
        component: Administrador,
    },
    {
        path:'/administrador/simple',
        name:'AdministradorSimple',
        component: AdministradorSimple,
    },
    {
        path:'/administrador/avanzado',
        name:'AdministradorAvanzado',
        component: AdministradorAvanzado,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router