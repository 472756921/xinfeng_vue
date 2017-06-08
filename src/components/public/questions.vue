<template>
  <div>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>用户</th>
        <th>村医</th>
        <th v-if="character === 'county'">镇级单位</th>
        <th>提问时间</th>
        <th>最后回复时间</th>
        <th>问题描述</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>XXXX</td>
          <td>CCCC</td>
          <td v-if="character === 'county'">CCCC</td>
          <td>2012-12-21</td>
          <td>2012-12-21</td>
          <td>肚子痛</td>
          <td class="check"><span @click="check">详情</span></td>
        </tr>
        <tr>
          <td>XXXX</td>
          <td>CCCC</td>
          <td v-if="character === 'county'">CCCC</td>
          <td>2012-12-21</td>
          <td>2012-12-21</td>
          <td>肚子痛</td>
          <td class="check"><span @click="check">详情</span></td>
        </tr>
      </tbody>
    </table>
    <page/>
  </div>
</template>

<script>
  import Page from './page';

  export default {
    name: 'Question',
    components: {
      Page,
    },
    created() {
      this.$emit('datiChange', '问题列表');
      const Character = this.$route.path.split('/')[1];
      if (Character.indexOf('town') !== -1) {
        this.character = 'town';
      }
      if (Character.indexOf('county') !== -1) {
        this.character = 'county';
      }
    },
    data() {
      return {
        character: '',
      };
    },
    methods: {
      check() {
        this.$router.push('question/12');
      },
    },
  };
</script>

<style>
  .check>span {
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
</style>
