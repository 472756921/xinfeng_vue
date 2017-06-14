<template>
  <div>
    <h5 class="check"><span @click="back">返回上级</span></h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>病种</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList.results">
          <td>{{user.realName}}</td>
          <td>{{user.age}}</td>
          <td>{{user.disease}}</td>
          <td class="check"><span @click="check(user.id)">查看</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getDoclist } from '../../interface/index';

  export default {
    name: 'Users',
    data() {
      return {
        userList: '',
      };
    },
    created() {
      this.$emit('datiChange', '村级列表>用户列表');
      const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
      this.$http.get(
        getDoclist(),
        { params: { page: 1, pageSize: 2 }, headers: { authToken: authTokenes } },
      ).then((res) => {
        this.userList = JSON.parse(res.bodyText);
      }).catch((error) => {
        console.log(error);
      });
    },
    methods: {
      check(ID) {
        const fiff = 'user/';
        this.$router.push(fiff + ID);
      },
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>
  .check>span{
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
</style>
