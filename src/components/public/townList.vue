<template>
  <div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>镇级单位</th>
        <th>村医</th>
        <th>建档人数</th>
        <th>提问数</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>新丰镇</td>
        <td>1</td>
        <td>224</td>
        <td>224</td>
        <td class="check"><span @click="check">查看</span></td>
      </tr>
      <tr>
        <td>立新镇</td>
        <td>2</td>
        <td>321</td>
        <td>321</td>
        <td class="check"><span @click="check">查看</span></td>
      </tr>
      <tr>
        <td>高新镇</td>
        <td>1</td>
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
    name: 'townList',
    created() {
      this.$emit('datiChange', '镇级列表');
    },
    methods: {
      check() {
        this.$router.push('file/town');
      },
    },
  };
</script>

<style scoped>
  .check>span {
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
</style>
