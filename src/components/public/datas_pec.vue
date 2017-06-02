<template>
  <div class="content table-responsive">
    <table class="table">
      <thead>
      <tr>
        <th width="60">行政村</th>
        <th>总人数</th>
        <th>常驻人数</th>
        <th>15岁以上常驻人数</th>
        <th>18岁以上常驻人数</th>
        <th>35岁以上常驻人数</th>
        <th>65岁总数</th>
        <th>65岁以上常驻</th>
        <th>0-6岁常驻</th>
        <th>高血压</th>
        <th>糖尿病</th>
        <th>普通居民</th>
        <th>新建普通居民</th>
        <th>精神病在管</th>
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
    name: 'DatasPec',
    created() {
      this.$emit('position', 'datas');
    },
    methods: {
      check() {
        this.$router.push('/town/data/12');
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
