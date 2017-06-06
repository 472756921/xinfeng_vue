<template>
  <div class="content table-responsive">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th width="60">行政村</th>
        <th>常驻人口</th>
        <th>村医人数</th>
        <th>卫生站服务人口</th>
        <th>15岁以上人口</th>
        <th>18岁以上人口</th>
        <th>35岁以上人口</th>
        <th>65岁以上人口</th>
        <th>高血压人口</th>
        <th>糖尿病人口</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>华西</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DatasTown',
    created() {
      this.$emit('datiChange', '数据监控');
    },
    methods: {
      check() {
        this.$router.push('/town/data_base_cun/12');
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
  textarea{
    width: 100%;
    border: 1px solid #ccc;
  }
  .content{
    padding-bottom: 40px;
  }
</style>
