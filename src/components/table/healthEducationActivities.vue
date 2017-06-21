<template>
  <div class="table-responsive content">
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">健康教育活动表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：123-122332</span>
      </caption >
      <tbody>
      <tr>
        <td width="150">活动时间：</td>
        <td></td>
        <td width="150">活动地点：</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="4">活动形式：</td>
      </tr>
      <tr>
        <td colspan="4" height="80">活动主题：</td>
      </tr>
      <tr>
        <td colspan="4" height="80">组织者：</td>
      </tr>
      <tr>
        <td colspan="4">主讲人：</td>
      </tr>
      <tr>
        <td colspan="2">接受健康教育人员类别：</td>
        <td colspan="2">接受健康教育人数：</td>
      </tr>
      <tr>
        <td colspan="4">健康教育资料发放种类及数量：</td>
      </tr>
      <tr>
        <td colspan="4" height="200">活动内容：</td>
      </tr>
      <tr>
        <td colspan="4" height="200">活动总结评价：</td>
      </tr>
      <tr>
        <td colspan="4">存档材料请附后<br/>
          □书面材料 □图片材料 □印刷材料 □影音材料 □签到表
          □其他材料
        </td>
      </tr>
      </tbody>
    </table>
    <span class="col-xs-12 col-sm-4 hidden-print">填表人（签字）：</span>
    <span class="col-xs-12 col-sm-4 hidden-print">负责人（签字）：</span>
    <span class="col-xs-12 col-sm-4 hidden-print">填表时间： 年 月 日</span>

    <span class="col-xs-4 visible-print-block">填表人（签字）：</span>
    <span class="col-xs-4 visible-print-block">负责人（签字）：</span>
    <span class="col-xs-4 visible-print-block">填表时间： 年 月 日</span>

    <br class="hidden-print"/>
    <br class="hidden-print"/>
    <br class="hidden-print"/>

    <table class="table table-bordered hidden-print">
      <caption class="">
        <h4 class="text-center">健康教育活动历史记录</h4>
      </caption >
      <tbody>
        <tr>
          <th>时间</th>
          <th>主题</th>
          <th>详情</th>
        </tr>
        <tr>
          <td>2017-03-22</td>
          <td>天下第一武道大会</td>
          <td>查看</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'healthEducationActivities',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>健康教育活动表');
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>
  .check > span:hover{
    color: #cc0000;
    cursor: pointer;
  }
  .content{
    overflow: auto;
    padding-bottom: 30px;
  }
</style>
