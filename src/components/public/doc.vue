<template>
  <div>
    <h5 class="check" v-if="position !== 'town'"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>行政村</th>
          <th>村医</th>
          <th>建档人数</th>
          <th>提问数</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="village in villageList.results">
          <td>{{village.name}}</td>
          <td>1</td>
          <td>224</td>
          <td>224</td>
          <td class="check"><span @click="check(village.id)">查看</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script  type="text/ecmascript-6">
  import { getUnitlist } from '../../interface/index';

  export default {
    name: 'Doc',
    data() {
      return {
        positiong: '',
        villageList: '',
      };
    },
    created() {
      const position = this.$route.fullPath;
      const ID = this.$route.params.ID;
      if (position.indexOf('town') > -1) {
        this.$emit('datiChange', '村级列表');
        this.position = 'town';
      } else {
        this.$emit('datiChange', '镇级列表>村级列表');
      }
      this.getTheList(ID);
    },
    methods: {
      getTheList(ID) {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getUnitlist(),
          { params: { page: 1, pageSize: 2, level: 2, id: ID }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.villageList = JSON.parse(res.bodyText);
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      },
      check(ID) {
        const diff = 'userList/';
        this.$router.push(diff + ID);
      },
      back() {
        this.$router.go(-1);
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
