import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/estanque',
    name: 'estanque',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/RegistroUsuarios',
    name: 'RegistroUsuarios',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/AGREGAR ESTANQUE',
    name: 'AGREGARESTANQUE',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination1.vue')
  },
  {
    path: '/ESTANQUES',
    name: 'ESTANQUES',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination3.vue')
  },
  {
    path: '/CALIDAD AGUA',
    name: 'CALIDADAGUA',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination3.vue')
  },
  {
    path: '/DIETA',
    name: 'DIETA',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination4.vue')
  },
  {
    path: '/FICHA TECNICA',
    name: 'FICHATECNICA',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination5.vue')
  },
  {
    path: '/CRECIMIENTO',
    name: 'CRECIMIENTO',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination6.vue')
  },
  {
    path: '/COSECHA',
    name: 'COSECHA',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination7.vue')
  },
  {
    path: '/TRASLADO',
    name: 'TRASLADO',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination8.vue')
  },
  {
    path: '/ADICION',
    name: 'ADICION',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/Destination9.vue')
  },
  {
    path: '/AlimentacionDiaria',
    name: 'AlimentacionDiaria',
    component: () => import(/* webpackChunkName: "Destination1" */ '../views/ESTANQUES/PARAMETROS/AlimentacionDiaria.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
