<template>
  <div class="content">
    <div class="table-responsive">
      <span>年份选择：</span>
      <select>
        <option>2017</option>
        <option>2017</option>
        <option>2017</option>
      </select>
      <br/>
      <br/>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th rowspan="2" style="line-height: 28px">乡镇卫生院（社区卫生服务中心）</th>
            <th colspan="5" class="text-center">老年人健康管理</th>
            <th colspan="7" class="text-center">中医药健康管理</th>
          </tr>
          <tr>
            <th>65岁及以上老年人健康管理人数(人)</th>
            <th>老年人健康管理率(％)</th>
            <th>老年人健康体检表总份数(份)</th>
            <th>填写完整的老年人健康体检表份数(份)</th>
            <th>老年人健康体检表完整率(％)</th>
            <th>接受中医药健康管理服务65岁及以上居民数(人)</th>
            <th>65岁以上老年人中医药健康管理服务率</th>
            <th>老年人中医药健康管理服务记录表总数(份)</th>
            <th>填写完整的中医药健康管理记录表数(份)</th>
            <th>老年人中医药健康管理服务记录表完整率(％)</th>
            <th>辖区内按照月龄接受中医药健康管理服务的0～36月儿童数(人)</th>
            <th>0-36月儿童中医药健康管理服务率(％)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="link"><span @click="check">丰城街道社区卫生服务中心</span></td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'year',
    created() {
      this.$emit('datiChange', '年报');
    },
    methods: {
      check() {
        this.$router.push('yearRe/12');
      },
    },
  };
</script>

<style scoped>
  .content{
    padding-bottom: 40px;
    overflow: auto;
  }
  .link > span:hover{
    cursor: pointer;
    color: #cc0000;
  }
</style>
