<template>
  <div class="table-responsive col-xs-12 userInfo">
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <button class="btn btn-info hidden-print" @click="checkUserPI">查看生理指标</button>
    <br class="hidden-print"/>
    <div class="col-xs-12 col-lg-8 table-responsive" style="padding:0;margin-right: 10px">
      <table class="table table-bordered">
        <caption class="">
          <h3 class="text-center">个人信息</h3>
          <span>姓名：{{userInfo.realName}}</span>
          <span class="pull-right">编号：{{userInfo.code}}</span>
        </caption >
        <tbody>
        <tr>
          <th width="165" colspan="2">性别</th>
          <td colspan="3">1男 2女 9未说明的性别 0未知的性别  <span class="checkBox">{{userInfo.gender}}</span></td>
          <th>出生日期</th>
          <td v-if="userInfo.birthday!==undefined">{{userInfo.birthday.split(' ')[0]}}</td>
        </tr>
        <tr>
          <th colspan="2">身份证号码</th>
          <td  colspan="2">{{userInfo.idCardNumber}}</td>
          <th>工作单位</th>
          <td  colspan="2">{{userInfo.address}}</td>
        </tr>
        <tr>
          <th colspan="2">本人电话</th>
          <td>{{userInfo.phoneNumber}}</td>
          <th>联系人姓名</th>
          <td>张三</td>
          <th>联系人电话</th>
          <td>17738291928</td>
        </tr>
        <tr>
          <th colspan="2">常驻类型</th>
          <td colspan="2">1户籍 2非户籍<span class="checkBox">{{userInfo.residentType}}</span></td>
          <th>民族</th>
          <td colspan="2">01汉 99少数民族
            <span class="unline" v-if="userInfo.birthday!==undefined">{{userInfo.nation!=='01'?userInfo.nation.split(' ')[1]:'01'}}</span>
            <span class="checkBox">{{userInfo.nation!=='01'?'99':'01'}}</span>
          </td>
        </tr>
        <tr>
          <th colspan="2">血型</th>
          <td colspan="5">
            1A型 2B型 3O型 4AB型 5不详 / RH 1阴性 2阳性 3不详
            <span class="checkBox">{{userInfo.bloodType}}</span><span class="pull-right">&nbsp;/&nbsp;</span>
            <span class="checkBox">{{userInfo.rh}}</span>
          </td>
        </tr>
        <tr>
          <th colspan="2">文化程度</th>
          <td colspan="5">1研究生 2大学本科 3大学专科和专科学校 4中等专业学校 5技工学校 6高中 7初中 8小学 9文盲或半文盲 10 不详 <span class="checkBox">{{userInfo.degreeOfEducation}}</span></td>
        </tr>
        <tr>
          <th colspan="2">职业</th>
          <td colspan="5">0国家机关、党群组织、企业、事业单位负责人 1专业技术人员 2办事人员和有关人员 3商业服务业人员 4农、林、牧、渔、水利业生产人员 5生产、运输设备操作人员及有关人员 6军人 7不便分类的其他人员 8无职业  <span class="checkBox">{{userInfo.occupation}}</span></td>
        </tr>
        <tr>
          <th colspan="2">婚姻情况</th>
          <td colspan="5">1未婚 2已婚 3丧偶 4离婚 5未说明的婚姻情况 <span class="checkBox">{{userInfo.marriage}}</span></td>
        </tr>
        <tr>
          <th colspan="2">医疗费用支付方式</th>
          <td colspan="5">
            1城镇职工基本医疗保险 2诚征居民基本医疗保险 3新型农村合作医疗 4贫困救助 5商业医疗保险 6全公费 7全自费 <br/> 8其他 <span class="unline">{{getTheContent(userInfo.medicalPaymentMode).ortherData}}</span>
             <span v-for="(da, index) in getTheContent(userInfo.medicalPaymentMode).data">
              <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
              <span class="checkBox">{{da}}</span>
            </span>
          </td>
        </tr>
        <tr>
          <th colspan="2">药物过敏史</th>
          <td colspan="5">
            1无 2青霉素 3碘胺 4链霉素 5其他 <span class="unline">{{getTheContent(userInfo.historyOfDrugAllergy).ortherData}}</span>
            <span v-for="(da, index) in getTheContent(userInfo.historyOfDrugAllergy).data">
              <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
              <span class="checkBox">{{da}}</span>
            </span>
          </td>
        </tr>
        <tr>
          <th colspan="2">暴露史</th>
          <td colspan="5">
            1无 2化学品 3毒物 4射线
            <span v-for="(da,index) in getTheContent(userInfo.expose).data">
              <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
              <span class="checkBox">{{da}}</span>
            </span>
          </td>
        </tr>
        <tr>
          <th rowspan="4" width="20" style="line-height: 50px">既往史</th>
          <th>疾病</th>
          <td colspan="5">
            <div>
              1无 2高血压 3糖尿病 4冠心病 5慢性阻塞性肺疾病
              6恶性肿瘤
              <span v-if="userInfo.userDiseaseManagementJson !== undefined" v-for="(data,index) in userInfo.userDiseaseManagementJson">
                <span class="unline" v-if="data.diseaseCode == 6">{{data.diseaseName}}</span>
              </span>
              7脑卒中 8严重精神障碍 9结核病 10肝炎 11其他法定传染病
              12职业病
               <span v-if="userInfo.userDiseaseManagementJson !== undefined" v-for="(data,index) in userInfo.userDiseaseManagementJson">
                <span class="unline" v-if="data.diseaseCode == 12">{{data.diseaseName}}</span>
              </span>
              13其他
               <span v-if="userInfo.userDiseaseManagementJson !== undefined" v-for="(data,index) in userInfo.userDiseaseManagementJson">
                <span class="unline" v-if="data.diseaseCode == 13">{{data.diseaseName}}</span>
              </span>
            </div>
            <span v-for="(data,index) in userInfo.userDiseaseManagementJson"  v-if="userInfo.userDiseaseManagementJson!=undefined">
              <span class="checkBox_free">{{data.diseaseCode}}</span> 确诊时间{{data.diagnosisTime.split('-')[0]}}年{{data.diagnosisTime.split('-')[1]}}月
              <span  v-if="index != userInfo.userDiseaseManagementJson.length-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <br v-if="index == 2"/>
            </span>
          </td>
        </tr>
        <tr>
          <th>手术</th>
          <td colspan="5">
            1无 2有：
            <span v-if="userInfo.operationJson!=undefined"  v-for="(data,index) in userInfo.operationJson">
              名称<span class="circle">1</span>
              <span class="unline"> {{data.operationName}} </span>
              时间<span class="unline"> {{data.operationTime.split(' ')[0]}} </span>
              <span  v-if="index != userInfo.operationJson.length-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </span>
            <span class="checkBox"  v-if="userInfo.operationJson!=undefined">{{userInfo.operationJson[0].operationCode}}</span>
          </td>
        </tr>
        <tr>
          <th>外伤</th>
          <td colspan="5">1无 2有：名称
           <span v-if="userInfo.traumaJson!=undefined"  v-for="(data,index) in userInfo.traumaJson">
              名称<span class="circle">1</span>
              <span class="unline"> {{data.traumaName}} </span>
              时间<span class="unline"> {{data.traumaTime.split(' ')[0]}} </span>
              <span  v-if="index != userInfo.traumaJson.length-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </span>
            <span class="checkBox"  v-if="userInfo.traumaJson!=undefined">{{userInfo.traumaJson[0].traumaCode}}</span>
          </td>
        </tr>
        <tr>
          <th>输血</th>
          <td colspan="5">1无 2有：名称
           <span v-if="userInfo.bloodTransfusionJson!=undefined"  v-for="(data,index) in userInfo.bloodTransfusionJson">
              名称<span class="circle">1</span>
              <span class="unline"> {{data.bloodName}} </span>
              时间<span class="unline"> {{data.bloodTime.split(' ')[0]}} </span>
              <span  v-if="index != userInfo.bloodTransfusionJson.length-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </span>
            <span v-if="userInfo.bloodTransfusionJson!=undefined" class="checkBox">{{userInfo.bloodTransfusionJson[0].bloodCode}}</span>
          </td>
        </tr>
        <tr>
          <th colspan="2" rowspan="3" style="line-height: 100px">家族史</th>
          <td width="100">父亲</td>
          <td>
             <span v-for="(da,index) in getTheContent(userInfo.familyHistoryFather).data">
              <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
              <span class="unline pull-right" v-if="da==12">&nbsp;{{getTheContent(userInfo.familyHistorySon).ortherData}}</span>
              <span class="checkBox">{{da}}</span>
            </span>
          </td>
          <td>母亲</td>
          <td colspan="2">
             <span v-for="(da,index) in getTheContent(userInfo.familyHistoryMother).data">
              <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
              <span class="unline pull-right" v-if="da==12">&nbsp;{{getTheContent(userInfo.familyHistorySon).ortherData}}</span>
              <span class="checkBox">{{da}}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td>兄弟姐妹</td>
          <td>
            <span v-for="(da,index) in getTheContent(userInfo.familyHistoryBorther).data">
              <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
              <span class="unline pull-right" v-if="da==12">&nbsp;{{getTheContent(userInfo.familyHistorySon).ortherData}}</span>
              <span class="checkBox">{{da}}</span>
            </span>
          </td>
          <td>子女</td>
          <td colspan="2">
            <span v-for="(da,index) in getTheContent(userInfo.familyHistorySon).data">
              <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
              <span class="unline pull-right" v-if="da==12">&nbsp;{{getTheContent(userInfo.familyHistorySon).ortherData}}</span>
              <span class="checkBox">{{da}}</span>
            </span>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            1无 2高血压 3糖尿病 4冠心病 5慢性阻塞性肺疾病 6恶性肿瘤 7脑卒中 8严重精神障碍 9结核病 10肝炎 11先天畸形 12其他____
          </td>
        </tr>
        <tr>
          <th colspan="2">遗传病史</th>
          <td colspan="5">1无 2有：疾病名称<span class="unline"></span> <span class="checkBox" v-if="userInfo.geneticHistory!=undefined">{{userInfo.geneticHistory}}</span></td>
        </tr>
        <tr>
          <th colspan="2">残疾情况</th>
          <td colspan="5">
            1无残疾 2视力残疾 3听力残疾 4言语残疾 5肢体残疾 6智力残疾 7精神残疾  <br/>8其他残疾 <span class="unline">{{getTheContent(userInfo.disability).ortherData}}</span>
            <span v-for="(da, index) in getTheContent(userInfo.disability).data">
              <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
              <span class="checkBox">{{da}}</span>
            </span>
          </td>
        </tr>
        <tr>
          <th colspan="2" rowspan="5" style="line-height: 180px">生活环境</th>
          <td>厨房排风设施</td>
          <td colspan="5">1无 2抽油烟机 3换气扇 4烟囱 <span class="checkBox">{{userInfo.kitchenVentilationFacilities}}</span></td>
        </tr>
        <tr>
          <td>燃料类型</td>
          <td colspan="5">1液化气 2煤 3天然气 4沼气 5柴火 6其他 <span class="checkBox">{{userInfo.fuelType}}</span></td>
        </tr>
        <tr>
          <td>饮水</td>
          <td colspan="5">1自来水 2经净化过滤的水 3井水 4河湖水 5塘水 6其他 <span class="checkBox">{{userInfo.drinkingWater}}</span></td>
        </tr>
        <tr>
          <td>厕所</td>
          <td colspan="5">1卫生厕所 2一格或二格粪池式 3马桶 4露天粪坑 5简易棚厕 <span class="checkBox">{{userInfo.toilet}}</span></td>
        </tr>
        <tr>
          <td>畜畜栏</td>
          <td colspan="5">1无 2单设 3室内 4室外 <span class="checkBox">{{userInfo.aBird}}</span></td>
        </tr>
        </tbody>
      </table>
    </div>


    <br class="hidden-print"/>
    <h4 class="hidden-print">
      <span>资料</span>
    </h4>
    <div class="tableList hidden-print">
      <button class="btn btn-success" @click="checkTable('healthCheckup')">健康体检表</button>
      <button class="btn btn-success">接诊记录表</button>
      <button class="btn btn-success">会诊记录表</button>
      <button class="btn btn-default">双向转诊表</button>
      <button class="btn btn-default" @click="checkTable('healthCard')">居民健康档案信息卡</button>
      <button class="btn btn-default" @click="checkTable('healthEducationActivities')">健康教育活动表</button>
      <button class="btn btn-default" @click="checkTable('immuneProcedures')">国家免疫规划疫苗儿童免疫程序表</button>
      <button class="btn btn-default" @click="checkTable('NewbornFamilyVisitRecords')">新生儿家庭访视记录表</button>
      <button class="btn btn-default" @click="checkTable('MonthsOldChildrenHealthCheckRecordsOE')">1～8月龄儿童健康检查记录表</button>
      <button class="btn btn-default" @click="checkTable('monthsOldChildrenHealthCheckRecordsTS')">3~6岁儿童健康检查记录表</button>
      <button class="btn btn-default" @click="checkTable('monthsOldChildrenHealthCheckRecordsTOSO')">12～30月龄儿童健康检查记录表</button>
      <button class="btn btn-default" @click="checkTable('boy')">男童生长发育图</button>
      <button class="btn btn-default" @click="checkTable('grli')">女童生长发育图</button>
      <button class="btn btn-default" @click="checkTable('firstPrenatalInspectionServiceRecord')">第一次产前检查服务记录表</button>
      <button class="btn btn-default" @click="checkTable('prenatalFollowUpServiceRecordTF')">第2~5次产前随访服务记录表</button>
      <button class="btn btn-default" @click="checkTable('postpartumVisitRecordForm')">产后访视记录表</button>
      <button class="btn btn-default" @click="checkTable('PostpartumDaysHealthChecklistFT')">产后42天健康检查记录表</button>
      <button class="btn btn-default" @click="checkTable('evaluationOfSelfCareAbilityOfTheElderly')">老年人生活自理能力评估表</button>
      <button class="btn btn-default" @click="checkTable('followUpServiceRecordsForPatientsWithHypertension')">高血压患者随访服务记录表</button>
      <button class="btn btn-default" @click="checkTable('followUpServiceRecordsForPatientsWithType2DiabetesMellitus')">2型糖尿病患者随访服务记录表</button>
      <button class="btn btn-default" @click="checkTable('followUpServiceRecordsForPatientsWithSevereMentalDisorders')">严重精神障碍患者随访服务记录表</button>
      <button class="btn btn-default" @click="checkTable('supplementaryInformationOnMentalDisorders')">严重精神障碍患者个人信息补充表</button>
      <button class="btn btn-default" @click="checkTable('listOfPatientsWithTuberculosisForTheFirstTime')">肺结核患者第一次入户随访记录表</button>
      <button class="btn btn-default" @click="checkTable('listOfPatientsWithPulmonaryTuberculosisFollowUpService')">肺结核患者随访服务记录表</button>
      <button class="btn btn-default" @click="checkTable('listOfTraditionalChineseMedicineHealthManagementServiceForTheElderly')">老年人中医药健康管理服务记录表</button>
      <button class="btn btn-default" @click="checkTable('criteriaForPhysicalFitness')">体质判定标准表</button>
      <button class="btn btn-default" @click="checkTable('listOfTCMHealthManagementServiceForChildrenFrom6To18Months')">6～18 月龄儿童中医药健康管理服务记录表</button>
      <button class="btn btn-default" @click="checkTable('listOfTCMHealthManagementServiceForChildrenFrom24To36Months')">24~36 月龄儿童中医药健康管理服务记录表</button>
      <button class="btn btn-default" @click="checkTable('registrationFormForInformationManagementOfHealthSurveys')">卫生计生监督协管信息报告登记表</button>
      <button class="btn btn-default" @click="checkTable('healthAndHygieneSupervisionCoManagementInspectionForm')">卫生计生监督协管巡查登记表</button>
      <button class="btn btn-default" @click="print">打印</button>
    </div>
    <br class="hidden-print"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserInfo } from '../../interface';

  export default {
    name: 'User',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情');
      const ID = this.$route.params.ID;
      this.getUserInfo(ID);
    },
    data() {
      return {
        userInfo: '',
        payWay: [],
      };
    },
    methods: {
      mingzhu() {
        if (this.userInfo.nation === '01') {
          console.log('123');
        }
      },
      getUserInfo(ID) {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getUserInfo(),
          {
            params: {
              id: ID,
            },
            headers: {
              authToken: authTokenes,
            },
          },
        ).then((res) => {
          this.userInfo = JSON.parse(res.bodyText);
        }).catch((error) => {
          console.log(error);
        });
      },
      back() {
        this.$router.go(-1);
      },
      checkUserPI() {
        this.$router.push('12/PIinfo');
      },
      checkTable(data) {
        const diff = '12/';
        this.$router.push(diff + data);
      },
      getTheContent(data) {
        if (data === '' || data === undefined || data.length <= 0) {
          return '';
        }
        const dataList = data.split(',');
        const LastData = [];
        let orther = '';
        for (let i = 0; i < dataList.length; i += 1) {
          if (dataList[i].indexOf('^') !== -1) {
            orther = dataList[i].split('^')[1];
            LastData.push(dataList[i].split('^')[0]);
          } else {
            LastData.push(dataList[i]);
          }
        }
        return {
          data: LastData,
          ortherData: orther,
        };
      },
      print() {
        window.print();
      },
    },
  };
</script>

<style scoped>
  .userInfo{
    overflow: auto;
    padding: 0;
  }
  .tableList>button{
    margin-bottom: 6px;
  }
  .checkBox{
    border: 1px solid #999;
    padding: 0 4px;
    float: right;
  }
  .checkBox_free{
    border: 1px solid #999;
    padding:0 4px;
    font-size: 12px;
  }
  .circle{
    border: 1px solid #999;
    padding:0 4px;
    font-size: 12px;
    border-radius: 50%;
  }
  .unline{
    border-bottom: 1px solid #000 ;
    color: #cc0000;
    padding: 0 5px;
  }
  .check > span:hover{
    color: #cc0000;
    cursor: pointer;
  }
</style>
