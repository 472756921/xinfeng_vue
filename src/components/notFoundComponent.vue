<template>
  <div class="col-sm-12 col-md-8 col-md-offset-2">
    <img src="../assets/public/404.png" @click="back"/>
  </div>
</template>

<script>
  export default {
    name: 'NotFoundComponent',
    methods: {
      back() {
        this.$router.push('getIndex');
      },
    },
  };
</script>

<style scoped>

</style>
