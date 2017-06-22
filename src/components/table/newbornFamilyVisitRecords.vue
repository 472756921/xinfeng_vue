<template>
  <div class="content table-responsive">
    <h5 class="check"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">新生儿家庭访视记录表</h3>
        <span>姓名：{{tableData.name}}</span>
        <span class="pull-right">编号：{{tableData.code}}</span>
      </caption >
      <tbody>
        <tr>
          <td>性 别</td>
          <td colspan="2">1 男 2 女 9 未说明的性别 0 未知的性别 <span class="checkBox_free pull-right">{{tableData.sex}}</span></td>
          <td>出生日期&nbsp;&nbsp;&nbsp;</td>
          <td>{{tableData.birthDay}}</td>
        </tr>
        <tr>
          <td>身份证号&nbsp;&nbsp;&nbsp;</td>
          <td colspan="2">{{tableData.idNumber}}</td>
          <td>家庭住址&nbsp;&nbsp;&nbsp;</td>
          <td>{{tableData.idNumber}}</td>
        </tr>
        <tr>
          <td>父亲&nbsp;&nbsp;&nbsp;</td>
          <td>姓名&nbsp;&nbsp;&nbsp;{{tableData.parentMaleName}}</td>
          <td>职业&nbsp;&nbsp;&nbsp;{{tableData.parentMaleOccupation}}</td>
          <td>联系电话&nbsp;&nbsp;&nbsp;{{tableData.parentMalePhone}}</td>
          <td>出生日期&nbsp;&nbsp;&nbsp;{{tableData.parentMaleBirthDay}}</td>
        </tr>
        <tr>
          <td>母亲&nbsp;&nbsp;&nbsp;</td>
          <td>姓名&nbsp;&nbsp;&nbsp;{{tableData.parentFamaleName}}</td>
          <td>职业&nbsp;&nbsp;&nbsp;{{tableData.parentFamaleOccupation}}</td>
          <td>联系电话&nbsp;&nbsp;&nbsp;{{tableData.parentFamalePhone}}</td>
          <td>出生日期&nbsp;&nbsp;&nbsp;{{tableData.parentFamaleBirthDay}}</td>
        </tr>
        <tr>
          <td colspan="2">出生孕周&nbsp;&nbsp;&nbsp;<span class="unline">{{tableData.birthWeek}}</span> 周</td>
          <td colspan="3">母亲妊娠期患病情况 &nbsp;&nbsp;&nbsp;1 无 2 糖尿病 3 妊娠期高血压 4 其他</td>
        </tr>
        <tr>
          <td colspan="3">助产机构名称：</td>
          <td colspan="2">出生情况 &nbsp;&nbsp;&nbsp;1 顺产 2 胎头吸引 3 产钳 4 剖宫<br>5 双多胎 6 臀位 7 其他 <span class="checkBox_free pull-right">{{tableData.birthEvent}}</span></td>
        </tr>
        <tr>
          <td colspan="3">新生儿窒息&nbsp;&nbsp;&nbsp; 1 无 2 有<br>(Apgar 评分：1min 5min 不详）<span class="checkBox_free pull-right">{{tableData.birthAsphyxia}}</span></td>
          <td colspan="2">畸型&nbsp;&nbsp;&nbsp; 1 无 2 有</td>
        </tr>
        <tr>
          <td colspan="5">新生儿听力筛查：&nbsp;&nbsp;&nbsp;1 通过 2 未通过 3 未筛查 4 不详</td>
        </tr>
        <tr>
          <td colspan="5">新生儿疾病筛查：&nbsp;&nbsp;&nbsp;1 未进行 2 检查均阴性 3 甲低 4 苯丙酮尿症 5 其他遗传代谢病</td>
        </tr>
        <tr>
          <td colspan="2">新生儿出生体重&nbsp;&nbsp;&nbsp; kg</td>
          <td colspan="2">目前体重 &nbsp;&nbsp;&nbsp;kg</td>
          <td>出生身长&nbsp;&nbsp;&nbsp; cm</td>
        </tr>
        <tr>
          <td colspan="2">喂养方式 &nbsp;&nbsp;&nbsp;1 纯母乳 2 混合 3 人工</td>
          <td colspan="2">吃奶量 &nbsp;&nbsp;&nbsp;mL/次</td>
          <td>吃奶次数 &nbsp;&nbsp;&nbsp;次/日</td>
        </tr>
        <tr>
          <td colspan="2">呕吐&nbsp;&nbsp;&nbsp; 1 无 2 有</td>
          <td colspan="2">大便&nbsp;&nbsp;&nbsp; 1 糊状 2 稀 3 其他</td>
          <td>大便次数&nbsp;&nbsp;&nbsp; 次/日</td>
        </tr>
        <tr>
          <td colspan="2">体温&nbsp;&nbsp;&nbsp; ℃</td>
          <td colspan="2">心率&nbsp;&nbsp;&nbsp; 次/分钟</td>
          <td>呼吸频率&nbsp;&nbsp;&nbsp; 次/分钟</td>
        </tr>
        <tr>
          <td colspan="2">面色&nbsp;&nbsp;&nbsp; 1 红润 2 黄染 3 其他</td>
          <td colspan="3">黄疸部位&nbsp;&nbsp;&nbsp; 1 无 2 面部 3 躯干 4 四肢 5 手足</td>
        </tr>
        <tr>
          <td colspan="5">前囟 &nbsp;&nbsp;&nbsp;cm × cm &nbsp;&nbsp;&nbsp;1 正常 2 膨隆 3 凹陷 4 其他</td>
        </tr>
        <tr>
          <td colspan="3">眼 睛&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
          <td colspan="2">四肢活动度&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
        </tr>
        <tr>
          <td colspan="3">耳外观&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
          <td colspan="2">颈部包块&nbsp;&nbsp;&nbsp; 1 无 2 有</td>
        </tr>
        <tr>
          <td colspan="3">鼻&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
          <td colspan="2">皮肤&nbsp;&nbsp;&nbsp; 1 未见异常 2 湿疹 3 糜烂 4 其他</td>
        </tr>
        <tr>
          <td colspan="3">口腔&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
          <td colspan="2">肛门&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
        </tr>
        <tr>
          <td colspan="3">心肺听诊&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
          <td colspan="2">胸部&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
        </tr>
        <tr>
          <td colspan="3">腹部触诊&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
          <td colspan="2">脊柱&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
        </tr>
        <tr>
          <td colspan="3">外生殖器&nbsp;&nbsp;&nbsp; 1 未见异常 2 异常</td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td colspan="5">脐带&nbsp;&nbsp;&nbsp; 1 未脱 2 脱落 3 脐部有渗出 4 其他</td>
        </tr>
        <tr>
          <td colspan="5">转诊建议&nbsp;&nbsp;&nbsp; 1 无 2 有 原因：<br> 机构及科室：</td>
        </tr>
        <tr>
          <td colspan="5">指导&nbsp;&nbsp;&nbsp; 1 喂养指导 2 发育指导 3 防病指导 4 预防伤害指导 5 口腔保健指导 6.其他</td>
        </tr>
        <tr>
          <td colspan="3">本次访视日期 年 月 日</td>
          <td colspan="2">下次随访地点</td>
        </tr>
        <tr>
          <td colspan="3">下次随访日期 年 月 日</td>
          <td colspan="2">随访医生签名</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getNewBaby } from '../../interface/index';

  export default {
    name: 'newbornFamilyVisitRecords',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>新生儿家庭访视记录表');
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
          getNewBaby(),
          { params: { Id: 1 }, headers: { authToken: authTokenes } },
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
  .checkBox_free{
    border: 1px solid #999;
    padding:0 4px;
    font-size: 12px;
  }
  .unline{
    border-bottom: 1px solid #000 ;
    color: #cc0000;
    padding: 0 5px;
  }
</style>
