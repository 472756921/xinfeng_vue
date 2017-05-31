import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/public/login';
import TownHome from '@/components/town/townHome';
import CountyHome from '@/components/county/countyHome';
import User from '@/components/public/user';
import Users from '@/components/public/users';
import Doc from '@/components/public/doc';
import Questions from '@/components/town/questions';
import Question from '@/components/public/question';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/town',
      name: 'TownHome',
      component: TownHome,
      children: [
        {
          path: '/',
          component: Doc,
        },
        {
          path: '/town/users',
          component: Users,
        },
        {
          path: '/town/user/:id',
          component: User,
        },
        {
          path: '/town/questions',
          component: Questions,
        },
        {
          path: '/town/question/:id',
          component: Question,
        },
      ],
    },
    {
      path: '/county',
      name: 'CountyHome',
      component: CountyHome,

    },
  ],
});
