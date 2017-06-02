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
import Helps from '@/components/town/helps';
import Help from '@/components/public/help';
import DatasTown from '@/components/public/datas_town';
import DatasDoc from '@/components/public/datas_doc';
import DatasBaseCun from '@/components/public/datas_base_cun';
import DatasMeetingDa from '@/components/public/datas_meeting_da';

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
          path: '/town/user/:ID',
          component: User,
        },
        {
          path: '/town/questions',
          component: Questions,
        },
        {
          path: '/town/question/:ID',
          component: Question,
        },
        {
          path: '/town/helps',
          component: Helps,
        },
        {
          path: '/town/Help/:ID',
          component: Help,
        },
        {
          path: '/town/datasTown/:townID',
          component: DatasTown,
        },
        {
          path: '/town/datasDoc/:docID',
          component: DatasDoc,
        },
        {
          path: '/town/data_base_cun/:docID',
          component: DatasBaseCun,
        },
        {
          path: '/town/dataMeetingDa/:docID',
          component: DatasMeetingDa,
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
