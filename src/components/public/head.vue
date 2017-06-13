<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <header class='head col-md-8 col-md-offset-2 col-sm-12'>
    <img src="../../assets/public/icon/logo.png" @click="index" class="pointer"/>
    <div class="pull-right user">退出</div>
    <div class="pull-right user" @click="user">TEST</div>
  </header>
</template>

<script>
  export default {
    name: 'Headxf',
    methods: {
      user() {
        this.$router.push('/userInfo');
      },
      index() {
        this.$router.push('/getIndex');
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
