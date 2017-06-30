<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="table-responsive">
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">居民健康档案信息卡</h3>
        <div class="text-center">（正面）</div>
      </caption >
      <tbody>
        <tr>
          <th>姓名</th>
          <td>{{tableData.realName}}</td>
          <th>性别</th>
          <td>{{tableData.gender}}</td>
          <th>出生日期</th>
          <td>{{tableData.birthday}}</td>
        </tr>
        <tr>
          <th colspan="3">健康档案编号</th>
          <td colspan="3">{{tableData.code}}</td>
        </tr>
        <tr>
          <th>ABO血型</th>
          <td colspan="2">
            <input type="radio" name="bool" :checked="tableData.bloodType==1"/>A&nbsp;&nbsp;
            <input type="radio" name="bool" :checked="tableData.bloodType==2"/>B&nbsp;&nbsp;
            <input type="radio" name="bool" :checked="tableData.bloodType==3"/>O&nbsp;&nbsp;
            <input type="radio" name="bool" :checked="tableData.bloodType==4"/>AB&nbsp;&nbsp;
          </td>
          <th>RH血型</th>
          <td colspan="2">
            <input type="radio" name="boolRH" :checked="tableData.rh==1"/>RH阴性 &nbsp;&nbsp;
            <input type="radio" name="boolRH" :checked="tableData.rh==2"/>RH阳性 &nbsp;&nbsp;
            <input type="radio" name="boolRH" :checked="tableData.rh==3"/>不详
          </td>
        </tr>
        <tr>
          <td colspan="6">
            慢性病患病情况：<br/>
            <input type="radio" name="mbqk" :checked="tableData.disease=='无'" />无 &nbsp;&nbsp;
            <input type="radio" name="mbqk" :checked="tableData.disease=='高血压'" />高血压 &nbsp;&nbsp;
            <input type="radio" name="mbqk" :checked="tableData.disease=='糖尿病'" />糖尿病 &nbsp;&nbsp;
            <input type="radio" name="mbqk" :checked="tableData.disease=='脑卒中'" />脑卒中 &nbsp;&nbsp;
            <input type="radio" name="mbqk" :checked="tableData.disease=='冠心病'" />冠心病 &nbsp;&nbsp;
            <input type="radio" name="mbqk" :checked="tableData.disease=='哮喘'" />哮喘 &nbsp;&nbsp;
            <input type="radio" name="mbqk" :checked="tableData.disease=='职业病'" />职业病 &nbsp;&nbsp;
            <input type="radio" name="mbqk" :checked="tableData.disease.split('_')[0]=='其他疾病'" />其他疾病<span class="unline" v-if="tableData.disease.split('_')[1]!=undefined">{{tableData.disease.spilt('_')[1]}}</span> &nbsp;&nbsp;
          </td>
        <tr>
          <td colspan="6">
            过敏史：{{tableData.historyOfDrugAllergy}}<br/>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">居民健康档案信息卡</h3>
        <div class="text-center">（反面）</div>
      </caption >
      <tbody>
        <tr>
          <th width="150">家庭住址</th>
          <td>{{tableData.address}}</td>
          <th width="150">家庭电话</th>
          <td>{{tableData.phoneNumber}}</td>
        </tr>
        <tr>
          <th>紧急情况联系人</th>
          <td>{{tableData.emergencyContact}}</td>
          <th>联系人电话</th>
          <td>{{tableData.emergencyContactPhpone}}</td>
        </tr>
        <tr>
          <th>建档机构名称</th>
          <td>{{tableData.filingUnit}}</td>
          <th>联系人电话</th>
          <td>{{tableData.filingUnitPhone}}</td>
        </tr>
        <tr>
          <th>责任护士或医生</th>
          <td>{{tableData.responsibleDoctor}}</td>
          <th>联系人电话</th>
          <td>{{tableData.responsiblePhone}}</td>
        </tr>
        <tr>
          <td colspan="4">
            其他说明:
          </td>
        </tr>
      </tbody>
    </table>
    <h4>填表说明：</h4>
    <div>
      <p>1．居民健康档案信息卡为正反两面，根据居民信息如实填写，应与健康档案对应项目的填写内容一致。</p>
      <p>2．过敏史：过敏主要指青霉素、磺胺、链霉素过敏，如有其他药物或食物等其他物质（如花粉、酒精、油漆等）过敏，请写明过敏物质名称。</p>
    </div>
    <br/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserHealthById } from '../../interface/index';

  export default {
    name: 'healthCard',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>居民健康档案信息卡');
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
          getUserHealthById(),
          { params: { id: 1 }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.tableData = res.body;
          this.mCol = this.tableData.medicationSituation.length;
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
  .unline{
    border-bottom: 1px solid #000 ;
    color: #cc0000;
    padding: 0 5px;
  }
</style>
