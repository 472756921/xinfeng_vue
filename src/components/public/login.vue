<template>
  <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 login">
    <h3 class="text-center">新丰管理系统</h3>
    <br/>
    <div class="col-lg-8 col-lg-offset-2 "><input type="text" v-model="un" class="form-control" placeholder="账号"></div>
    <div class="col-xs-12">&nbsp;</div>
    <div class="col-lg-8 col-lg-offset-2"><input type="password" v-model="pwd" class="form-control" placeholder="密码"></div>
    <div class="col-lg-8 col-lg-offset-2"><input type="checkbox" ref="remb"/>记住密码</div>
    <div class="col-lg-8 col-lg-offset-2 info">{{info}}</div>
    <div class="col-lg-8 col-lg-offset-2 "><input type="button" value="登录" @click="login" class="btn btn-success col-xs-12"/></div>
    <div class="col-lg-8 col-lg-offset-2 text-right"><span class="fpwd">忘记密码</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { userLogin } from '../../interface/index';

  export default {
    name: 'app',
    created() {
    },
    data() {
      return {
        un: '',
        pwd: '',
        info: '',
      };
    },
    methods: {
      login() {
        const remb = this.$refs.remb.checked;
        if (this.un === '' || this.pwd === '') {
          this.info = '请输入账号密码';
          return;
        }
        this.$http.post(userLogin(), {
          username: this.un,
          password: this.pwd,
        }).then((res) => {
          if (res.status === 200) {
            const user = {
              authToken: res.body.authToken,
              username: res.body.username,
              adminType: res.body.adminType,
            };
            sessionStorage.clear();
            sessionStorage.setItem('user', JSON.stringify(user));
            if (remb) {
              localStorage.setItem('user', JSON.stringify(user));
            }
            this.checkUserType(user);
          }
        }).catch((error) => {
          console.log(error);
          this.info = error.body.message;
        });
      },

      checkUserType(user) {
        switch (user.adminType) {
          case 1:
            this.$router.push('/admin/user');
            break;
          case 2:
            this.$router.push('/countyAdmin/file');
            break;
          case 3:
            this.$router.push('/county/file');
            break;
          case 4:
            this.$router.push('/town/file');
            break;
          default:
            this.$router.push('/404');
        }
      },
    },
  };
</script>

<style scoped>
  .fpwd{
    color: #999;
    cursor: pointer;
    line-height: 30px;
  }
  .fpwd:hover{
    color: #aaa;
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
