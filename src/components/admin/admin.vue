<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="col-sm-12 col-md-8 col-md-offset-2 admin">
    <div class="nav col-xs-12 col-sm-2">
      <div v-bind:class="{ 'active' : active === 'user'}" @click="changenav('user')">用户管理</div>
      <div v-bind:class="{ 'active' : active === 'help'}" @click="changenav('help')">支持管理</div>
    </div>
    <router-view class="col-sm-10"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Admin',
    data() {
      return {
        active: 'user',
      };
    },
    methods: {
      changenav(position) {
        this.active = position;
        this.$router.push(position);
      },
    },
  };
</script>

<style scoped>
  .admin{
    border-top: 1px solid #999;
    padding: 0;
  }
  .nav{
    background: #eee;
    padding: 0;
  }
  .nav>div{
    height: 50px;
    padding: 16px;
    font-size: 16px;
    cursor: pointer;
  }
  .active{
    background-color: #003377;
    color: #fff;
  }
</style>
