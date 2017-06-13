<template>
  <div class="content">
    <span class="back" @click="back">返回上一级</span>
    <h5><span class="col-sm-4">讲座主题：阿斯蒂芬</span><span class="col-sm-4">讲座时间：2012-12-12</span><span class="col-sm-4">主办单位：阿斯蒂芬</span></h5>
    <h5><span class="col-sm-4">参与讲座合作伙伴（单位）：阿斯蒂芬</span><span class="col-sm-4">接受讲座人数：阿斯蒂芬</span><span class="col-sm-4">宣教人（主讲人）：2012-12-12</span></h5>
    <h5><span class="col-sm-4">本次讲座发放宣传资料的种类：阿斯蒂芬</span></h5>
    <div class="col-xs-12">
      <h5>讲座内容：</h5>
      <p class="contentText">asdfasdfasdfasdfasfd</p>
    </div>
    <div class="col-xs-12">
      <h5>活动总结评价：</h5>
      <p class="contentText">asdfasdfasdfasdfasfd</p>
    </div>
    <h5><span class="col-sm-4">填表人：阿斯蒂芬</span><span class="col-sm-4">负责人：阿斯蒂芬</span><span class="col-sm-4">日期：2012-12-12</span></h5>
  </div>
</template>

<script>
  export default {
    name: 'DatasJiangZuo',
    created() {
      this.$emit('datiChange', '数据监控>健康讲座记录>详情');
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>
  .back:hover{
    cursor: pointer;
    color: #cc0000;
  }
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
