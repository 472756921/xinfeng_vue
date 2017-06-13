import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/public/login';
import TownHome from '@/components/town/townHome';
import User from '@/components/public/user';
import Users from '@/components/public/users';
import Doc from '@/components/public/doc';
import Questions from '@/components/public/questions';
import Question from '@/components/public/question';
import Helps from '@/components/public/helps';
import Help from '@/components/public/help';
import DatasTown from '@/components/public/datas_town';
import DatasDoc from '@/components/public/datas_doc';
import DatasPecCun from '@/components/public/datas_pec_cun';
import DatasMeetingDa from '@/components/public/datas_meeting_da';
import DatasJiangZuoDa from '@/components/public/datas_jiangzuo_da';
import userPhysiologicalIndicators from '@/components/public/user_physiological_indicators';
import Admin from '@/components/admin/admin';
import AdminUser from '@/components/admin/user';
import AdminHelp from '@/components/admin/help';
import UserInfo from '@/components/public/userInfoOP';
import CountyHome from '@/components/county/countyHome';
import CountyAdminHome from '@/components/countyAdmin/countyAdminHome';
import YearC from '@/components/countyAdmin/year';
import TownList from '@/components/public/townList';

import HealthTable from '@/components/table/healthTable';
import NotFoundComponent from '@/components/notFoundComponent';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '*', component: NotFoundComponent },
    { path: '404', component: NotFoundComponent },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'user',
          component: AdminUser,
        },
        {
          path: 'help',
          component: AdminHelp,
        },
      ],
    },
    {
      path: '/town',
      name: 'TownHome',
      component: TownHome,
      children: [
        {
          path: '/town/file',
          component: Doc,
        },
        {
          path: 'healthTable',
          component: HealthTable,
        },
        {
          path: '/town/file/user',
          component: Users,
        },
        {
          path: '/town/file/user/:ID',
          component: User,
        },
        {
          path: '/town/file/user/:ID/PIinfo',
          component: userPhysiologicalIndicators,
        },
        {
          path: '/town/question',
          component: Questions,
        },
        {
          path: '/town/question/:ID',
          component: Question,
        },
        {
          path: '/town/help',
          component: Helps,
        },
        {
          path: '/town/Help/:ID',
          component: Help,
        },
        {
          path: '/town/data',
          component: DatasTown,
        },
        {
          path: '/town/data/doc/:docID',
          component: DatasDoc,
        },
        {
          path: '/town/data/pec/:docID',
          component: DatasPecCun,
        },
        {
          path: '/town/dataMeetingDa/:docID',
          component: DatasMeetingDa,
        },
        {
          path: '/town/jiangzuo/:docID',
          component: DatasJiangZuoDa,
        },
      ],
    },
    {
      path: '/county',
      name: 'county',
      component: CountyHome,
      children: [
        {
          path: '/county/file',
          component: TownList,
        },
        {
          path: '/county/file/town',
          component: Doc,
        },
        {
          path: '/county/file/file/user',
          component: Users,
        },
        {
          path: '/county/file/file/user/:ID',
          component: User,
        },
        {
          path: '/county/file/file/user/:ID/PIinfo',
          component: userPhysiologicalIndicators,
        },
        {
          path: '/county/question',
          component: Questions,
        },
        {
          path: '/county/question/:ID',
          component: Question,
        },
        {
          path: '/county/help',
          component: Helps,
        },
        {
          path: '/county/help/:id',
          component: Help,
        },
      ],
    },
    {
      path: '/countyAdmin',
      name: 'countyAdmin',
      component: CountyAdminHome,
      children: [
        {
          path: '/countyAdmin/file',
          component: TownList,
        },
        {
          path: '/countyAdmin/file/town',
          component: Doc,
        },
        {
          path: '/countyAdmin/file/file/user',
          component: Users,
        },
        {
          path: '/countyAdmin/file/file/user/:ID',
          component: User,
        },
        {
          path: '/countyAdmin/file/file/user/:ID/PIinfo',
          component: userPhysiologicalIndicators,
        },
        {
          path: '/countyAdmin/question',
          component: Questions,
        },
        {
          path: '/countyAdmin/question/:ID',
          component: Question,
        },
        {
          path: '/countyAdmin/help',
          component: Helps,
        },
        {
          path: '/countyAdmin/help/:id',
          component: Help,
        },
        {
          path: '/countyAdmin/yearRe',
          component: YearC,
        },
        {
          path: 'yearRe/:id',
          component: DatasTown,
        },
        {
          path: 'yearRe/data/doc/:ids',
          component: DatasDoc,
        },
        {
          path: 'yearRe/data/pec/:ids',
          component: DatasPecCun,
        },
        {
          path: 'yearRe/dataMeetingDa/:ids',
          component: DatasMeetingDa,
        },
        {
          path: 'yearRe/jiangzuo/:docID',
          component: DatasJiangZuoDa,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const status = 'town';
  const pathG = to.matched[0].path;
  if (to.fullPath.indexOf('404') !== -1) {
    next();
  } else if (to.fullPath.indexOf('getIndex') !== -1) {
    if (status === 'town') {
      router.push('/town/file');
    }
  } else if (to.fullPath === '/') {
    next();
  } else if (status === 'town') {
    if (pathG.indexOf(status) !== -1) {
      next();
    } else {
      router.push('/404');
    }
  } else if (status === 'county') {
    if (pathG.indexOf(status) !== -1) {
      next();
    } else {
      router.push('/404');
    }
  } else if (status === 'countyAdmin') {
    if (pathG.indexOf(status) !== -1) {
      next();
    } else {
      router.push('/404');
    }
  } else if (pathG.indexOf('admin') !== -1) {
    next();
  } else {
    router.push('/');
  }
});

export default router;
