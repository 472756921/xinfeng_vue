<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">产后42天健康检查记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <td>随访日期</th>
        <td colspan="3">年 月 日</td>
      </tr>
      <tr>
        <td>分娩日期</td>
        <td>年 月 日</td>
        <td>出院日期</td>
        <td>年 月 日</td>
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
        <td colspan="3">1 已恢复 2 未恢复</td>
      </tr>
      <tr>
        <td>指 导</td>
        <td colspan="3">1 心理保健<br>2 性保健与避孕<br>3 婴儿喂养<br>4 产妇营养<br>5 其他</td>
      </tr>
      <tr>
        <td>处 理</td>
        <td colspan="3">1 结案 2 转诊<br>原因：<br>机构及科室：</td>
      </tr>
      <tr>
        <td>随访医生签名</td>
        <td colspan="3"></td>
      </tr>
      </tbody>
    </table>
    <p>
    <h4>填表说明：</h4>
    1．一般健康状况：对产妇一般情况进行检查，具体描述并填写。 <br>
    2.一般心理状况：评估是否有产后抑郁的症状。 <br>
    3．血压：如有必要，测量产妇血压，填写具体数值。 <br>
    4．乳房、恶露、子宫、伤口：对产妇进行检查，若有异常，具体描述。 <br>
    5．分类：根据此次随访情况，对产妇进行分类，若为未恢复，具体写明情况。 <br>
    6．指导：可以多选，未列出的其他指导请具体填写。 <br>
    7．处理：若产妇已恢复正常，则结案。若有需转诊的情况，具体填写。 <br>
    8．随访医生签名：检查完毕，核查无误后检查医生签名。 <br>
    9．若失访，在随访日期处写明失访原因；若死亡，写明死亡日期和死亡原因。 <br>
    <br>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'prenatalFollowUpServiceRecordTF',
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
