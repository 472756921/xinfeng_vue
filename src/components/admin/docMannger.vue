<template>
  <div>
    <div>
      <h4>新增村医</h4>
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
    <h4>村医列表</h4>
    <Searcher />
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
        <td>{{ user.account }}</td>
        <td>村医</td>
        <td v-if="user.abledStatus">正常</td>
        <td v-if="!user.abledStatus" class="text-danger">禁用</td>
        <td class="option">
          <span @click="del(user.id)">删除</span>
          <span @click="able(user.id)"  v-if="!user.abledStatus">启用</span>
          <span @click="enAble(user.id)"  v-if="user.abledStatus">禁用</span>
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
  import { doclist, delAdminitlist, addAdmin, enAbleAdmin, ableAdmin, resetAdminPWD, getUnitlist } from '../../interface/index';

  export default {
    name: 'docMannger',
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
          doclist(),
          { params: { page: 1, pageSize: 50, account: '', unitId: '' }, headers: { authToken: authTokenes } },
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
          { account: this.userNameNew, adminType: this.adminTypeNew, unitId: this.VID },
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
