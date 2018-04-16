import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Newemployee from '@/components/Newemployee'
import Viewemployee from '@/components/Viewemployee'
import Editemployee from '@/components/Editemployee'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'Newemployee',
      component: Newemployee
    },
    {
      path: '/edit/:employee_id',
      name: 'Editemployee',
      component: Editemployee
    },
    {
      path: '/:employee_id',
      name: 'Viewemployee',
      component: Viewemployee
    },

  ]
})
