<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">产后访视记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <td>随访日期</td>
        <td colspan="3">年 月 日</td>
      </tr>
      <tr>
        <td>分娩日期</td>
        <td>年 月 日</td>
        <td>出院日期</td>
        <td>年 月 日</td>
      </tr>
      <tr>
        <td>体 温（℃）</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td>一般健康情况</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td>一般心理状况</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td>血 压(mmHg)</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td>乳 房</td>
        <td colspan="3">1 未见异常 2 异常</td>
      </tr>
      <tr>
        <td>恶 露</td>
        <td colspan="3">1 未见异常 2 异常</td>
      </tr>
      <tr>
        <td>子 宫</td>
        <td colspan="3">1 未见异常 2 异常</td>
      </tr>
      <tr>
        <td>伤 口</td>
        <td colspan="3">1 未见异常 2 异常</td>
      </tr>
      <tr>
        <td>其 他</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td>分 类</td>
        <td colspan="3">1 未见异常 2 异常</td>
      </tr>
      <tr>
        <td>指 导</td>
        <td colspan="3">1 个人卫生<br>2 心理<br>3 营养<br>4 母乳喂养<br>5 新生儿护理与喂养<br>6 其他</td>
      </tr>
      <tr>
        <td>转 诊</td>
        <td colspan="3">1 无 2 有 □<br>原因：<br>机构及科室：</td>
      </tr>
      <tr>
        <td>下次随访日期</td>
        <td colspan="3"></td>
      </tr>
      <tr>
        <td>随访医生签名</td>
        <td colspan="3"></td>
      </tr>
      </tbody>
    </table>
    <p>
      <h4>填表说明：</h4>
      1．本表为产妇出院后一周内由医务人员到产妇家中进行产后检查时填写。<br>
      2．一般健康状况：对产妇一般情况进行检查，具体描述并填写。<br>
      3．一般心理状况：评估产妇是否有产后抑郁的症状。<br>
      4．血压：测量产妇血压，填写具体数值。<br>
      5．乳房、恶露、子宫、伤口：对产妇进行检查，若有异常，具体描述。<br>
      6．分类：根据此次随访情况，对产妇进行分类，若为其他异常，具体写明情况。<br>
      7．指导：可以多选，未列出的其他指导请具体填写。<br>
      8．转诊：若有需转诊的情况，具体填写。<br>
      9．随访医生签名：随访完毕，核查无误后随访医生签名。<br>
      <br>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'postpartumVisitRecordForm',
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
