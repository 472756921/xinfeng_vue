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
        <th colspan="2">月 龄</th>
        <th>3岁</th>
        <th>4岁</th>
        <th>5岁</th>
        <th>6岁</th>
      </tr>
      <tr>
        <td colspan="2">随访日期</td>
        <td v-for="data in tableData">{{data.followUpDate}}</td>
        <td v-for="n in 4-tableData.length"></td>
      </tr>
      <tr>
        <td colspan="2">体重/kg</td>
        <td v-for="data in tableData"><span class="unline">{{data.weight.split(',')[0]}}</span>
          上<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('上') != -1"></span>
          中<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('中') != -1"></span>
          下<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('下') != -1"></span>
        </td>
        <td v-for="n in 4-tableData.length">____上 中 下</td>
      </tr>
      <tr>
        <td colspan="2">身高/cm</td>
        <td v-for="data in tableData"><span class="unline">{{data.height.split(',')[0]}}</span>
          上 <span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('上') != -1"></span>
          中<span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('中') != -1"></span>
          下<span class="icon iconfont icon-gou gou" v-if="data.height.split(',')[1].indexOf('下') != -1"></span>
        </td>
        <td v-for="n in 4-tableData.length">____上 中 下</td>
      </tr>
      <tr>
        <td colspan="2">体重/身高</td>
        <td v-for="data in tableData"><span class="unline">{{data.heightWithWeight.split(',')[0]}}</span>
          上 <span class="icon iconfont icon-gou gou" v-if="data.heightWithWeight.split(',')[1].indexOf('上') != -1"></span>
          中<span class="icon iconfont icon-gou gou" v-if="data.heightWithWeight.split(',')[1].indexOf('中') != -1"></span>
          下<span class="icon iconfont icon-gou gou" v-if="data.heightWithWeight.split(',')[1].indexOf('下') != -1"></span>
        </td>
        <td v-for="n in 4-tableData.length">____上 中 下</td>
      </tr>
      <tr>
        <td colspan="2">体格发育评价</td>
        <td v-for="data in tableData">
          1 正常  <span class="icon iconfont icon-gou gou" v-if="data.physicalGrowth == 1"></span>
          2 低体重<span class="icon iconfont icon-gou gou" v-if="data.physicalGrowth == 2"></span>
          3 消瘦<span class="icon iconfont icon-gou gou" v-if="data.physicalGrowth == 3"></span>
          4 生长迟缓<span class="icon iconfont icon-gou gou"v-if="data.physicalGrowth == 4"></span>
          5 超重<span class="icon iconfont icon-gou gou" v-if="data.physicalGrowth == 5"></span>
        </td>
        <td v-for="n in 4-tableData.length">1 正常 2 低体重<br>3 消瘦 4 生长迟缓<br>5 超重</td>
      </tr>
      <tr>
        <td rowspan="7">体<br>格<br>检<br>查</td>
        <td>视 力</td>
        <td v-for="(data,i) in tableData" v-if="i!=0">{{data.vision}}</td>
        <td v-else="i==0">--</td>
      </tr>
      <tr>
        <td>听 力</td>
        <td>
          1 通过<span class="icon iconfont icon-gou gou" v-if="tableData[0].hearing!=undefined&&tableData[0].hearing == 1"></span>
          2 未过<span class="icon iconfont icon-gou gou" v-if="tableData[0].hearing!=undefined&&tableData[0].hearing == 2"></span>
        </td>
        <td>--</td>
        <td>--</td>
        <td>--</td>
      </tr>
      <tr>
        <td>牙数（颗）/龋齿数</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
      </tr>
      <tr>
        <td>胸 部</td>
        <td v-for="data in tableData">
          <span>1未见异常</span>
          <span class="icon iconfont icon-gou gou" v-if="data.chest == '1'"></span>
          <span>2异常</span>
          <span class="icon iconfont icon-gou gou" v-if="data.chest == '2'"></span>
        </td>
        <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
      </tr>
      <tr>
        <td>腹 部</td>
        <td v-for="data in tableData">
          <span>1未见异常</span>
          <span class="icon iconfont icon-gou gou" v-if="data.abdomen == '1'"></span>
          <span>2异常</span>
          <span class="icon iconfont icon-gou gou" v-if="data.abdomen == '2'"></span>
        </td>
        <td v-for="n in 4-tableData.length">1未见异常 2异常</td>
      </tr>
      <tr>
        <td>血红蛋白值*</td>
        <td v-for="data in tableData">
          <span class="unline">{{data.hemoglobinValue}}</span>g/L
        </td>
        <td v-for="n in 4-tableData.length">g/L</td>
      </tr>
      <tr>
        <td>其他</td>
        <td v-for="data in tableData">
          {{data.other}}
        </td>
        <td v-for="n in 4-tableData.length"></td>
      </tr>
      <tr>
        <td colspan="2">发育评估</td>
        <td>
          1.不会说自己的名字<span v-if="tableData[0]!=undefined&&tableData[0].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
          2.不会玩“拿棍当马骑”等假想游戏<span v-if="tableData[0]!=undefined&&tableData[0].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
          3.不会模仿画圆<span v-if="tableData[0]!=undefined&&tableData[0].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
          4.不会双脚跳<span v-if="tableData[0]!=undefined&&tableData[0].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span>
        </td>
        <td>
          1.不会说带形容词的句子<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
          2.不能按要求等待或轮流<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
          3.不会独立穿衣<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
          4.不会单脚站立<span v-if="tableData[1]!=undefined&&tableData[1].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span>
        </td>
        <td>
          1.不能简单叙说事情经过<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
          2.不知道自己的性别<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
          3.不会用筷子吃饭<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
          4.不会单脚跳<span v-if="tableData[2]!=undefined&&tableData[2].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span>
        </td>
        <td>1
          .不会表达自己的感受或想法<span v-if="tableData[3]!=undefined&&tableData[2].developmentEvaluation.indexOf('1') != -1" class="icon iconfont icon-gou gou"></span><br>
          2.不会玩角色扮演的集体游戏<span v-if="tableData[3]!=undefined&&tableData[2].developmentEvaluation.indexOf('2') != -1" class="icon iconfont icon-gou gou"></span><br>
          3.不会画方形<span v-if="tableData[3]!=undefined&&tableData[2].developmentEvaluation.indexOf('3') != -1" class="icon iconfont icon-gou gou"></span><br>
          4.不会奔跑<span v-if="tableData[3]!=undefined&&tableData[2].developmentEvaluation.indexOf('4') != -1" class="icon iconfont icon-gou gou"></span>
        </td>
      </tr>
      <tr>
        <td colspan="2">两次随访间患病情况</td>
        <td class="" v-for="data in tableData">
          1 无 <span class="icon iconfont icon-gou gou" v-if="data.twoFollowUpVisits.indexOf('1') != -1"></span><br>
          2 肺炎 <span class="unline">{{data.pneumonia}}</span> 次 <span class="icon iconfont icon-gou gou" v-if="data.pneumonia != null&&data.twoFollowUpVisits.indexOf('2') != -1"></span> <br>
          3 腹泻 <span class="unline">{{data.diarrhea}}</span> 次 <span class="icon iconfont icon-gou gou" v-if="data.diarrhea != null&&data.twoFollowUpVisits.indexOf('3') != -1"></span> <br>
          4 外伤 <span class="unline">{{data.trauma}}</span> 次 <span class="icon iconfont icon-gou gou" v-if="data.trauma != null&&data.twoFollowUpVisits.indexOf('4') != -1"></span><br>
          5 其他 <span class="unline">{{data.otherConditions}}</span> <span class="icon iconfont icon-gou gou" v-if="data.otherConditions != null&&data.twoFollowUpVisits.indexOf('5') != -1"></span>
        </td>
        <td v-for="n in 4-tableData.length">1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
      </tr>
      <tr>
        <td colspan="2">转诊建议</td>
        <td class="" v-for="data in tableData">
          1 无 <span class="icon iconfont icon-gou gou" v-if="data.referralcode == '1'"></span>
          2 有 <span class="icon iconfont icon-gou gou" v-if="data.referralcode == '2'"></span><br>
          原因：<span class="unline">{{data.referralReason}}</span><br>
          机构及科室：<span class="unline">{{data.referralInstitution}}</span>
        </td>
        <td v-for="n in 4-tableData.length">1 无 2 有<br>原因：<br>机构及科室：</td>
      </tr>
      <tr>
        <td colspan="2">指 导</td>
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
        <td colspan="2">下次随访日期</td>
        <td v-for="data in tableData">{{data.nextVisitDate}}</td>
        <td v-for="n in 4-tableData.length"></td>
      </tr>
      <tr>
        <td colspan="2">随访医生签名</td>
        <td v-for="data in tableData">{{data.followYourDoctor}}</td>
        <td v-for="n in 4-tableData.length"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getThreeToSixChildHealthRecord } from '../../interface/index';

  export default {
    name: 'monthsOldChildrenHealthCheckRecordsTS',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>3~6岁儿童健康检查记录表');
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
          getThreeToSixChildHealthRecord(),
          { params: { customreId: 1 }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.tableData = res.body.results;
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
