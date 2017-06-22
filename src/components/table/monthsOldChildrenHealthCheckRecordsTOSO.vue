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
          <td v-for="data in tableData">{{data.birthday}}</td>
          <td v-for="n in 4-tableData.length"></td>
        </tr>
        <tr>
          <th colspan="2">体重/kg</th>
          <td v-for="data in tableData"><span class="unline">{{data.weight.split(',')[0]}}</span>
            上<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('上') != -1"></span>
            中<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('中') != -1"></span>
            下<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('下') != -1"></span>
          </td>
          <td v-for="n in 4-tableData.length">____上 中 下</td>
        </tr>
        <tr>
          <th colspan="2">身长(高)/cm</th>
          <td v-for="data in tableData"><span class="unline">{{data.height.split(',')[0]}}</span>
            上 <span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('上') != -1"></span>
            中<span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('中') != -1"></span>
            下<span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('下') != -1"></span>
          </td>
          <td v-for="n in 4-tableData.length">____上 中 下</td>
        </tr>
        <tr>
          <th rowspan="13" style="line-height: 700px">体格检查</th>
          <th>面 色</th>
          <td v-for="data in tableData">
            <span>1红润</span>
            <span class="icon iconfont icon-gou gou" v-if="data.complexion == '1'"></span>
            <span>2其他</span>
            <span class="icon iconfont icon-gou gou" v-if="data.complexion == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1红润 2其他</td>
        </tr>
        <tr>
          <th>皮 肤</th>
          <td v-for="data in tableData">
            <span>1红润</span>
            <span class="icon iconfont icon-gou gou" v-if="data.complexion == '1'"></span>
            <span>2其他</span>
            <span class="icon iconfont icon-gou gou" v-if="data.complexion == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1红润 2其他</td>
        </tr>
        <tr>
          <th>前 囟</th>
          <td v-for="data in tableData">
            <span>1闭合</span>
            <span class="icon iconfont icon-gou gou" v-if="data.bregmatic.split('^')[0] == '1'"></span>
            <span>2未闭</span>
            <span class="icon iconfont icon-gou gou" v-if="data.bregmatic.split('^')[0] == '2'"><br/><span class="unline">{{data.bregmatic.split('^')[1]}}</span>CM</span>
          </td>
          <td v-for="n in 3-tableData.length"></td>
          <td class="text-center">--</td>
        </tr>
        <tr>
          <th>眼 睛</th>
          <td v-for="data in tableData">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.eye == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.eye == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
        </tr>
        <tr>
          <th>耳外观</th>
          <td v-for="data in tableData">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.ear == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.ear == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
        </tr>
        <tr>
          <th>听 力</th>
          <td>
            <span>1通过</span>
            <span class="icon iconfont icon-gou gou" v-if="tableData[0]!=undefined&&tableData[0].hearing == '1'"></span>
            <span>2未通过</span>
            <span class="icon iconfont icon-gou gou" v-if="tableData[0]!=undefined&&tableData[0].hearing == '2'"></span>
          </td>
          <td class="text-center">--</td>
          <td>
            <span>1通过</span>
            <span class="icon iconfont icon-gou gou" v-if="tableData[1]!=undefined&&tableData[1].hearing == '1'"></span>
            <span>2未通过</span>
            <span class="icon iconfont icon-gou gou" v-if="tableData[1]!=undefined&&tableData[1].hearing == '2'"></span>
          </td>
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
          <td v-for="data in tableData">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.chest == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.chest == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
        </tr>
        <tr>
          <th>腹 部</th>
          <td v-for="data in tableData">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.abdomen == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.abdomen == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
        </tr>
        <tr>
          <th>四 肢</th>
          <td v-for="data in tableData">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.limb == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.limb == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
        </tr>
        <tr>
          <th>步 态</th>
          <td class="text-center">---------</td>
          <td v-for="(data,i) in tableData" v-if="i!=0">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.gait == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.gait == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
        </tr>
        <tr>
          <th>可疑佝偻病体征</th>
          <td class="text-center">--</td>
          <td v-for="(data,i) in tableData"  v-if="i!=1">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.suspectedRicketsSign == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.suspectedRicketsSign == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
        </tr>
        <tr>
          <th>血红蛋白值</th>
          <td class="">--</td>
          <td class="">--</td>
          <td v-if="tableData[2]!=undefined">{{tableData[2].hemoglobinValue}} g/L</td>
          <td v-else>g/L</td>
          <td v-if="tableData[3]!=undefined">{{tableData[3].hemoglobinValue}} g/L</td>
          <td v-else>g/L</td>
        </tr>
        <tr>
          <th colspan="2">户外活动</th>
          <td class="" v-for="data in tableData">{{data.outdoorActivities}} 小时/日</td>
          <td v-for="n in 4-tableData.length">小时/日</td>
        </tr>
        <tr>
          <th colspan="2">服用维生素 D</th>
          <td class="" v-for="data in tableData">{{data.takeVitaminD}} IU/日</td>
        <td v-for="n in 4-tableData.length">IU/日</td>
        </tr>
        <tr>
          <th colspan="2">发育评估</th>
          <td>
            1.呼唤名字无反应 <span v-if="tableData[0]!=undefined&&tableData[0].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            2.不会模仿“再见”或<br>“欢迎”动作 <span v-if="tableData[0]!=undefined&&tableData[0].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
            3.不会用拇食指对捏<br>小物品 <span v-if="tableData[0]!=undefined&&tableData[0].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            4.不会扶物站立 <span v-if="tableData[0]!=undefined&&tableData[0].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span></td>
          <td>
            1.不会有意识叫“爸<br>爸”或“妈妈”<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            2.不会按要求指人或<br>物<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
            3.与人无目光交<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span>
          </td>
          <td>
            1.不会说 3 个物品的<br>名称<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            2.不会按吩咐做简单<br>事情<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
            3.不会用勺吃饭<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
            4.不会扶栏上楼梯台阶<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span><br>
          </td>
          <td>
            1.不会说 2-3 个字的<br>短语<span v-if="tableData[3]!=undefined&&tableData[3].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            2.兴趣单一、刻板<span v-if="tableData[3]!=undefined&&tableData[3].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
            3.不会示意大小便<span v-if="tableData[3]!=undefined&&tableData[3].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
            4.不会跑<span v-if="tableData[3]!=undefined&&tableData[3].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">两次随访间患病情况</th>
          <td class="" v-for="data in tableData">
            1 无 <span class="icon iconfont icon-gou gou" v-if="data.twoFollowUpVisits == '1'"></span><br>
            2 肺炎 {{data.pneumonia}} 次 <span class="icon iconfont icon-gou gou" v-if="data.pneumonia != null"></span> <br>
            3 腹泻 {{data.diarrhea}} 次 <span class="icon iconfont icon-gou gou" v-if="data.diarrhea != null"></span> <br>
            4 外伤 {{data.trauma}} 次 <span class="icon iconfont icon-gou gou" v-if="data.trauma != null"></span><br>
            5 其他 <span class="unline">{{data.otherConditions}}</span> <span class="icon iconfont icon-gou gou" v-if="data.otherConditions != null"></span>
          </td>
          <td v-for="n in 4-tableData.length">1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
        </tr>
        <tr>
          <th colspan="2">转诊建议</th>
          <td class="" v-for="data in tableData">
            1 无 <span class="icon iconfont icon-gou gou" v-if="data.referralcode == '1'"></span>
            2 有 <span class="icon iconfont icon-gou gou" v-if="data.referralcode == '2'"></span><br>
            原因：{{data.referralReason}}<br>
            机构及科室：{{data.referralInstitution}}
          </td>
          <td v-for="n in 4-tableData.length">1 无 2 有<br>原因：<br>机构及科室：</td>
        </tr>
        <tr>
          <th colspan="2">指 导</th>
          <td class="" v-for="data in tableData">
            1 科学喂养 <span v-if="data.referralcode.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            2 生长发育 <span v-if="data.referralcode.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
            3 疾病预防 <span v-if="data.referralcode.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
            4 预防伤害 <span v-if="data.referralcode.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span><br>
            5 口腔保健 <span v-if="data.referralcode.indexOf('5') != -1" class="icon iconfont icon-gou gou"></span><br>
            6 其他<span class="unline">{{data.otherGuidance}}</span> <span v-if="data.otherGuidance!= ''" class="icon iconfont icon-gou gou"></span> <br>
          </td>
          <td v-for="n in 4-tableData.length">1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
        </tr>
        <tr>
          <th colspan="2">下次随访日期</th>
          <td v-for="data in tableData">{{data.nextVisitDate}}</td>
          <td v-for="n in 4-tableData.length"></td>
        </tr>
        <tr>
          <th colspan="2">随访医生签名</th>
          <td v-for="data in tableData">{{data.followYourDoctor}}</td>
          <td v-for="n in 4-tableData.length"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getTecondExamination } from '../../interface/index';

  export default {
    name: 'monthsOldChildrenHealthCheckRecordsTOSO',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>12～30月龄儿童健康检查记录表');
      this.getData();
    },
    data() {
      return {
        tableData: '',
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      getData() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getTecondExamination(),
          { params: { id: 1 }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.tableData = res.body;
        }).catch((error) => {
          console.log(error);
        });
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
  .unline{
    border-bottom: 1px solid #000 ;
    color: #cc0000;
    padding: 0 5px;
  }
  .gou{
    color: green;
  }
</style>
