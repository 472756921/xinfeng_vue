<template>
  <div class="content table-responsive">
    <h5 class="check"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">1～8月龄儿童健康检查记录表</h3>
        <span>姓名:</span>
        <span class="pull-right">编号：123-122332</span>
      </caption >
      <tbody>
        <tr>
          <th colspan="2">月 龄</th>
          <th>满 月</th>
          <th>3 月龄</th>
          <th>6 月龄</th>
          <th>8 月龄</th>
        </tr>
        <tr>
          <th colspan="2">随访日期</th>
          <td v-for="data in tableData">{{data.birthday}}</td>
          <td v-for="n in 4-tableData.length"></td>
        </tr>
        <tr>
          <th colspan="2">体 重/kg</th>
          <td v-for="data in tableData"><span class="unline">{{data.weight.split(',')[0]}}</span>
            上<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('上') != -1"></span>
            中<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('中') != -1"></span>
            下<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('下') != -1"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">身 长/cm</th>
          <td v-for="data in tableData"><span class="unline">{{data.height.split(',')[0]}}</span>
            上 <span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('上') != -1"></span>
            中<span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('中') != -1"></span>
            下<span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('下') != -1"></span>
          </td>
          <td v-for="n in 4-tableData.length">____上 中 下</td>
        </tr>
        <tr>
          <th colspan="2">头 围/cm</th>
          <td v-for="data in tableData">{{data.headCircumference}}</td>
        </tr>
        <tr>
          <th rowspan="16" style="line-height: 700px">体格检查</th>
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
            <span class="icon iconfont icon-gou gou" v-if="data.bregmatic.split('_')[0] == '1'"></span>
            <span>2未闭</span>
            <span class="icon iconfont icon-gou gou" v-if="data.bregmatic.split('_')[0] == '2'"><br/><span class="unline">{{data.bregmatic.split('_')[1]}}</span>CM</span>
          </td>
          <td v-for="n in 4-tableData.length"></td>
        </tr>
        <tr>
          <th>颈部包块</th>
          <td v-for="(data, i) in tableData" v-if="i!=3">
            <span>1有</span>
            <span class="icon iconfont icon-gou gou" v-if="data.cervicalMass.split('_')[0] == '1'"></span>
            <span>2无</span>
          </td>
          <td>----</td>
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
          <th>耳</th>
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
          <td>
            <span>1通过</span>
            <span class="icon iconfont icon-gou gou" v-if="tableData[1]!=undefined&&tableData[1].hearing == '1'"></span>
            <span>2未通过</span>
            <span class="icon iconfont icon-gou gou" v-if="tableData[1]!=undefined&&tableData[1].hearing == '2'"></span>
          </td>
          <td class="text-center">--</td>
          <td>
            <span>1通过</span>
            <span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3].hearing == '1'"></span>
            <span>2未通过</span>
            <span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3].hearing == '2'"></span>
          </td>
        </tr>
        <tr>
          <th>口 腔</th>
          <td v-for="data in tableData">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.oralCavity == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.oralCavity == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
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
          <th>脐 部</th>
          <td>1 未脱 2 脱落 3 脐<br>部有渗出 4 其他</td>
          <td>1 未见异常 2 异常</td>
          <td class="text-center">--</td>
          <td class="text-center">--</td>
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
          <th>可疑佝偻病症状</th>
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
          <th>可疑佝偻病体征</th>
          <td class="text-center">--</td>
          <td>1 无<span class="icon iconfont icon-gou gou" v-if="tableData[1]!=undefined&&tableData[1].suspectedRicketsSign == 1"></span> 2 颅骨软化<span class="icon iconfont icon-gou gou" v-if="tableData[1]!=undefined&&tableData[1].suspectedRicketsSign == 2"></span></td>
          <td>1 无<span class="icon iconfont icon-gou gou" v-if="tableData[2]!=undefined&&tableData[2].suspectedRicketsSign == 1"></span> 2 肋串珠<span class="icon iconfont icon-gou gou" v-if="tableData[2]!=undefined&&tableData[2].suspectedRicketsSign == 2"></span><br>
            3 肋软骨沟<span class="icon iconfont icon-gou gou" v-if="tableData[2]!=undefined&&tableData[2].suspectedRicketsSign == 3"></span><br>4 鸡胸<span class="icon iconfont icon-gou gou" v-if="tableData[2]!=undefined&&tableData[2].suspectedRicketsSign == 4"></span>
            5 手足镯<span class="icon iconfont icon-gou gou" v-if="tableData[2]!=undefined&&tableData[2].suspectedRicketsSign == 5"></span><br>
            6 颅骨软化<span class="icon iconfont icon-gou gou" v-if="tableData[2]!=undefined&&tableData[2].suspectedRicketsSign == 6"></span> 7 方颅<span class="icon iconfont icon-gou gou" v-if="tableData[2]!=undefined&&tableData[2].suspectedRicketsSign == 7"></span>
          </td>
          <td>1 无<span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3].suspectedRicketsSign == 1"></span> 2 肋串珠<span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3]!=undefined&&tableData[3].suspectedRicketsSign == 2"></span><br>
            3 肋软骨沟<span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3].suspectedRicketsSign == 3"></span><br>4 鸡胸<span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3]!=undefined&&tableData[3].suspectedRicketsSign == 4"></span>
            5 手足镯<span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3].suspectedRicketsSign == 5"></span><br>
            6 颅骨软化<span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3].suspectedRicketsSign == 6"></span> 7 方颅<span class="icon iconfont icon-gou gou" v-if="tableData[3]!=undefined&&tableData[3]!=undefined&&tableData[3].suspectedRicketsSign == 7"></span>
          </td>
        </tr>
        <tr>
          <th>肛门/外生殖器</th>
          <td v-for="data in tableData">
            <span>1未见异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.anus == '1'"></span>
            <span>2异常</span>
            <span class="icon iconfont icon-gou gou" v-if="data.anus == '2'"></span>
          </td>
          <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
        </tr>
        <tr>
          <th>血红蛋白值</th>
          <td class="">--</td>
          <td class="">--</td>
          <td v-if="tableData[2]!=undefined"><span class="unline">{{tableData[2].hemoglobinValue}}</span> g/L</td>
          <td v-else>g/L</td>
          <td v-if="tableData[3]!=undefined"><span class="unline">{{tableData[3].hemoglobinValue}}</span> g/L</td>
          <td v-else>g/L</td>
        </tr>
        <tr>
          <th colspan="2">户外活动</th>
          <td class="" v-for="data in tableData"><span class="unline">{{data.outdoorActivities}}</span> 小时/日</td>
          <td v-for="n in 4-tableData.length">小时/日</td>
        </tr>
        <tr>
          <th colspan="2">服用维生素 D</th>
          <td class="" v-for="data in tableData"><span class="unline">{{data.takeVitaminD}}</span> IU/日</td>
          <td v-for="n in 4-tableData.length">IU/日</td>
        </tr>
        <tr>
          <th colspan="2">发育评估</th>
          <td class="text-center">---------</td>
          <td>
            1.对很大声音没有反应<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            2.逗引时不发音或不会微笑<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
            3.不注视人脸,不追视移动人或物品<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
            4.俯卧时不会抬头<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span>
          </td>
          <td>
            1.发音少，不会笑出声<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            2.不会伸手抓物<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
            3.紧握拳松不开<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
            4.不能扶坐<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span>
          </td>
          <td>
            1.听到声音无应答<span v-if="tableData[3]!=undefined&&tableData[2].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
            2.不会区分生人和熟人<span v-if="tableData[3]!=undefined&&tableData[2].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
            3.双手间不会传递玩具<span v-if="tableData[3]!=undefined&&tableData[2].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
            4.不会独坐<span v-if="tableData[3]!=undefined&&tableData[2].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">两次随访间患病情况</th>
          <td class="" v-for="data in tableData">
            1 无 <span class="icon iconfont icon-gou gou" v-if="data.twoFollowUpVisits == '1'"></span><br>
            2 肺炎 <span class="unline">{{data.pneumonia}}</span> 次 <span class="icon iconfont icon-gou gou" v-if="data.pneumonia != null"></span> <br>
            3 腹泻 <span class="unline">{{data.diarrhea}}</span> 次 <span class="icon iconfont icon-gou gou" v-if="data.diarrhea != null"></span> <br>
            4 外伤 <span class="unline">{{data.trauma}}</span> 次 <span class="icon iconfont icon-gou gou" v-if="data.trauma != null"></span><br>
            5 其他 <span class="unline">{{data.otherConditions}}</span> <span class="icon iconfont icon-gou gou" v-if="data.otherConditions != null"></span>
          </td>
          <td v-for="n in 4-tableData.length">1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
        </tr>
        <tr>
          <th colspan="2">转诊建议</th>
          <td class="" v-for="data in tableData">
            1 无 <span class="icon iconfont icon-gou gou" v-if="data.referralcode == '1'"></span>
            2 有 <span class="icon iconfont icon-gou gou" v-if="data.referralcode == '2'"></span><br>
            原因：<span class="unline">{{data.referralReason}}</span><br>
            机构及科室：<span class="unline">{{data.referralInstitution}}</span>
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
  import { getUserBabyOE } from '../../interface/index';

  export default {
    name: 'monthsOldChildrenHealthCheckRecordsOE',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>1～8月龄儿童健康检查记录表');
      const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
      this.$http.get(
        getUserBabyOE(),
        { params: { id: 1 }, headers: { authToken: authTokenes } },
      ).then((res) => {
        this.tableData = res.body;
      }).catch((error) => {
        console.log(error);
      });
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
