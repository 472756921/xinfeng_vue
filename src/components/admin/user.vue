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
          <th>最后登录时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XXX</td>
          <td>XXX</td>
          <td>XXX</td>
          <td>XXX</td>
          <td class="option"><span>删除</span><span>禁用</span><span>重置密码</span></td>
        </tr>
      </tbody>
    </table>
    <Page/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Page from '../public/page';
  import Searcher from '../public/searcher';
  import { getAdminitlist } from '../../interface/index';

  export default {
    name: 'app',
    components: { Page, Searcher },
    created() {
      this.$http.get(getAdminitlist()).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
    },
  };
</script>

<style scoped>
  .option > span{
    cursor: pointer;
    margin: 0 10px;
  }
</style>
