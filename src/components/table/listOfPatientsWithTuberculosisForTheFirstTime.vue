<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">肺结核患者第一次入户随访记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <th class="tg-yw4l" colspan="2">随访日期</th>
        <th class="tg-yw4l">年 月 日</th>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">随访形式</td>
        <td class="tg-yw4l">1门诊 2 家庭访视 3 电话</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">患者类型</td>
        <td class="tg-yw4l">1 初治 2 复治</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">痰菌情况</td>
        <td class="tg-yw4l">1阳性 2阴性 3未查痰</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">耐药情况</td>
        <td class="tg-yw4l">1耐药 2非耐药 3未检测</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2" rowspan="2">症状及体征：<br>0 没有症状 1 咳嗽咳痰<br>2 低热盗汗 3 咯血或血痰<br>4 胸痛消瘦 5 恶心纳差<br>6 头痛失眠 7 视物模糊<br>8 皮肤瘙痒、皮疹<br>9 耳鸣、听力下降</td>
        <td class="tg-yw4l">□/□/□/□/□/□/□</td>
      </tr>
      <tr>
        <td class="tg-yw4l">其他：</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="3">用<br>药</td>
        <td class="tg-yw4l">化疗方案</td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">用 法</td>
        <td class="tg-yw4l">1 每日 2 间歇</td>
      </tr>
      <tr>
        <td class="tg-yw4l">药品剂型</td>
        <td class="tg-yw4l">1 固定剂量复合制剂 □ 2 散装药 □<br>3 板式组合药 □ 4 注射剂</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">督导人员选择</td>
        <td class="tg-yw4l">1医生 2家属 3自服药 4 其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">家庭居<br>住环境<br>评估</td>
        <td class="tg-yw4l">单独的居室</td>
        <td class="tg-yw4l">1 有 2 无</td>
      </tr>
      <tr>
        <td class="tg-yw4l">通风情况</td>
        <td class="tg-yw4l">1良好 2一般 3差</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">生活方<br>式评估</td>
        <td class="tg-yw4l">吸 烟</td>
        <td class="tg-yw4l">/ 支/天</td>
      </tr>
      <tr>
        <td class="tg-yw4l">饮 酒</td>
        <td class="tg-yw4l">/ 两/天</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="10">健<br>康<br>教<br>育<br>及<br>培<br>训</td>
        <td class="tg-yw4l">取药地点、时间</td>
        <td class="tg-yw4l">地点:<br>时间: 年 月 日</td>
      </tr>
      <tr>
        <td class="tg-yw4l">服药记录卡的填写</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l">服药方法及药品存放</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l">肺结核治疗疗程</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l">不规律服药危害</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l">服药后不良反应及处理</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l">治疗期间复诊查痰</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l">外出期间如何坚持服药</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l">生活习惯及注意事项</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l">密切接触者检查</td>
        <td class="tg-yw4l">1 掌握 2 未掌握</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">下次随访时间</td>
        <td class="tg-yw4l">年 月 日</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">评估医生签名</td>
        <td class="tg-yw4l"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'listOfPatientsWithTuberculosisForTheFirstTime',
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
