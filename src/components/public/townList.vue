<template>
  <div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>镇级单位</th>
        <th>村医</th>
        <th>建档人数</th>
        <th>提问数</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="town in townList.results">
        <td>{{town.name}}</td>
        <td>1</td>
        <td>224</td>
        <td>224</td>
        <td class="check"><span @click="check(town.id)">查看</span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUnitlist } from '../../interface/index';

  export default {
    name: 'townList',
    data() {
      return {
        townList: '',
      };
    },
    created() {
      this.$emit('datiChange', '镇级列表');
      const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
      this.$http.get(
        getUnitlist(),
        { params: { page: 1, pageSize: 20, level: 0, id: '' }, headers: { authToken: authTokenes } },
      ).then((res) => {
        this.townList = JSON.parse(res.bodyText);
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
    },
    methods: {
      check(ID) {
        const diff = 'file/town/';
        this.$router.push(diff + ID);
      },
    },
  };
</script>

<style scoped>
  .check>span {
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
</style>
