<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <header class='head col-md-8 col-md-offset-2 col-sm-12 hidden-print'>
    <img src="../../assets/public/icon/logo.png" @click="index" class="pointer"/>
    <div class="pull-right user" @click="back" v-if="position!='/'">退出</div>
    <div class="pull-right user" v-if="position!='/'" @click="user">{{name}}</div>
  </header>
</template>

<script type="text/ecmascript-6">
  import bus from '../eventBus';

  export default {
    name: 'Headxf',
    data() {
      return {
        position: '',
        name: '',
      };
    },
    created() {
      this.position = this.$route.path;
      if (sessionStorage.getItem('user') !== null) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        this.name = user.username;
      }
      bus.$on('sendMessages', (id) => {
        if (sessionStorage.getItem('user') !== null) {
          const user = JSON.parse(sessionStorage.getItem('user'));
          this.name = user.username;
        }
        this.position = id;
      });
    },
    methods: {
      user() {
        this.$router.push('/userInfo');
      },
      index() {
        this.$router.push('/getIndex');
      },
      back() {
        sessionStorage.clear();
        localStorage.clear();
        this.position = '/';
        this.$router.push('/');
      },
    },
  };
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
  .head{
    padding: 20px 20px;
    overflow: auto;
  }
  .user{
    margin-left: 10px;
  }
  .user:hover{
    cursor: pointer;
    color: #cc0000;
    overflow: auto;
  }
</style>
