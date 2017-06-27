<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">肺结核患者随访服务记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <th class="tg-yw4l" colspan="2">随访时间</th>
        <th class="tg-yw4l">年 月 日</th>
        <th class="tg-yw4l">年 月 日</th>
        <th class="tg-yw4l">年 月 日</th>
        <th class="tg-yw4l">年 月 日</th>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">治疗月序</td>
        <td class="tg-yw4l">第 月</td>
        <td class="tg-yw4l">第 月</td>
        <td class="tg-yw4l">第 月</td>
        <td class="tg-yw4l">第 月</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">督导人员</td>
        <td class="tg-yw4l">1 医生 2 家属<br>3 自服药 4 其他</td>
        <td class="tg-yw4l">1 医生 2 家属<br>3 自服药 4 其他</td>
        <td class="tg-yw4l">1 医生 2 家属<br>3 自服药 4 其他</td>
        <td class="tg-yw4l">1 医生 2 家属<br>3 自服药 4 其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">随访方式</td>
        <td class="tg-yw4l">1 门诊 2 家庭 3 电话</td>
        <td class="tg-yw4l">1 门诊 2 家庭 3 电话</td>
        <td class="tg-yw4l">1 门诊 2 家庭 3 电话</td>
        <td class="tg-yw4l">1门诊 2 家庭 3 电话</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2" rowspan="2">症状及体征：<br>0 没有症状<br>1 咳嗽咳痰<br>2 低热盗汗<br>3 咯血或血痰<br>4 胸痛消瘦<br>5 恶心纳差<br>6 关节疼痛<br>7 头痛失眠<br>8 视物模糊<br>9 皮肤瘙痒、皮疹<br>10 耳鸣、听力下降</td>
        <td class="tg-yw4l">□/□/□/□/□/□/□</td>
        <td class="tg-yw4l">□/□/□/□/□/□/□</td>
        <td class="tg-yw4l">□/□/□/□/□/□/□</td>
        <td class="tg-yw4l">□/□/□/□/□/□/□</td>
      </tr>
      <tr>
        <td class="tg-yw4l">其他</td>
        <td class="tg-yw4l">其他</td>
        <td class="tg-yw4l">其他</td>
        <td class="tg-yw4l">其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">生活方<br>式指导</td>
        <td class="tg-yw4l">吸烟</td>
        <td class="tg-yw4l">/ 支/天</td>
        <td class="tg-yw4l">/ 支/天</td>
        <td class="tg-yw4l">/ 支/天</td>
        <td class="tg-yw4l">/ 支/天</td>
      </tr>
      <tr>
        <td class="tg-yw4l">饮酒</td>
        <td class="tg-yw4l">/ 两/天</td>
        <td class="tg-yw4l">/ 两/天</td>
        <td class="tg-yw4l">/ 两/天</td>
        <td class="tg-yw4l">/ 两/天</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="4">用药</td>
        <td class="tg-yw4l">化疗方案</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">用 法</td>
        <td class="tg-yw4l">1 每日 2 间歇</td>
        <td class="tg-yw4l">1 每日 2 间歇</td>
        <td class="tg-yw4l">1 每日 2 间歇</td>
        <td class="tg-yw4l">1 每日 2 间歇</td>
      </tr>
      <tr>
        <td class="tg-yw4l">药品剂型</td>
        <td class="tg-yw4l">1 固定剂量复合制剂□<br>2 散装药 □<br>3 板式组合药 □4<br>注射剂</td>
        <td class="tg-yw4l">1 固定剂量复合制剂□<br>2 散装药 □<br>3 板式组合药 □4<br>注射剂</td>
        <td class="tg-yw4l">1 固定剂量复合制剂□<br>2 散装药 □<br>3 板式组合药 □4<br>注射剂</td>
        <td class="tg-yw4l">1 固定剂量复合制剂□<br>2 散装药 □<br>3 板式组合药 □4<br>注射剂</td>
      </tr>
      <tr>
        <td class="tg-yw4l">漏服药<br>次数</td>
        <td class="tg-yw4l">次</td>
        <td class="tg-yw4l">次</td>
        <td class="tg-yw4l">次</td>
        <td class="tg-yw4l">次</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">药物不良反应</td>
        <td class="tg-yw4l">1 无 □<br>2 有</td>
        <td class="tg-yw4l">1 无 □<br>2 有</td>
        <td class="tg-yw4l">1 无 □<br>2 有</td>
        <td class="tg-yw4l">1 无 □<br>2 有</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">并发症或合并症</td>
        <td class="tg-yw4l">1 无 □<br>2 有__</td>
        <td class="tg-yw4l">1 无 □<br>2 有__</td>
        <td class="tg-yw4l">1 无 □<br>2 有__</td>
        <td class="tg-yw4l">1 无 □<br>2 有__</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="3">转诊</td>
        <td class="tg-yw4l">科 别</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">原 因</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">2 周内随<br>访，随访结<br>果</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">处理意见</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">下次随访时间</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">随访医生签名</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">停止治疗及原因</td>
        <td class="tg-yw4l" colspan="4">1 出现停止治疗时间 年 月 日<br>2 停止治疗原因：完成疗程□ 死亡□ 丢失□ 转入耐多药治疗□</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2" rowspan="2">全程管理情况</td>
        <td class="tg-yw4l" colspan="4">应访视患者_____次，实际访视____次；<br>患者在疗程中，应服药____次，实际服药___次，服药率___%</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="4">评估医生签名：</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'listOfPatientsWithPulmonaryTuberculosisFollowUpService',
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
