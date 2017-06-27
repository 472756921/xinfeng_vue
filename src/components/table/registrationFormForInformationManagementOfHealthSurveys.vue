<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">卫生计生监督协管信息报告登记表</h3>
        <span>机构名称：</span>
      </caption >
      <tbody>
      <tr>
        <td>序号</td>
        <td>发现时间</td>
        <td>信息类别</td>
        <td>信息内容</td>
        <td>报告时间</td>
        <td>报告人</td>
      </tr>
      <tr>
        <td></td>
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
        <td></td>
      </tr>
      <tr>
        <td></td>
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
        <td></td>
      </tr>
      </tbody>
    </table>
    <p>
      注：1.信息类别：食源性疾病、饮用水卫生、学校卫生、非法行医（采供血）、计划生育。<br/>
      2.信息内容：注明发现问题（隐患）的地点、内容等有关情况简单描述。
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'registrationFormForInformationManagementOfHealthSurveys',
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
