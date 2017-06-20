<template>
  <div class="content">
    <h5 class="check"><span @click="back">返回上一级</span></h5>
    <img src="../../assets/public/boy.jpg" class="center-block img-responsive"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'boy',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>男童生长发育图');
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>
  .content{
    padding-bottom: 36px;
  }
  .check > span:hover{
    color: #cc0000;
    cursor: pointer;
  }
</style>
