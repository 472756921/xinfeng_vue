<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">老年人生活自理能力评估表</h3>
        <p>该表为自评表，根据下表中 5 个方面进行评估，将各方面判断评分汇总后，0～3 分者
          为可自理；4～8 分者为轻度依赖；9～18 分者为中度依赖； ≥19 分者为不能自理。
        </p>
      </caption >
      <tbody>
      <tr>
        <th rowspan="2">评估事项、内容<br>与评分</th>
        <th colspan="5">程度等级</th>
      </tr>
      <tr>
        <td>可自理</td>
        <td>轻度依赖</td>
        <td>中度依赖</td>
        <td>不能自理</td>
        <td>判断评分</td>
      </tr>
      <tr>
        <td>进餐：使用餐具将饭菜送入口、<br>咀嚼、吞咽等活动<br><br>评分</td>
        <td>独立完成<br><br>0</td>
        <td>-<br><br>0</td>
        <td>需要协助，如切碎、搅拌食<br>物等<br><br>3</td>
        <td>完全需要帮<br>助<br><br>5</td>
        <td>{{tableData.theMeal}}</td>
      </tr>
      <tr>
        <td>梳洗：梳头、洗脸、刷牙、<br>剃须、洗澡等活动<br><br>评分</td>
        <td>独立完成<br><br>0</td>
        <td>能独立地洗<br>头、梳头、洗<br>脸、刷牙、剃<br>须等；洗澡需<br>要协助<br>1</td>
        <td>在协助下和适<br>当的时间内，<br>能完成部分梳<br>洗活动<br>3</td>
        <td>完全需要帮<br>助<br><br>7</td>
        <td>{{tableData.freshenUp}}</td>
      </tr>
      <tr>
        <td><br>穿衣：穿衣裤、袜子、<br>鞋子等活动<br><br>评分<br></td>
        <td>独立完成<br><br>0</td>
        <td>-<br><br>0</td>
        <td>需要协助，在<br>适当的时间内<br>完成部分穿衣<br><br>3</td>
        <td>完全需要帮<br>助<br><br>5</td>
        <td>{{tableData.dressing}}</td>
      </tr>
      <tr>
        <td>如厕：小便、大便等<br>活动及自控<br><br>评分</td>
        <td>不需协助，<br>可自控<br><br>0</td>
        <td>偶尔失禁，但<br>基本上能如<br>厕或使用便<br>具<br>1</td>
        <td>经常失禁，在<br>很多提示和协<br>助下尚能如厕<br>或使用便具<br>5</td>
        <td>完全失禁，<br>完全需要帮<br>助<br>10</td>
        <td>{{tableData.goToTheToilet}}</td>
      </tr>
      <tr>
        <td>活动：站立、室内行走、<br>上下楼梯、户外活动<br><br>评分</td>
        <td>独立完成所<br>有活动<br><br>0</td>
        <td>借助较小的<br>外力或辅助<br>装臵能完成<br>站立、行走、<br>上下楼梯等<br>1</td>
        <td>借助较大的外<br>力才能完成站<br>立、行走，不<br>能上下楼梯<br>5</td>
        <td>卧床不起，<br>活动完全需<br>要帮助<br>10</td>
        <td>{{tableData.activity}}</td>
      </tr>
      <tr>
        <td colspan="5">总得分</td>
        <td>{{tableData.total}}</td>
      </tr>
      </tbody>
    </table>
    <br/>
    <table class="table">
      <thead>
        <tr>
          <th>姓名</th>
          <th>时间</th>
          <th>总分</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="data in listData.results">
        <td>{{data.name}}</td>
        <td>{{data.selfCareDate}}</td>
        <td>{{data.total}}</td>
        <td>详情</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { oldManS, oldManSByID } from '../../interface/index';

  export default {
    name: 'EvaluationOfSelfCareAbilityOfTheElderly',
    created() {
      this.getTheTableData(1);
      this.getTheListData();
    },
    data() {
      return {
        listData: '',
        tableData: '',
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      getTheListData() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          oldManS(),
          { params: { id: 1, page: 1, pageSize: 10 }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.listData = res.body;
        }).catch((error) => {
          console.log(error);
        });
      },
      getTheTableData(ID) {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          oldManSByID(),
          { params: { id: ID }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.tableData = res.body;
          console.log(this.tableData);
        }).catch((error) => {
          console.log(error);
        });
      },
    },
  };
</script>

<style scoped>
  .check > span:hover{
    color: #cc0000;
    cursor: pointer;
  }
</style>
