<template>
  <div class="content">
    <h3>讲座主题：对方水电费跟随发</h3>
    <h4>讲座时间：2012-12-12</h4>
    <h4>讲座地点：南天门</h4>
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
        this.$router.push('/town/meeting/12');
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
