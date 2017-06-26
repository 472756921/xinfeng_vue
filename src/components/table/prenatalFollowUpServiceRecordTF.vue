<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">第 2～5 次产前随访服务记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <th colspan="2">项目</th>
        <th>第2次</th>
        <th>第3次</th>
        <th>第4次</th>
        <th>第5次</th>
      </tr>
      <tr>
        <td colspan="2">(随访/督促)日期</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">孕 周</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">主 诉</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">体重（kg）</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="4">产<br>科<br>检<br>查</td>
        <td>宫底高度（cm）</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>腹围（cm）</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>胎 位</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>胎心率（次/分钟）</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">血压（mmHg）</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">血红蛋白（g/L）</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">尿蛋白</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">其他辅助检查*</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">分 类</td>
        <td>1 未见异常 □<br>2 异常</td>
        <td>1 未见异常 □<br>2 异常</td>
        <td>1 未见异常 □<br>2 异常</td>
        <td>1 未见异常 □<br>2 异常</td>
      </tr>
      <tr>
        <td colspan="2">指 导</td>
        <td>1.生活方式<br>2.营养<br>3.心理<br>4.运动<br>5 其他</td>
        <td>1.生活方式<br>2.营养<br>3.心理<br>4.运动<br>5 其他</td>
        <td>1.生活方式<br>2.营养<br>3.心理<br>4.运动<br>5 其他</td>
        <td>1.生活方式<br>2.营养<br>3.心理<br>4.运动<br>5 其他</td>
      </tr>
      <tr>
        <td colspan="2">转 诊</td>
        <td>1 无 2 有 □<br>原因：<br>机构及科室：</td>
        <td>1 无 2 有 □<br>原因：<br>机构及科室：</td>
        <td>1 无 2 有 □<br>原因：<br>机构及科室：</td>
        <td>1 无 2 有 □<br>原因：<br>机构及科室：</td>
      </tr>
      <tr>
        <td colspan="2">下次随访日期</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">随访医生签名</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
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
