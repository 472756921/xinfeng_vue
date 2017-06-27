<template>
  <div class="content">
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">体质判定标准表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <th class="tg-yw4l">体质类型及对应条目</th>
        <th class="tg-yw4l">条 件</th>
        <th class="tg-yw4l">判定结果</th>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="3">气虚质（2）（3）（4）（14）<br>阳虚质（11）（12）（13）（29）<br>阴虚质（10）（21）（26）（31）<br>痰湿质（9）（16）（28）（32）<br>湿热质（23）（25）（27）（30）<br>血瘀质（19）（22）（24）（33）<br>气郁质（5）（6）（7）（8）<br>特禀质（15）（17）（18）（20）</td>
        <td class="tg-yw4l">各条目得分相加≥11 分</td>
        <td class="tg-yw4l">是</td>
      </tr>
      <tr>
        <td class="tg-yw4l">各条目得分相加 9～10 分</td>
        <td class="tg-yw4l">倾向是</td>
      </tr>
      <tr>
        <td class="tg-yw4l">各条目得分相加≤8 分</td>
        <td class="tg-yw4l">否</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="3">平和质（1）（2）（4）（5）（13）<br>（其中，（2）（4）（5）（13）反向计分，<br>即 1→5，2→4，3→3，4→2，5→1）</td>
        <td class="tg-yw4l">各条目得分相加≥17 分，同时其他<br>8 种体质得分都≤8 分</td>
        <td class="tg-yw4l">是</td>
      </tr>
      <tr>
        <td class="tg-yw4l">各条目得分相加≥17 分，同时其他<br>8 种体质得分都≤10 分</td>
        <td class="tg-yw4l">基本是</td>
      </tr>
      <tr>
        <td class="tg-yw4l">不满足上述条件者</td>
        <td class="tg-yw4l">否</td>
      </tr>
      </tbody>
    </table>
    <p>
      <h4>填表说明：</h4>
      1．该表不用纳入居民的健康档案。<br/>
      2．体质辨识结果的准确性取决于接受服务者回答问题准确程度，如果出现自相矛盾的
      问题回答，则会出现自相矛盾的辨识结果，需要提供服务者核对其问题回答的准确性。处理
      方案有以下几种：
      （1）在回答问题过程中及时提醒接受服务者理解所提问题。<br/>
      （2）出现两种及以上判定结果即兼夹体质是正常的，比如气阴两虚，则两个体质都如实记录，以分数高的为主要体质进行指导。<br/>
      （3）如果出现判定结果分数一致，则由中医师依据专业知识判定，然后进行指导。<br/>
      （4）如果出现既是阴虚又是阳虚这样的矛盾判定结果，要返回查找原因，帮助老年人准确采集信息，必要时候由中医师进行辅助判定。<br/>
      （5）如果出现每种体质都不是或者无法判断体质类型等情况，则返回查找原因，或需2 周后重新采集填写。
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'criteriaForPhysicalFitness',
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
    padding-bottom: 30px;
  }
</style>
