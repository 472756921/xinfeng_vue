<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>村医</th>
          <th>行政村</th>
          <th>建档人数</th>
          <th>提问数</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>李德华</td>
          <td>石家村</td>
          <td>224</td>
          <td>224</td>
          <td class="check"><span @click="check">查看</span></td>
        </tr>
        <tr>
          <td>张德华</td>
          <td>牛家村</td>
          <td>321</td>
          <td>321</td>
          <td class="check"><span @click="check">查看</span></td>
        </tr>
        <tr>
          <td>王德华</td>
          <td>陈家村</td>
          <td>118</td>
          <td>118</td>
          <td class="check"><span @click="check">查看</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Doc',
    methods: {
      check() {
        this.$emit('position', 'doc');
        this.$router.push('/town/users');
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
