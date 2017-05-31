<template>
  <div id="app" class="container-fluid">
    <Headxf />
    <router-view></router-view>
    <Footerxf/>
  </div>
</template>

<script>
import Headxf from './components/public/head';
import Footerxf from './components/public/footer';

export default {
  name: 'app',
  components: { Headxf, Footerxf },
};
</script>

<style>
  html{
    height:100%;
  }
  body{
    height:100%;
    background-color: #fff;
  }
  #app {
    position: relative;
    min-height:100%;
    margin: 0 auto;
    padding: 0;
    font-family: "Microsoft YaHei";
    padding-bottom: 30px;
  }
</style>
