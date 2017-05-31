<template>
  <div class="col-sm-12 col-md-8 col-md-offset-2">
    <ul class="nav">
      <li class="col-sm-6 col-md-3 text-center active" @click='navChange("file")'>
        <i class="icon iconfont icon-activity"></i>
        <h3>健康档案</h3>
        <span>病人的健康档案</span>
      </li>
      <li class="col-sm-6 col-md-3 text-center" @click='navChange("question")'>
        <i class="icon iconfont icon-feedback"></i>
        <h3>健康问题</h3>
        <span>病人的健康档案</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
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
