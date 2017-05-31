<template>
  <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 login">
    <h3 class="text-center">新丰管理系统</h3>
    <br/>
    <div class="col-lg-8 col-lg-offset-2 "><input type="text" class="form-control" placeholder="账号"></div>
    <div class="col-xs-12">&nbsp;</div>
    <div class="col-lg-8 col-lg-offset-2"><input type="password" class="form-control" placeholder="密码"></div>
    <div class="col-lg-8 col-lg-offset-2 info">账号或密码错误</div>
    <div class="col-lg-8 col-lg-offset-2 "><input type="button" value="登录" class="btn btn-success col-xs-12"/></div>
    <div class="col-lg-8 col-lg-offset-2 fpwd text-right">忘记密码</div>

  </div>
</template>

<script>
  export default {
    name: 'app',
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
    color: #fff;
    margin-top: 100px;
    background:-webkit-gradient(linear, 0 0, 0 bottom, from(#000066), to(#000033));
  }
</style>
