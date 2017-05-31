<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th>类型</th>
        <th>描述</th>
        <th>时间</th>
        <th>回复时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>药品</td>
          <td>没有阿莫西林了</td>
          <td>2012-12-21</td>
          <td>2012-12-21</td>
          <td>已提交</td>
          <td class="check"><span @click="check">详情</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Helps',
    created() {
      this.$emit('position', 'help');
    },
    methods: {
      check() {
        this.$router.push('/town/help/12');
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
