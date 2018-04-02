import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
import Hello3 from '@/components/Hello3'
import Main from '@/components/Main'
//import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello,

    },
    {
      path: '/Main',
      name: 'Hello',
      component: Main,
      children: [{
          path: 'h2',
          component: Hello2
        },
        {
          path: 'h3',
          component: Hello3
        }
      ]

    },

    {
      path: '/h2',
      name: 'Hello2',
      component: Hello2
    },

    {
      path: '/h3',
      name: 'Hello3',
      component: Hello2
    },
    {
      path: '/h3',
      name: 'Hello3',
      component: Hello2
    }
  ]
})
