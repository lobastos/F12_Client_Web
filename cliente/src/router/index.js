import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/page.home.vue'
import About from '@/pages/about/index.vue'
import Funcionarios from '@/pages/funcionarios/funcionario.grid.vue'
import FuncionariosForm from '@/pages/funcionarios/funcionario.form.vue'
import NotFound from '@/pages/not-found/index.vue'

Vue.use(Router)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/home', redirect: "/" },
    { path: '/about', name: 'about', component: About },
    {path: '*', component: NotFound },

    { path: '/funcionarios', name: 'funcionarios', component: Funcionarios },
    { path: '/funcionarios/cadastro', name: 'funcionariocadastro', component: FuncionariosForm },
]

const router = new Router({ mode: 'history', routes })
export default router




// https://medium.com/better-programming/vuejs-routing-with-vue-router-1548f94c0575