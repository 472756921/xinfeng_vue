<template>
  <div class="content table-responsive">
    <h4><span>啥的村卫生站</span><span class="pull-right">2012.12.12 ~ 2012.12.21</span></h4>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>签约户数</th>
        <th>签约人口</th>
        <th>新建档案总数</th>
        <th class="text-center" colspan="5">档案</th>
        <th>档案随访总数</th>
        <th>档案总数合计</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>华西</td>
          <td>1</td>
          <td>2</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td class="check"><span>详情</span></td>
        </tr>
      </tbody>
    </table>
    <h5><span class="col-sm-4 col-xs-12" style="padding:0">制表人：刘德华</span><span class="col-sm-4 col-xs-12">复核人：刘德华</span><span class="col-sm-4 col-xs-12">日期：2011-12-12</span></h5>
  </div>
</template>

<script>
  export default {
    name: 'DatasTown',
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
