<template>
  <table class="table">
    <thead>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>病种</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>李德华</td>
        <td>49</td>
        <td>白血病</td>
        <td class="check"><span @click="check">查看</span></td>
      </tr>
      <tr>
        <td>张德华</td>
        <td>57</td>
        <td>脑瘫</td>
        <td class="check"><span @click="check">查看</span></td>
      </tr>
      <tr>
        <td>王德华</td>
        <td>58</td>
        <td>高血压</td>
        <td class="check"><span @click="check">查看</span></td>
      </tr>
    </tbody>
  </table>
</template>

<script>

  export default {
    name: 'Users',
    methods: {
      check() {
        this.$emit('position', 'users');
        this.$router.push('/town/user/12');
      },
    },
  };
</script>

<style>
  .check>span{
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
</style>
