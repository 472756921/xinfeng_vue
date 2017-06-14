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
      <tr>
        <td>乙肝疫苗</td>
        <td>HepB</td>
        <td>1</td>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>3</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>卡介苗</td>
        <td>BCG</td>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>脊灰灭活疫苗</td>
        <td>IPV</td>
        <td></td>
        <td></td>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td>3</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
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
    name: 'immuneProcedures',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>国家免疫规划疫苗儿童免疫程序表');
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
