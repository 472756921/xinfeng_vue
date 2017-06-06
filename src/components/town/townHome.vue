<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="col-sm-12 col-md-8 col-md-offset-2">
    <HeadNav @navChange="navChange"/>
    <HeadBorNav ref="HeadBorNav"/>
    <router-view @datiChange="datiChange"></router-view>
  </div>
</template>

<script>
  import TownUser from '../public/users';
  import HeadNav from '../public/head_nav';
  import HeadBorNav from '../public/bor_nav';

  export default {
    name: 'townHome',
    components: { TownUser, HeadNav, HeadBorNav },
    data() {
      return {
      };
    },
    methods: {
      navChange(position) {
        this.$refs.HeadBorNav.navChange(position);
      },
      datiChange(position) {
        this.$refs.HeadBorNav.datiChange(position);
      },
    },
    mounted() {
    },
  };
</script>

<style scoped>
  .BreadCrumbs i:hover{
    color: #cc0000;
    cursor: pointer;
  }
</style>
