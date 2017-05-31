<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th>用户</th>
        <th>村医</th>
        <th>提问时间</th>
        <th>最后回复时间</th>
        <th>问题描述</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>XXXX</td>
          <td>CCCC</td>
          <td>2012-12-21</td>
          <td>2012-12-21</td>
          <td>肚子痛</td>
          <td class="check"><span @click="check">详情</span></td>
        </tr>
        <tr>
          <td>XXXX</td>
          <td>CCCC</td>
          <td>2012-12-21</td>
          <td>2012-12-21</td>
          <td>肚子痛</td>
          <td class="check"><span @click="check">详情</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Question',
    created() {
      this.$emit('position', 'questions');
    },
    methods: {
      check() {
        this.$router.push('/town/question/12');
      },
    },
  };
</script>

<style>
  .check>span {
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
</style>
