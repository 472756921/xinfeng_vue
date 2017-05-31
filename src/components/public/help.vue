<template>
  <div class="help">
    <i class="back" @click="back">返回上一级</i>
    <br/>
    <br/>
    <div>需求类型：药品</div>
    <div>提出时间：2012-12-21</div>
    <div>状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：正在处理</div>
    <div>请求人&nbsp;&nbsp;&nbsp; ：XXX镇卫生中心</div>
    <br/>
    <div>
      <h4>支持描述</h4>
      <p>我要点阿莫西连</p>
    </div>
    <br/>
    <div>
      <h4>上级回复</h4>
      <p>暂时没有药品，请等个几年再说</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Help',
    created() {
      this.$emit('position', 'help');
    },
    methods: {
      back() {
        this.$router.push('/town/helps');
      },
    },
  };
</script>

<style>
  .check>span {
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
  .help{
    padding-bottom: 40px;
  }
</style>
