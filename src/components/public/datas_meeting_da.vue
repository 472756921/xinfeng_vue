<template>
  <div class="content">
    <span class="back" @click="back">返回上一级</span>
    <h5><span class="col-sm-4">医疗机构：阿斯蒂芬</span><span class="col-sm-4">日期：2012-12-12</span><span class="col-sm-4">地点：阿斯蒂芬</span></h5>
    <h5><span class="col-sm-4">会议形式：阿斯蒂芬</span><span class="col-sm-4">组织者：阿斯蒂芬</span><span class="col-sm-4">主讲：2012-12-12</span></h5>
    <div class="col-xs-12">
      <h5>内容：</h5>
      <p class="contentText">asdfasdfasdfasdfasfd</p>
    </div>
    <h5><span class="col-sm-4">制表：阿斯蒂芬</span><span class="col-sm-4">负责人：阿斯蒂芬</span><span class="col-sm-4">日期：2012-12-12</span></h5>
  </div>
</template>

<script>
  export default {
    name: 'DatasMeeting',
    created() {
      this.$emit('datiChange', '数据监控>乡村会议记录>详情');
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>
  .check>span {
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
  textarea{
    width: 100%;
    border: 1px solid #ccc;
  }
  .content{
    padding-bottom: 40px;
    overflow: auto;
  }
  .content>h5{
    margin: 8px 0;
    line-height: 20px;
  }
  .contentText{
    background-color: #eee;
    padding: 8px 10px;
    border-radius: 5px;
    color: #666;
  }
</style>
