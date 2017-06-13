<template>
  <div class="content table-responsive">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>行政村</th>
        <th>村医</th>
        <th>建档人数</th>
        <th>提问数</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>华西</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td class="check"><span @click="check">详情</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DatasDocs',
    created() {
      this.$emit('datiChange', '数据监控>村医列表');
    },
    methods: {
      check() {
        this.$router.push('data/doc/12');
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
  textarea{
    width: 100%;
    border: 1px solid #ccc;
  }
  .content{
    padding-bottom: 40px;
  }
</style>
