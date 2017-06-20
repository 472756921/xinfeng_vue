<template>
  <div class="content table-responsive">
    <h5 class="check"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">12～30月龄儿童健康检查记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：123-122332</span>
      </caption >
      <tbody>
        <tr>
          <th colspan="2">月（年）龄</th>
          <th>12 月龄</th>
          <th>18 月龄</th>
          <th>24 月龄</th>
          <th>30 月龄</th>
        </tr>
        <tr>
          <th colspan="2">随访日期</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th colspan="2">体重/kg</th>
          <td>上 中 下</td>
          <td>上 中 下</td>
          <td>上 中 下</td>
          <td>上 中 下</td>
        </tr>
        <tr>
          <th colspan="2">身长(高)/cm</th>
          <td>上 中 下</td>
          <td>上 中 下</td>
          <td>上 中 下</td>
          <td>上 中 下</td>
        </tr>
        <tr>
          <th rowspan="13" style="line-height: 700px">体格检查</th>
          <th>面 色</th>
          <td>1红润 2黄染 3其他</td>
          <td>1红润 2黄染 3其他</td>
          <td>1红润 2黄染 3其他</td>
          <td>1红润 2黄染 3其他</td>
        </tr>
        <tr>
          <th>皮 肤</th>
          <td>1 未见异常 2异常</td>
          <td>1 未见异常 2异常</td>
          <td>1 未见异常 2异常</td>
          <td>1 未见异常 2异常</td>
        </tr>
        <tr>
          <th>前 囟</th>
          <td>1 闭合 ２未闭,cm× cm</td>
          <td>1 闭合 ２未闭,cm× cm</td>
          <td>1 闭合 ２未闭,cm× cm</td>
          <td class="text-center">--</td>
        </tr>
        <tr>
          <th>眼 睛</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>耳外观</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>听 力</th>
          <td>1 通过 2 未通过</td>
          <td class="text-center">--</td>
          <td>1 通过 2 未通过</td>
          <td class="text-center">--</td>
        </tr>
        <tr>
          <th>出牙/龋齿数（颗）</th>
          <td class="text-center">/</td>
          <td class="text-center">/</td>
          <td class="text-center">/</td>
          <td class="text-center">/</td>
        </tr>
        <tr>
          <th>胸 部</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>腹 部</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>四 肢</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>步 态</th>
          <td class="text-center">---------</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>可疑佝偻病体征</th>
          <td class="text-center">--</td>
          <td>1 无 2 颅骨软化</td>
          <td>1 无 2 肋串珠<br>3 肋软骨沟<br>4 鸡胸 5 手足镯<br>6 颅骨软化 7 方颅</td>
          <td>1 无 2 肋串珠<br>3 肋软骨沟<br>4 鸡胸 5 手足镯<br>6 颅骨软化 7 方颅</td>
        </tr>
        <tr>
          <th>血红蛋白值</th>
          <td class="text-center">--</td>
          <td class="text-center">--</td>
          <td class="text-center">g/L</td>
          <td class="text-center">g/L</td>
        </tr>
        <tr>
          <th colspan="2">户外活动</th>
          <td>小时/日</td>
          <td>小时/日</td>
          <td>小时/日</td>
          <td>小时/日</td>
        </tr>
        <tr>
          <th colspan="2">服用维生素 D</th>
          <td>IU/日</td>
          <td>IU/日</td>
          <td>IU/日</td>
          <td>IU/日</td>
        </tr>
        <tr>
          <td colspan="2">发育评估</td>
          <td>1.呼唤名字无反应<br>2.不会模仿“再见”<br>或“欢迎”动作<br>3.不会用拇食指对捏<br>小物品<br>4.不会扶物站立</td>
          <td>1.不会有意识叫“爸<br>爸”或“妈妈”<br>2.不会按要求指人或<br>物<br>3.与人无目光交</td>
          <td>1.不会说 3 个物品的<br>名称<br>2.不会按吩咐做简单<br>事情<br>3.不会用勺吃饭<br>4.不会扶栏上楼梯/<br>台阶</td>
          <td>1.不会说 2-3 个字的<br>短语<br>2.兴趣单一、刻板<br>3.不会示意大小便<br>4.不会跑</td>
        </tr>
        <tr>
          <th colspan="2">两次随访间患病情况</th>
          <td>1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
          <td>1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
          <td>1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
          <td>1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
        </tr>
        <tr>
          <th colspan="2">转诊建议</th>
          <td>1 无 2 有<br>原因：<br>机构及科室：</td>
          <td>1 无 2 有<br>原因：<br>机构及科室：</td>
          <td>1 无 2 有<br>原因：<br>机构及科室：</td>
          <td>1 无 2 有<br>原因：<br>机构及科室：</td>
        </tr>
        <tr>
          <th colspan="2">指 导</th>
          <td>1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
          <td>1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
          <td>1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
          <td>1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
        </tr>
        <tr>
          <th colspan="2">下次随访日期</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th colspan="2">随访医生签名</th>
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
    name: 'monthsOldChildrenHealthCheckRecordsTOSO',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>1～8月龄儿童健康检查记录表');
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
