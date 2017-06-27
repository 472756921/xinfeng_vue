<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">严重精神障碍患者随访服务记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <th class="tg-yw4l">随访日期</th>
        <th class="tg-yw4l" colspan="3">年 月 日</th>
      </tr>
      <tr>
        <td class="tg-yw4l">本次随访形式</td>
        <td class="tg-yw4l" colspan="3">1 门诊 2 家庭访视 3 电话</td>
      </tr>
      <tr>
        <td class="tg-yw4l">若失访，原因</td>
        <td class="tg-yw4l" colspan="3">1 外出打工 2 迁居他处 3 走失 4 连续 3 次未到访 5 其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">如死亡，日期和原因</td>
        <td class="tg-yw4l">死亡日期</td>
        <td class="tg-yw4l" colspan="2">年 月 日</td>
      </tr>
      <tr>
        <td class="tg-yw4l">死亡原因</td>
        <td class="tg-yw4l" colspan="2">1 躯体疾病<br>①传染病和寄生虫病 ②肿瘤 ③心脏病 ④脑血管病<br>⑤呼吸系统疾病 ⑥消化系统疾病 ⑦其他疾病 ⑧不详 <br>2 自杀 3 他杀 4 意外 5 精神疾病相关并发症 6 其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l">危险性评估</td>
        <td class="tg-yw4l" colspan="3">0 （0 级） 1（1 级） 2(2 级) 3(3 级) 4(4 级) 5（5 级）</td>
      </tr>
      <tr>
        <td class="tg-yw4l">目前症状</td>
        <td class="tg-yw4l" colspan="3">1 幻觉 2 交流困难 3 猜疑 4 喜怒无常 5 行为怪异 6 兴奋话多 7 伤人毁物<br>8 悲观厌世 9 无故外走 10 自语自笑 11 孤僻懒散 12 其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l">自知力</td>
        <td class="tg-yw4l" colspan="3">1 自知力完全 2 自知力不全 3 自知力缺失</td>
      </tr>
      <tr>
        <td class="tg-yw4l">睡眠情况</td>
        <td class="tg-yw4l" colspan="3">1 良好 2 一般 3 较差</td>
      </tr>
      <tr>
        <td class="tg-yw4l">饮食情况</td>
        <td class="tg-yw4l" colspan="3">1 良好 2 一般 3 较差</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="5">社会功能情况</td>
        <td class="tg-yw4l">个人生活料理</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 较差</td>
      </tr>
      <tr>
        <td class="tg-yw4l">家务劳动</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 较差</td>
      </tr>
      <tr>
        <td class="tg-yw4l">生产劳动及工作</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 较差 9 此项不适用</td>
      </tr>
      <tr>
        <td class="tg-yw4l">学习能力</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 较差</td>
      </tr>
      <tr>
        <td class="tg-yw4l">社会人际交往</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 较差</td>
      </tr>
      <tr>
        <td class="tg-yw4l">危险行为</td>
        <td class="tg-yw4l" colspan="3">1 轻度滋事 次 2 肇事 次 3 肇祸 次<br>4 其他危害行为 次 5 自伤 次 6 自杀未遂 次 7 无</td>
      </tr>
      <tr>
        <td class="tg-yw4l">两次随访期间<br>关锁情况</td>
        <td class="tg-yw4l" colspan="3">1 无关锁 2 关锁 3 关锁已解除</td>
      </tr>
      <tr>
        <td class="tg-yw4l">两次随访期间<br>住院情况</td>
        <td class="tg-yw4l" colspan="3">0 未住院 1 目前正在住院 2 曾住院，现未住院<br>末次出院时间 年 月 日</td>
      </tr>
      <tr>
        <td class="tg-yw4l">实验室检查</td>
        <td class="tg-yw4l" colspan="3">1 无 2 有</td>
      </tr>
      <tr>
        <td class="tg-yw4l">用药依从性</td>
        <td class="tg-yw4l" colspan="3">1 按医嘱规律用药 2 间断用药 3 不用药 4 医嘱勿需用药</td>
      </tr>
      <tr>
        <td class="tg-yw4l">药物不良反应</td>
        <td class="tg-yw4l" colspan="3">1 无 2 有 9 此项不适用</td>
      </tr>
      <tr>
        <td class="tg-yw4l">治疗效果</td>
        <td class="tg-yw4l" colspan="3">1 痊愈 2 好转 3 无变化 4 加重 9 此项不适用</td>
      </tr>
      <tr>
        <td class="tg-yw4l">是否转诊</td>
        <td class="tg-yw4l" colspan="3">1 否 2 是<br>转诊原因：<br>转诊至机构及科室：</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">用药情况</td>
        <td class="tg-yw4l">药物1：</td>
        <td class="tg-yw4l">用法：每日(月) 次</td>
        <td class="tg-yw4l">每次剂量 mg</td>
      </tr>
      <tr>
        <td class="tg-yw4l">药物2：</td>
        <td class="tg-yw4l">用法：每日(月) 次</td>
        <td class="tg-yw4l">每次剂量 mg</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">用药指导</td>
        <td class="tg-yw4l">药物1：</td>
        <td class="tg-yw4l">用法：每日(月) 次</td>
        <td class="tg-yw4l">每次剂量 mg</td>
      </tr>
      <tr>
        <td class="tg-yw4l">药物2：</td>
        <td class="tg-yw4l">用法：每日(月) 次</td>
        <td class="tg-yw4l">每次剂量 mg</td>
      </tr>
      <tr>
        <td class="tg-yw4l">康复措施</td>
        <td class="tg-yw4l" colspan="3">1 生活劳动能力 2 职业训练 3 学习能力 4 社会交往 5 其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l">本次随访分类</td>
        <td class="tg-yw4l" colspan="3">1 不稳定 2 基本稳定 3 稳定</td>
      </tr>
      <tr>
        <td class="tg-yw4l">下次随访日期</td>
        <td class="tg-yw4l">年 月 日</td>
        <td class="tg-yw4l">随访医生签名</td>
        <td class="tg-yw4l"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'followUpServiceRecordsForPatientsWithSevereMentalDisorders',
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
