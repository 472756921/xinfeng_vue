<template>
  <div class="hidden-print">
    <h3>{{title}} <Searcher /></h3>
    <h5 class="text-warning">{{title2}}</h5>
  </div>
</template>

<script>
  import Searcher from '../public/searcher';

  export default {
    name: 'BorNav',
    components: { Searcher },
    data() {
      return {
        title: '',
        title2: '',
      };
    },
    created() {
      const position = this.$route.path.split('/')[2];
      this.getTheNav(position);
    },
    methods: {
      navChange(position) {
        this.getTheNav(position);
      },
      datiChange(position) {
        this.title2 = position;
      },
      getTheNav(position) {
        switch (position) {
          case 'file':
            this.title = '健康档案';
            break;
          case 'question':
            this.title = '健康问题';
            break;
          case 'help':
            this.title = '寻求支撑';
            break;
          case 'data':
            this.title = '数据监控';
            break;
          case 'yearRe':
            this.title = '年度报表';
            break;
          default :
            this.title = '';
            break;
        }
      },
    },
  };
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>
