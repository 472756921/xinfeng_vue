<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <ul class="nav">
    <li class="col-sm-6 col-md-3 col-xs-6 text-center" v-bind:class="{ 'active' : active === 'file'}" @click='navChange("file")'>
      <i class="icon iconfont icon-activity"></i>
      <h3>健康档案</h3>
      <span>病人的健康档案</span>
    </li>
    <li class="col-sm-6 col-md-3 col-xs-6 text-center" v-bind:class="{ 'active' : active === 'question'}" @click='navChange("question")'>
      <i class="icon iconfont icon-feedback"></i>
      <h3>健康问题</h3>
      <span>病人的健康档案</span>
    </li>
    <li class="col-sm-6 col-md-3 col-xs-6 text-center" v-bind:class="{ 'active' : active === 'help'}" @click='navChange("help")'>
      <i class="icon iconfont icon-customerservice"></i>
      <h3>寻求支撑</h3>
      <span>病人的健康档案</span>
    </li>
    <li class="col-sm-6 col-md-3 col-xs-6 text-center" v-bind:class="{ 'active' : active === 'data'}" @click='navChange("data")'>
      <i class="icon iconfont icon-computer"></i>
      <h3>数据监控</h3>
      <span>病人的健康档案</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Headxf',
    data() {
      return {
        active: 'file',
      };
    },
    created() {
      const position = this.$route.path.split('/')[2];
      this.active = position;
    },
    methods: {
      navChange(position) {
        this.active = position;
        const town = '/town/';
        this.$emit('navChange', position);
        this.$router.push(town + position);
      },
    },
  };
</script>

<style scoped>
  .active{
    background-color: #eee;
  }
  .nav{
    overflow: auto;
    padding: 0;
    border-bottom: 1px solid #aaa;
    border-top: 1px solid #ccc;
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
</style>
