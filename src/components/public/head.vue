<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <header class='head col-md-8 col-md-offset-2 col-sm-12'>
    <img src="../../assets/public/icon/logo.png" />
    <div class="pull-right user">TEST</div>
  </header>
</template>

<script>
  export default {
    name: 'Headxf',
  };
</script>

<style scoped>
  .head{
    padding: 20px 20px;
    overflow: auto;
  }
  .user:hover{
    cursor: pointer;
    color: #cc0000;
    overflow: auto;
  }
</style>
