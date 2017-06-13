<template>
  <div class="content table-responsive">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>日期</th>
        <th>地点</th>
        <th>会议形式</th>
        <th>组织者</th>
        <th>主讲</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>华西</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>8</td>
          <td class="check"><span @click="check">详情</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DatasMeeting',
    created() {
      this.$emit('position', 'datas');
    },
    methods: {
      check() {
        this.$router.push('dataMeetingDa/12');
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
