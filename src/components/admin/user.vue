<template>
  <div>
    <div>
      <h4>新增用户</h4>
      <select>
        <option>村医</option>
        <option>镇卫生中心</option>
        <option>县卫生中心</option>
        <option>县卫计委</option>
        <option>超级管理员</option>
      </select>
      <input placeholder="用户名" />
      <button class="btn btn-info">新增</button>
    </div>
    <br/>
    <h4>用户列表</h4>
    <Searcher />
    <span>分类：</span>
    <select>
      <option>村医</option>
      <option>镇卫生中心</option>
      <option>县卫生中心</option>
      <option>县卫计委</option>
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
          <td v-if="user.adminType === 3">县医院</td>
          <td v-if="user.adminType === 4">镇医院</td>
          <td v-if="user.adminType === 5">村医</td>
          <td v-if="user.status">正常</td>
          <td v-if="!user.status" class="text-danger">禁用</td>
          <td class="option"><span @click="del(user.id)">删除</span><span>禁用</span><span>重置密码</span></td>
        </tr>
      </tbody>
    </table>
    <Page/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Page from '../public/page';
  import Searcher from '../public/searcher';
  import { getAdminitlist, delAdminitlist } from '../../interface/index';

  export default {
    name: 'app',
    components: { Page, Searcher },
    data() {
      return {
        userList: { results: [{ id: 0, username: '暂无', adminType: 1, status: 0 }] },
      };
    },
    mounted() {
      const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
      this.$http.get(
        getAdminitlist(),
        { params: { page: 1, pageSize: 2 }, headers: { authToken: authTokenes } },
      ).then((res) => {
        this.userList = JSON.parse(res.bodyText);
      }).catch((error) => {
        console.log(error);
      });
    },
    methods: {
      del(ID) {
        const del = confirm('删除该用户？');
        if (del) {
          this.$http.get(delAdminitlist(ID)).then((res) => {
            console.log(res);
          }).catch((error) => {
            console.log(error);
          });
        }
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
