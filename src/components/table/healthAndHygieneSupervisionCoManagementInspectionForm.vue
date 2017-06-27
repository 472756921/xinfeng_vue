<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">卫生计生监督协管巡查登记表</h3>
        <span>机构名称：</span>
        <span class="pull-right">_______年度</span>
      </caption >
      <tbody>
      <tr>
        <td>序号</td>
        <td>发现的主要问题</td>
        <td>巡查日期</td>
        <td>巡查人</td>
        <td>备注</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <p>
      注：对食源性疾病、饮用水卫生、学校卫生、非法行医（采供血）、计划生育开展巡查，填写本表。备注栏填写发现问题后的处臵方式（如报告卫
      生计生监督执法机构或帮助整改等内容）。
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'healthAndHygieneSupervisionCoManagementInspectionForm',
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
</style>
