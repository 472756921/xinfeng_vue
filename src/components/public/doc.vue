<template>
  <div>
    <h5 class="check" v-if="position !== 'town'"><span @click="back">返回上一级</span></h5>
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
          <td>石家村</td>
          <td>1</td>
          <td>224</td>
          <td>224</td>
          <td class="check"><span @click="check">查看</span></td>
        </tr>
        <tr>
          <td>牛家村</td>
          <td>2</td>
          <td>321</td>
          <td>321</td>
          <td class="check"><span @click="check">查看</span></td>
        </tr>
        <tr>
          <td>陈家村</td>
          <td>1</td>
          <td>118</td>
          <td>118</td>
          <td class="check"><span @click="check">查看</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Doc',
    data() {
      return {
        positiong: '',
      };
    },
    created() {
      const position = this.$route.fullPath;
      if (position.indexOf('town') > -1) {
        this.$emit('datiChange', '村级列表');
        this.position = 'town';
      } else {
        this.$emit('datiChange', '镇级列表>村级列表');
      }
    },
    methods: {
      check() {
        this.$router.push('file/user');
      },
      back() {
        this.$router.go(-1);
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
</style>
