<template>
  <div>
    <h5 class="check"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">国家免疫规划疫苗儿童免疫程序表</h3>
      </caption >
      <tbody>
      <tr>
        <th colspan="2">疫苗种类</th>
        <th colspan="15">接种年（月）龄</th>
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
        <td>{{data.name}}</td>
        <td>{{data.code}}</td>
        <td v-for="d in 15">
          <span v-for="(show,i) in data.normal" v-if="d === show[0]">{{show[1]}}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'immuneProcedures',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>国家免疫规划疫苗儿童免疫程序表');
    },
    data() {
      return {
        listName: ['乙肝疫苗', '卡介苗', '脊灰灭活疫苗', '脊灰减毒活疫苗', '百白破疫苗', '白破疫苗',
          '麻-风疫苗', '麻腮风疫苗', '乙脑减毒活疫苗或', '乙脑灭活疫苗 1', 'A 群流脑多糖疫苗 ',
          'A 群 C 群流脑多糖疫苗', '甲肝减毒活疫苗或', '甲肝灭活疫苗 2'],
        listCode: ['HepB', 'BCG', 'IPV', 'OPV', 'DTaP', 'DT', 'MR', 'MMR', 'JE-L', 'JE-I', 'MPSV-A', 'MPSV-AC', 'HepA-L', 'HepA-I'],
        list: [
          { name: '乙肝疫苗', code: 'HepB', normal: [[1, 1], [2, 2], [7, 3]] },
          { name: '卡介苗', code: 'BCG', normal: [[1, 1]] },
          { name: '脊灰灭活疫苗', code: 'IPV', normal: [[3, 1]] },
          { name: '脊灰减毒活疫苗', code: 'OPV', normal: [[4, 1], [5, 2], [13, 3]] },
          { name: '百白破疫苗', code: 'DTaP', normal: [[4, 1], [5, 2], [6, 3], [10, 4]] },
          { name: '白破疫苗', code: 'DT', normal: [[15, 1]] },
          { name: '麻-风疫苗', code: 'MR', normal: [[8, 1]] },
          { name: '麻腮风疫苗', code: 'MMR', normal: [[10, 1]] },
          { name: '乙脑减毒活疫苗或', code: 'JE-L', normal: [[8, 1], [12, 2]] },
          { name: '或乙脑灭活疫苗 1', code: 'JE-I', normal: [[8, '1、2'], [11, 3]] },
          { name: 'A 群流脑多糖疫苗', code: 'MPSV-A', normal: [[7, 1], [9, 2]] },
          { name: 'A 群 C 群流脑多糖疫苗', code: 'MPSV-AC ', normal: [[7, 1], [9, 2]] },
          { name: '甲肝减毒活疫苗或', code: 'HepA-L ', normal: [[10, 1]] },
          { name: '甲肝灭活疫苗 2', code: 'HepA-I ', normal: [[10, 1], [11, 2]] },
        ],
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
</style>
