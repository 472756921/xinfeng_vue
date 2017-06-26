<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">严重精神障碍患者个人信息补充表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <td>监护人姓名</td>
        <td></td>
        <td>与患者关系</td>
        <td></td>
      </tr>
      <tr>
        <td width="200">监护人住址</td>
        <td></td>
        <td width="200">监护人电话</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="2">辖区村（居）委会联系人、电话</td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <td colspan="2">户别</td>
        <td colspan="2">1 城镇 2 农村</td>
      </tr>
      <tr>
        <td colspan="2">就业情况</td>
        <td colspan="2">1 在岗工人 2 在岗管理者 3 农民 4 下岗或无业 <br>5 在校学生6 退休 7 专业技术人员 8 其他 9 不详</td>
      </tr>
      <tr>
        <td colspan="2">知情同意</td>
        <td colspan="2">1 同意参加管理0 不同意参加管理签字：签 字 时 间 年 月 日</td>
      </tr>
      <tr>
        <td colspan="2">初次发病时间</td>
        <td colspan="2">年月 日</td>
      </tr>
      <tr>
        <td colspan="2">既往主要症状</td>
        <td colspan="2">1 幻觉 2 交流困难 3 猜疑 4 喜怒无常 5 行为怪异 6 兴奋话多<br> 7 伤人毁物8 悲观厌世 9 无故外走 10 自语自笑 11 孤僻懒散 12 其他</td>
      </tr>
      <tr>
        <td colspan="2">既往关锁情况</td>
        <td colspan="2">1 无关锁 2 关锁 3 关锁已解除</td>
      </tr>
      <tr>
        <td rowspan="2">既往治<br>疗情况</td>
        <td>门诊</td>
        <td colspan="2">1 未治 2 间断门诊治疗 3 连续门诊治疗 <br>首次抗精神病药治疗时间 年 月 日</td>
      </tr>
      <tr>
        <td>住院</td>
        <td colspan="2">曾住精神专科医院/综合医院精神专科 次</td>
      </tr>
      <tr>
        <td colspan="2">目前诊断情况</td>
        <td colspan="2">诊断 确诊医院 确诊日期</td>
      </tr>
      <tr>
        <td colspan="2">最近一次治疗效果</td>
        <td colspan="2">1 临床痊愈 2 好转 3 无变化 4 加重</td>
      </tr>
      <tr>
        <td colspan="2">危险行为</td>
        <td colspan="2">1 轻度滋事 次 2 肇事 次<br>3 肇祸 次 4 其他危害行为 次<br>5 自伤 次 6 自杀未遂 次<br>7 无</td>
      </tr>
      <tr>
        <td colspan="2">经济状况</td>
        <td colspan="2">1 贫困，在当地贫困线标准以下 2 非贫困</td>
      </tr>
      <tr>
        <td colspan="2">专科医生的意见<br>(如果有请记录)</td>
        <td colspan="2"></td>
      </tr>
      <tr>
        <td>填表日期</td>
        <td>年 月 日</td>
        <td>医 生 签 字</td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'supplementaryInformationOnMentalDisorders',
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
