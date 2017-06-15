<template>
  <div>
    <div>
      <h4>新增用户</h4>
      <select v-model="adminTypeNew">
        <option value="5">村医</option>
        <option value="4">镇卫生中心</option>
        <option value="3">县卫生中心</option>
        <option value="2">县卫计委</option>
        <option value="1">管理员</option>
      </select>
      <select v-if="adminTypeNew == 5" v-model="townID" @change="getTheViList">
        <option value="0">新丰县</option>
        <option :value="town.id" v-for="town in townList.results">{{town.name}}</option>
      </select>
      <select v-if="adminTypeNew == 5" v-model="VID">
        <option :value="v.id" v-for="v in VList.results">{{v.name}}</option>
      </select>
      <input placeholder="用户名" v-model="userNameNew" maxlength="20"/>
      <button class="btn btn-info" @click="newUser">新增</button>
    </div>
    <br/>
    <h4>用户列表</h4>
    <Searcher />
    <span>分类：</span>
    <select @change="getTheList" v-model="adminType">
      <option value="0">所有用户</option>
      <option value="5">村医</option>
      <option value="4">镇卫生中心</option>
      <option value="3">县卫生中心</option>
      <option value="2">县卫计委</option>
      <option value="1">管理员</option>
    </select>
    <table class="table">
      <thead>
        <tr>
          <th>用户名</th>
          <th>身份</th>
          <th>状态</th>
          <th width="300">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userList.results">
          <td>{{ user.username }}</td>
          <td v-if="user.adminType === 1">管理员</td>
          <td v-if="user.adminType === 2">县卫计委</td>
          <td v-if="user.adminType === 3">县卫生中心</td>
          <td v-if="user.adminType === 4">镇卫生中心</td>
          <td v-if="user.adminType === 5">村医</td>
          <td v-if="user.status">正常</td>
          <td v-if="!user.status" class="text-danger">禁用</td>
          <td class="option">
            <span @click="del(user.id)">删除</span>
            <span @click="able(user.id)"  v-if="!user.status">启用</span>
            <span @click="enAble(user.id)"  v-if="user.status">禁用</span>
            <span @click="reset(user.id)">重置密码</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Page/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Page from '../public/page';
  import Searcher from '../public/searcher';
  import { getAdminitlist, delAdminitlist, addAdmin, enAbleAdmin, ableAdmin, resetAdminPWD, getUnitlist } from '../../interface/index';

  export default {
    name: 'app',
    components: { Page, Searcher },
    data() {
      return {
        userList: { results: [{ id: 0, username: '暂无', adminType: 1, status: 0 }] },
        userNameNew: '',
        adminTypeNew: 5,
        adminType: 0,
        townList: '',
        townID: 0,
        VList: '',
        VID: '',
      };
    },
    created() {
      this.getTheList();
      this.getTheTownList();
    },
    methods: {
      getTheList() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getAdminitlist(),
          { params: { page: 1, pageSize: 50, username: '', adminType: this.adminType }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.userList = JSON.parse(res.bodyText);
        }).catch((error) => {
          console.log(error);
        });
      },
      del(ID) {
        const del = confirm('删除该用户？');
        if (del) {
          this.$http.get(delAdminitlist(), { params: { Id: ID } }).then((res) => {
            this.getTheList();
            console.log(res);
          }).catch((error) => {
            alert('删除失败，请稍后再试');
            console.log(error);
          });
        }
      },
      newUser() {
        if (this.userNameNew === '') {
          return;
        }
        this.$http.post(
          addAdmin(this.adminTypeNew),
          { username: this.userNameNew, adminType: this.adminTypeNew, unitId: this.VID },
        ).then((res) => {
          this.getTheList();
          console.log(res);
        }).catch((error) => {
          alert('添加失败，请稍后再试');
          console.log(error);
        });
      },
      enAble(ID) {
        this.$http.get(enAbleAdmin(), { params: { Id: ID } }).then((res) => {
          this.getTheList();
          console.log(res);
        }).catch((error) => {
          alert('禁用失败，请稍后再试');
          console.log(error);
        });
      },
      able(ID) {
        this.$http.get(ableAdmin(), { params: { Id: ID } }).then((res) => {
          this.getTheList();
          console.log(res);
        }).catch((error) => {
          alert('启用失败，请稍后再试');
          console.log(error);
        });
      },
      reset(ID) {
        this.$http.get(resetAdminPWD(), { params: { Id: ID } }).then((res) => {
          this.getTheList();
          console.log(res);
        }).catch((error) => {
          alert('重置失败，请稍后再试');
          console.log(error);
        });
      },
      getTheTownList() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getUnitlist(),
          { params: { page: 1, pageSize: 100, level: 0, id: '' }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.townList = JSON.parse(res.bodyText);
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      },
      getTheViList() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getUnitlist(),
          { params: { page: 1, pageSize: 100, level: 3, id: this.townID },
            headers: { authToken: authTokenes } },
        ).then((res) => {
          this.VList = JSON.parse(res.bodyText);
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      },
    },
  };
</script>

<style scoped>
  .option > span{
    cursor: pointer;
    margin: 0 10px;
  }
</style>
