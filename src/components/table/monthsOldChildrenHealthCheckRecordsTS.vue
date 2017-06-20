<template>
  <div class="content table-responsive">
    <h5 class="check"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">3~6岁儿童健康检查记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：123-122332</span>
      </caption >
      <tbody>
      <tr>
        <th class="tg-yw4l" colspan="2">月 龄</th>
        <th class="tg-yw4l">3岁</th>
        <th class="tg-yw4l">4岁</th>
        <th class="tg-yw4l">5岁</th>
        <th class="tg-yw4l">6岁</th>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">随访日期</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">体 重/kg</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">身 长/cm</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">体重/身高</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
        <td class="tg-yw4l">上 中 下</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">体格发育评价</td>
        <td class="tg-yw4l">1 正常 2 低体重<br>3 消瘦 4 生长迟缓<br>5 超重</td>
        <td class="tg-yw4l">1 正常 2 低体重<br>3 消瘦 4 生长迟缓<br>5 超重</td>
        <td class="tg-yw4l">1 正常 2 低体重<br>3 消瘦 4 生长迟缓<br>5 超重</td>
        <td class="tg-yw4l">1 正常 2 低体重<br>3 消瘦 4 生长迟缓<br>5 超重</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="8">体<br>格<br>检<br>查</td>
        <td class="tg-yw4l">视 力</td>
        <td class="tg-baqh">--</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">听 力</td>
        <td class="tg-baqh">1 通过 2 未过</td>
        <td class="tg-baqh">--</td>
        <td class="tg-baqh">--</td>
        <td class="tg-baqh">--</td>
      </tr>
      <tr>
        <td class="tg-yw4l">牙数（颗）/龋齿数</td>
        <td class="tg-yw4l">/</td>
        <td class="tg-yw4l">/</td>
        <td class="tg-yw4l">/</td>
        <td class="tg-yw4l">/</td>
      </tr>
      <tr>
        <td class="tg-yw4l">胸 部</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
      </tr>
      <tr>
        <td class="tg-yw4l">腹 部</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
      </tr>
      <tr>
        <td class="tg-yw4l">脐 部</td>
        <td class="tg-yw4l">1 未脱 2 脱落 3 脐<br>部有渗出 4 其他</td>
        <td class="tg-yw4l">1 未见异常 2 异常</td>
        <td class="tg-baqh">--</td>
        <td class="tg-baqh">--</td>
      </tr>
      <tr>
        <td class="tg-yw4l">血红蛋白值*</td>
        <td class="tg-baqh">g/L</td>
        <td class="tg-baqh">g/L</td>
        <td class="tg-lqy6">g/L</td>
        <td class="tg-lqy6">g/L</td>
      </tr>
      <tr>
        <td class="tg-yw4l">其他</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">户外活动</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l">小时/日</td>
        <td class="tg-yw4l">小时/日</td>
        <td class="tg-yw4l">小时/日</td>
        <td class="tg-yw4l">小时/日</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">服用维生素 D</td>
        <td class="tg-yw4l">IU/日</td>
        <td class="tg-yw4l">IU/日</td>
        <td class="tg-yw4l">IU/日</td>
        <td class="tg-yw4l">IU/日</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">发育评估</td>
        <td class="tg-baqh">1.不会说自己的名<br>字<br>2.不会玩“拿棍当马<br>骑”等假想游戏<br>3.不会模仿画圆<br>4.不会双脚跳</td>
        <td class="tg-yw4l">1.不会说带形容词<br>的句子<br>2.不能按要求等待<br>或轮流<br>3.不会独立穿衣<br>4.不会单脚站立</td>
        <td class="tg-yw4l">1.不能简单叙说事<br>情经过<br>2.不知道自己的性<br>别<br>3.不会用筷子吃饭<br>4.不会单脚跳</td>
        <td class="tg-yw4l">1.不会表达自己的<br>感受或想法<br>2.不会玩角色扮演<br>的集体游戏<br>3.不会画方形<br>4.不会奔跑</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">两次随访间患病情况</td>
        <td class="tg-yw4l">1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
        <td class="tg-yw4l">1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
        <td class="tg-yw4l">1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
        <td class="tg-yw4l">1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">转诊建议</td>
        <td class="tg-yw4l">1 无 2 有<br>原因：<br>机构及科室：</td>
        <td class="tg-yw4l">1 无 2 有<br>原因：<br>机构及科室：</td>
        <td class="tg-yw4l">1 无 2 有<br>原因：<br>机构及科室：</td>
        <td class="tg-yw4l">1 无 2 有<br>原因：<br>机构及科室：</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">指 导</td>
        <td class="tg-yw4l">1 合理膳食<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
        <td class="tg-yw4l">1 合理膳食<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
        <td class="tg-yw4l">1 合理膳食<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
        <td class="tg-yw4l">1 合理膳食<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">下次随访日期</td>
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
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'monthsOldChildrenHealthCheckRecordsTS',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>3~6岁儿童健康检查记录表');
    },
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
    overflow: auto;
    padding-bottom: 30px;
  }
</style>
