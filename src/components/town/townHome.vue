<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="townHome  col-sm-12 col-md-8 col-md-offset-2">
    <ul class="nav">
      <li class="col-sm-6 col-md-3 col-xs-6 text-center" v-bind:class="{ 'active' : active === 'file'}" @click='navChange("file")'>
        <i class="icon iconfont icon-activity"></i>
        <h3>健康档案</h3>
        <span>病人的健康档案</span>
      </li>
      <li class="col-sm-6 col-md-3 col-xs-6 text-center" v-bind:class="{ 'active' : active === 'questions'}" @click='navChange("questions")'>
        <i class="icon iconfont icon-feedback"></i>
        <h3>健康问题</h3>
        <span>病人的健康档案</span>
      </li>
      <li class="col-sm-6 col-md-3 col-xs-6 text-center" v-bind:class="{ 'active' : active === 'helps'}" @click='navChange("helps")'>
        <i class="icon iconfont icon-customerservice"></i>
        <h3>寻求支撑</h3>
        <span>病人的健康档案</span>
      </li>
      <li class="col-sm-6 col-md-3 col-xs-6 text-center" v-bind:class="{ 'active' : active === 'datas'}" @click='navChange("datas")'>
        <i class="icon iconfont icon-computer"></i>
        <h3>数据监控</h3>
        <span>病人的健康档案</span>
      </li>
    </ul>
    <h3>
      <span>{{ title }}</span>
      <Searcher />
    </h3>
    <span class="BreadCrumbs">
      <i @click="navListChange(0)">{{nav1}}</i><span v-if="nav2"> &gt;</span>
      <i @click="navListChange(1)">{{nav2}}</i><span v-if="nav3"> &gt;</span>
      <i>{{nav3}}</i>
    </span>
    <br/>
    <br/>
    <router-view @position="getRout"></router-view>
  </div>
</template>

<script>
  import Searcher from '../public/searcher';
  import TownUser from '../public/users';

  export default {
    name: 'townHome',
    components: { Searcher, TownUser },
    created() {
      const ro = this.$route.path;
      if (ro === '/town/users') {
        this.nav2 = '用户列表';
        this.nav1 = '村医列表';
      }
      if (ro.indexOf('/town/user/') !== -1) {
        this.nav2 = '用户列表';
        this.nav1 = '村医列表';
        this.nav3 = '详情';
      }
      if (ro.indexOf('question') !== -1) {
        this.active = 'questions';
        this.nav1 = '';
        this.nav2 = '';
        this.title = '健康问题';
      }
      if (ro.indexOf('help') !== -1) {
        this.active = 'helps';
        this.nav1 = '';
        this.nav2 = '';
        this.title = '寻求支持';
      }
      if (ro.indexOf('data') !== -1) {
        this.active = 'datas';
        this.nav1 = '';
        this.nav2 = '';
        this.title = '数据统计';
      }
    },
    data() {
      return {
        nav1: '村医列表',
        nav2: '',
        nav3: '',
        title: '健康档案',
        active: 'file',
      };
    },
    methods: {
      getRout(msg) {
        if (msg === 'doc') {
          this.nav2 = '用户列表';
        }
        if (msg === 'users') {
          this.nav2 = '用户列表';
          this.nav3 = '详情';
        }
        if (msg === 'questions') {
          this.clrea();
          this.nav1 = '';
        }
        if (msg === 'datas') {
          this.clrea();
          this.nav1 = '数据统计';
        }
      },
      navListChange(type) {
        if (type === 0) {
          this.$router.push('/town/');
          this.clrea();
        } else if (type === 1) {
          this.$router.push('/town/users');
          this.nav3 = '';
        }
      },
      navChange(position) {
        if (position === 'file') {
          this.$router.push('/town/');
          this.title = '健康档案';
          this.nav1 = '村医列表';
          this.active = 'file';
          this.clrea();
        } else if (position === 'questions') {
          this.$router.push('/town/questions');
          this.title = '健康问题';
          this.active = 'questions';
          this.clrea();
        } else if (position === 'helps') {
          this.$router.push('/town/helps');
          this.title = '寻求支持';
          this.nav1 = '';
          this.active = 'helps';
          this.clrea();
        } else if (position === 'datas') {
          this.$router.push('/town/datasTown/12');
          this.title = '数据统计';
          this.nav1 = '数据统计';
          this.active = 'datas';
          this.clrea();
        }
      },
      clrea() {
        this.nav2 = '';
        this.nav3 = '';
      },
    },
  };
</script>

<style scoped>
  .active{
    background-color: #eee;
  }
  .nav>li{
    float: left;
    padding: 20px 5px;
    color: #666;
    cursor: pointer;
  }
  .nav>li:hover{
    transition: background-color .3s;
    background-color: #eee;
  }
  .nav>li>h3{
    margin: 2px;
  }
  .nav>li>i{
    font-size: 50px;
    color: #cc0000;
  }
  .BreadCrumbs i:hover{
    color: #cc0000;
    cursor: pointer;
  }
</style>
