<template>
  <div class="content">
    <span class="back" @click="back">返回上一级</span>
    <div class="radio">
      <span>项目：</span>
      <label>
        <input type="radio" name="optionsRadios" value="option1" checked>
        血压&nbsp;
      </label>
      <label>
        <input type="radio" name="optionsRadios" value="option1" checked>
        血糖&nbsp;
      </label>
      <label>
        <input type="radio" name="optionsRadios" value="option1" checked>
        血氧&nbsp;
      </label>
      <label>
        <input type="radio" name="optionsRadios" value="option1" checked>
        血脂&nbsp;
      </label>
      <label>
        <input type="radio" name="optionsRadios" value="option1" checked>
        尿酸&nbsp;
      </label>
      <label>
        <input type="radio" name="optionsRadios" value="option1" checked>
        心电图&nbsp;
      </label>
      <label>
        <input type="radio" name="optionsRadios" value="option1" checked>
        检测报告&nbsp;
      </label>
    </div>
    <br />
    <div>
      <span>时间范围：</span>
      <label><input class="form-control" placeholder="开始时间"></label>
      <label><input class="form-control" placeholder="结束时间"></label>
      <label><button class="btn btn-success">查询</button></label>
    </div>
    <br/>
    <div>
      <img src="http://iph.href.lu/700x400?text=生理指标图"/>
    </div>
    <br/>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>体检时间</th>
          <th>项目1</th>
          <th>项目2</th>
          <th>项目3</th>
          <th>项目4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'user_physiological_indicators',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>生理指标');
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>
  .content{
    padding-bottom: 30px;
    overflow: auto;
  }
  .back{
    cursor: pointer;
  }
  .back:hover {
    color: #cc0000;
  }
  .form-control{
    font-weight: 400;
  }
</style>
