<template>
  <div>
    <div>
      <h4>新增机构</h4>
      <span>上级机构：</span>
      <select v-model="unitl">
        <option value="1">新丰县</option>
        <option v-for="town in townList.results" :value='town.id'>{{town.name}}</option>
      </select>
      <input placeholder="单位名"  maxlength="20" v-model="newName"/>
      <input placeholder="单位编码"  maxlength="20" v-model="newCode"/>
      <button class="btn btn-info" @click="addUnitl">新增</button>
    </div>

    <h4>机构列表</h4>
    <table class="table ">
      <thead>
        <tr>
          <th>名称</th>
          <th>级别</th>
          <th>上级单位</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>asdf</td>
          <td>asdf</td>
          <td>asdf</td>
          <td>
            <span>修改名称</span>
            <span>删除</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUnitlist, AddUnit } from '../../interface/index';

  export default {
    name: 'unitl',
    data() {
      return {
        townList: '',
        newName: '',
        unitl: 0,
        newCode: '',
      };
    },
    created() {
      this.getTheTownList();
    },
    methods: {
      getTheTownList() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getUnitlist(),
          { params: { page: 1, pageSize: 2, level: 0, id: '' }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.townList = JSON.parse(res.bodyText);
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      },
      addUnitl() {
        console.log(this.unitl);
        this.$http.post(
          AddUnit(),
          { name: this.newName, level: 2, parientId: this.unitl, code: '' },
        ).then((res) => {
          this.townList = JSON.parse(res.bodyText);
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
      },
    },
  };
</script>

<style scoped>

</style>
