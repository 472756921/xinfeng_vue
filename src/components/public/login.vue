<template>
  <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 login">
    <h3 class="text-center">新丰管理系统</h3>
    <br/>
    <div class="col-lg-8 col-lg-offset-2 "><input type="text" v-model="un" class="form-control" placeholder="账号"></div>
    <div class="col-xs-12">&nbsp;</div>
    <div class="col-lg-8 col-lg-offset-2"><input type="password" v-model="pwd" class="form-control" placeholder="密码"></div>
    <div class="col-lg-8 col-lg-offset-2" style="margin-top: 6px;">
      <input type="checkbox" ref="admin"/>管理员登录
    </div>
    <div class="col-lg-8 col-lg-offset-2 info">{{info}}</div>
    <div class="col-lg-8 col-lg-offset-2 "><input type="button" value="登录" @click="login" class="btn btn-success col-xs-12"/></div>
    <div class="col-lg-8 col-lg-offset-2 fpwd text-right">忘记密码</div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {},
    data() {
      return {
        un: '',
        pwd: '',
        info: '',
      };
    },
    methods: {
      login() {
        const admin = this.$refs.admin.checked;
        console.log(admin);
        if (this.un === '' || this.pwd === '') {
          this.info = '请输入账号密码';
          return;
        }
        if (this.un === 'town') {
          this.$router.push('/town/file');
        } else if (this.un === 'county') {
          this.$router.push('/county/file');
        } else if (this.un === 'countyAdmin') {
          this.$router.push('/county/file');
        } else if (this.un === 'admin') {
          this.$router.push('/admin/user');
        }
      },
    },
  };
</script>

<style scoped>
  .fpwd{
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
  }
  .fpwd:hover{
    color: #ccc;
  }
  .info{
    height: 30px;
    line-height: 30px;
    color: #ffa200;
  }
  .login{
    border: 1px solid #ddd;
    padding: 40px 0 50px;
    border-radius: 10px;
    margin-top: 100px;
    background: #eee;
  }
</style>
