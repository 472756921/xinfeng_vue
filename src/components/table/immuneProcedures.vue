<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="table-responsive">
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered" style="border: none">
      <caption class="">
        <h3 class="text-center">国家免疫规划疫苗儿童免疫程序表</h3>
        <span>姓名：{{userName}}</span>
        <span class="pull-right">编号：{{code}}</span>
      </caption >
      <tbody>
      <tr>
        <th colspan="2" class="text-center">疫苗种类</th>
        <th colspan="15" class="text-center">接种年（月）龄</th>
      </tr>
      <tr>
        <th>名称</th>
        <th>缩写</th>
        <th>出生时</th>
        <th>1月</th>
        <th>2月</th>
        <th>3月</th>
        <th>4月</th>
        <th>5月</th>
        <th>6月</th>
        <th>8月</th>
        <th>9月</th>
        <th>18月</th>
        <th>2岁</th>
        <th>3岁</th>
        <th>4岁</th>
        <th>5岁</th>
        <th>6岁</th>
      </tr>
      <tr v-for="(data, index) in list">
        <td v-if="index == 8 || index == 12" class="borderBN">{{data.name}}</td>
        <td v-else-if="index == 9 || index == 13" class="borderUN">{{data.name}}</td>
        <td v-else>{{data.name}}</td>
        <td>{{data.code}}</td>
        <td v-for="d in 15">
          <span v-for="(show,i) in data.normal" v-if="d === show[0]">{{show[1]}}
            <span class="icon iconfont icon-gou gou" v-if="show[2] === true"></span>
          </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserBaby } from '../../interface/index';

  export default {
    name: 'immuneProcedures',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>国家免疫规划疫苗儿童免疫程序表');
      const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;

      this.$http.get(
        getUserBaby(),
        { params: { id: 1 }, headers: { authToken: authTokenes } },
      ).then((res) => {
        this.addData(res.body);
      }).catch((error) => {
        console.log(error);
      });
    },
    data() {
      return {
        list: [
          { name: '乙肝疫苗', code: 'HepB', normal: [[1, 1], [2, 2], [7, 3]] },
          { name: '卡介苗', code: 'BCG', normal: [[1, 1]] },
          { name: '脊灰灭活疫苗', code: 'IPV', normal: [[3, 1]] },
          { name: '脊灰减毒活疫苗', code: 'OPV', normal: [[4, 1], [5, 2], [13, 3]] },
          { name: '百白破疫苗', code: 'DTaP', normal: [[4, 1], [5, 2], [6, 3], [10, 4]] },
          { name: '白破疫苗', code: 'DT', normal: [[15, 1]] },
          { name: '麻-风疫苗', code: 'MR', normal: [[8, 1]] },
          { name: '麻腮风疫苗', code: 'MMR', normal: [[10, 1]] },
          { name: '乙脑减毒活疫苗', code: 'JE-L', normal: [[8, 1], [12, 2]] },
          { name: '或乙脑灭活疫苗 1', code: 'JE-I', normal: [[8, '1、2'], [11, 3]] },
          { name: 'A 群流脑多糖疫苗', code: 'MPSV-A', normal: [[7, 1], [9, 2]] },
          { name: 'A 群 C 群流脑多糖疫苗', code: 'MPSV-AC', normal: [[7, 1], [9, 2]] },
          { name: '甲肝减毒活疫苗', code: 'HepA-L ', normal: [[10, 1]] },
          { name: '或甲肝灭活疫苗 2', code: 'HepA-I ', normal: [[10, 1], [11, 2]] },
        ],
        userName: '',
        code: '',
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      addData(data) {
        this.userName = data[0].name;
        this.code = data[0].code;
        data.map((obj, index) => {
          this.list.map((o, i) => {
            if (obj.vaccineAbbreviation === o.code) {
              o.normal.map((d, j) => {
                if (j === 0 && obj.firstTime) {
                  d.push(true);
                }
                if (j === 1 && obj.secondTime) {
                  d.push(true);
                }
                if (j === 2 && obj.thirdTime) {
                  d.push(true);
                }
                if (j === 3 && obj.fourthTime) {
                  d.push(true);
                }
                return j;
              });
            }
            return i;
          });
          return index;
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
  .gou{
    color: green;
    font-size: 16px;
  }
  .borderBN{
    border-bottom: none!important;
  }
  .borderUN{
    border-top: none!important;
  }
</style>
