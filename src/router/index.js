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
import AdminUnitl from '@/components/admin/unitl';
import DocMannger from '@/components/admin/docMannger';
import UserInfo from '@/components/public/userInfoOP';
import CountyHome from '@/components/county/countyHome';
import CountyAdminHome from '@/components/countyAdmin/countyAdminHome';
import YearC from '@/components/countyAdmin/year';
import TownList from '@/components/public/townList';

import HealthCheckup from '@/components/table/healthCheckup';
import HealthCard from '@/components/table/healthCard';
import ImmuneProcedures from '@/components/table/immuneProcedures';
import HealthEducationActivities from '@/components/table/healthEducationActivities';
import NewbornFamilyVisitRecords from '@/components/table/newbornFamilyVisitRecords';
import MonthsOldChildrenHealthCheckRecordsOE from '@/components/table/monthsOldChildrenHealthCheckRecordsOE';
import MonthsOldChildrenHealthCheckRecordsTS from '@/components/table/monthsOldChildrenHealthCheckRecordsTS';
import MonthsOldChildrenHealthCheckRecordsTOSO from '@/components/table/monthsOldChildrenHealthCheckRecordsTOSO';
import Boy from '@/components/table/boy';
import Grli from '@/components/table/grli';
import FirstPrenatalInspectionServiceRecord from '@/components/table/firstPrenatalInspectionServiceRecord';
import PrenatalFollowUpServiceRecordTF from '@/components/table/prenatalFollowUpServiceRecordTF';
import PostpartumVisitRecordForm from '@/components/table/postpartumVisitRecordForm';
import PostpartumDaysHealthChecklistFT from '@/components/table/PostpartumDaysHealthChecklistFT';
import EvaluationOfSelfCareAbilityOfTheElderly from '@/components/table/evaluationOfSelfCareAbilityOfTheElderly';
import FollowUpServiceRecordsForPatientsWithHypertension from '@/components/table/followUpServiceRecordsForPatientsWithHypertension';
import FollowUpServiceRecordsForPatientsWithType2DiabetesMellitus from '@/components/table/followUpServiceRecordsForPatientsWithType2DiabetesMellitus';
import SupplementaryInformationOnMentalDisorders from '@/components/table/supplementaryInformationOnMentalDisorders';

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
        {
          path: 'unitl',
          component: AdminUnitl,
        },
        {
          path: 'docMannger',
          component: DocMannger,
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
          path: '/town/userList/:ID',
          component: Users,
        },
        {
          path: '/town/userList/user/:ID',
          component: User,
        },
        {
          path: '/town/userList/user/:ID/PIinfo',
          component: userPhysiologicalIndicators,
        },
        {
          path: '/town/userList/user/:ID/healthCheckup',
          component: HealthCheckup,
        },
        {
          path: '/town/userList/user/:ID/healthCheckup',
          component: HealthCheckup,
        },
        {
          path: '/town/userList/user/:ID/healthCard',
          component: HealthCard,
        },
        {
          path: '/town/userList/user/:ID/immuneProcedures',
          component: ImmuneProcedures,
        },
        {
          path: '/town/userList/user/:ID/healthEducationActivities',
          component: HealthEducationActivities,
        },
        {
          path: '/town/userList/user/:ID/newbornFamilyVisitRecords',
          component: NewbornFamilyVisitRecords,
        },
        {
          path: '/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsOE',
          component: MonthsOldChildrenHealthCheckRecordsOE,
        },
        {
          path: '/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsTS',
          component: MonthsOldChildrenHealthCheckRecordsTS,
        },
        {
          path: '/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsTOSO',
          component: MonthsOldChildrenHealthCheckRecordsTOSO,
        },
        {
          path: '/town/userList/user/:ID/boy',
          component: Boy,
        },
        {
          path: '/town/userList/user/:ID/grli',
          component: Grli,
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
          path: '/county/file/town/:ID',
          component: Doc,
        },
        {
          path: '/county/file/town/userList/:ID',
          component: Users,
        },
        {
          path: '/county/file/town/userList/user/:ID',
          component: User,
        },
        {
          path: '/county/file/town/userList/user/:ID/PIinfo',
          component: userPhysiologicalIndicators,
        },
        {
          path: '/county/file/town/userList/user/:ID/healthCheckup',
          component: HealthCheckup,
        },
        {
          path: '/county/file/town/userList/user/:ID/healthCheckup',
          component: HealthCheckup,
        },
        {
          path: '/county/file/town/userList/user/:ID/healthCard',
          component: HealthCard,
        },
        {
          path: '/county/file/town/userList/user/:ID/immuneProcedures',
          component: ImmuneProcedures,
        },
        {
          path: '/county/file/town/userList/user/:ID/healthEducationActivities',
          component: HealthEducationActivities,
        },
        {
          path: '/county/file/town/userList/user/:ID/newbornFamilyVisitRecords',
          component: NewbornFamilyVisitRecords,
        },
        {
          path: '/county/file/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsOE',
          component: MonthsOldChildrenHealthCheckRecordsOE,
        },
        {
          path: '/county/file/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsTS',
          component: MonthsOldChildrenHealthCheckRecordsTS,
        },
        {
          path: '/county/file/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsTOSO',
          component: MonthsOldChildrenHealthCheckRecordsTOSO,
        },
        {
          path: '/county/file/town/userList/user/:ID/boy',
          component: Boy,
        },
        {
          path: '/county/file/town/userList/user/:ID/grli',
          component: Grli,
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
          path: '/countyAdmin/file/town/:ID',
          component: Doc,
        },
        {
          path: '/countyAdmin/file/town/userList/:ID',
          component: Users,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID',
          component: User,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/healthCheckup',
          component: HealthCheckup,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/healthCard',
          component: HealthCard,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/immuneProcedures',
          component: ImmuneProcedures,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/healthEducationActivities',
          component: HealthEducationActivities,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/newbornFamilyVisitRecords',
          component: NewbornFamilyVisitRecords,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsOE',
          component: MonthsOldChildrenHealthCheckRecordsOE,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsTS',
          component: MonthsOldChildrenHealthCheckRecordsTS,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/monthsOldChildrenHealthCheckRecordsTOSO',
          component: MonthsOldChildrenHealthCheckRecordsTOSO,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/boy',
          component: Boy,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/grli',
          component: Grli,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/firstPrenatalInspectionServiceRecord',
          component: FirstPrenatalInspectionServiceRecord,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/prenatalFollowUpServiceRecordTF',
          component: PrenatalFollowUpServiceRecordTF,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/postpartumVisitRecordForm',
          component: PostpartumVisitRecordForm,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/PostpartumDaysHealthChecklistFT',
          component: PostpartumDaysHealthChecklistFT,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/evaluationOfSelfCareAbilityOfTheElderly',
          component: EvaluationOfSelfCareAbilityOfTheElderly,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/followUpServiceRecordsForPatientsWithHypertension',
          component: FollowUpServiceRecordsForPatientsWithHypertension,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/followUpServiceRecordsForPatientsWithType2DiabetesMellitus',
          component: FollowUpServiceRecordsForPatientsWithType2DiabetesMellitus,
        },
        {
          path: '/countyAdmin/file/town/userList/user/:ID/supplementaryInformationOnMentalDisorders',
          component: SupplementaryInformationOnMentalDisorders,
        },
        {
          path: '/countyAdmin/file/town/userList/user/12/PIinfo',
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
  console.log(to);
  const session = JSON.parse(sessionStorage.getItem('user'));
  let status;
  if (session !== null) {
    status = session.adminType;
  }
  const pathG = to.matched[0].path;
  if (to.fullPath.indexOf('404') !== -1) {
    next();
  } else if (to.fullPath.indexOf('getIndex') !== -1) {
    if (status === 4) {
      router.push('/town/file');
    }
  } else if (to.fullPath === '/' || to.fullPath === '/userInfo') {
    next();
  } else if (status === 4) {
    if (pathG.indexOf('town') !== -1) {
      next();
    } else {
      router.push('/404');
    }
  } else if (status === 3) {
    if (pathG.indexOf('county') !== -1) {
      next();
    } else {
      router.push('/404');
    }
  } else if (status === 2) {
    if (pathG.indexOf('countyAdmin') !== -1) {
      next();
    } else {
      router.push('/404');
    }
  } else if (pathG.indexOf('admin') !== -1 && status === 1) {
    next();
  } else {
    router.push('/');
  }
});

export default router;
