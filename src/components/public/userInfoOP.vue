<template>
  <div class="content col-sm-12 col-md-8 col-md-offset-2">
    <h3>个人信息设置</h3>

    <div>
      <img src="http://iph.href.lu/80x80"/>
      <button class="btn btn-info btn-sm" type="button">修改</button>
    </div>
    <br />
    <div class="input-group col-xs-12 col-sm-4">
      <input type="text" class="form-control" placeholder="用户昵称" />
      <span class="input-group-btn">
        <button class="btn btn-info" type="button">修改</button>
      </span>
    </div>
    <br/>
    <br/>
    <div>
      <input placeholder="原始密码" type="password"/>
      <input placeholder="新密码" type="password"/>
      <input placeholder="重复新密码" type="password"/>
      <button class="btn btn-info btn-sm" type="button">修改</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userInfoOP',
  };
</script>

<style scoped>
  .content{
    overflow: auto;
    padding-bottom: 30px;
  }
</style>
