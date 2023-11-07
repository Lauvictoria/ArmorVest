import { createRouter, createWebHistory } from 'vue-router' 


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard.vue'),
      },
      
    ],
  },
  {
    path: '/ventas',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Ventas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ventas.vue'),
      },
      
    ],
  },
  {
    path: '/clientes',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'clientes',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Clientes.vue'),
      },
      
    ],
  },
  {
    path: '/productos',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'productos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/productos.vue'),
      },
      
    ],
  },
  {
    path: '/ventas/Formulario',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Formulario',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Formulario.vue'),
      },
      
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


