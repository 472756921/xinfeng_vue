<template>
  <div class="content table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th rowspan="3" class="text-center" style="line-height: 80px">村</th>
          <th colspan="2" class="text-center">本辖区常住居民</th>
          <th colspan="8" class="text-center">签订家庭医生式协议数</th>
        </tr>
        <tr>
          <th rowspan="2">家庭户数</th>
          <th rowspan="2">居民人数</th>
          <th rowspan="2">家庭户数</th>
          <th rowspan="2">居民人数</th>
          <th colspan="6" class="text-center">其中签约人群分类（人）</th>
        </tr>
        <tr>
          <th>65岁以上老年人</th>
          <th>0-6岁儿童</th>
          <th>孕产妇</th>
          <th>慢性病患者</th>
          <th>重症精神病患者</th>
          <th>肺结核患者</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>华西</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>8</td>
        </tr>
        <tr>
          <td>华西</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>8</td>
        </tr>
        <tr>
          <td>华西</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>8</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DatasMeeting',
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

<style scoped>
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
