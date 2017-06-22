<template>
  <div class="table-responsive content">
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">健康教育活动表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：123-122332</span>
      </caption >
      <tbody>
      <tr>
        <td width="150">活动时间：</td>
        <td>{{tableData.time}}</td>
        <td width="150">活动地点：</td>
        <td>{{tableData.address}}</td>
      </tr>
      <tr>
        <td colspan="4">活动形式：{{tableData.activityType}}</td>
      </tr>
      <tr>
        <td colspan="4" height="80">活动主题：{{tableData.title}}</td>
      </tr>
      <tr>
        <td colspan="4" height="80">组织者：{{tableData.organizer}}</td>
      </tr>
      <tr>
        <td colspan="4">主讲人：{{tableData.speaker}}</td>
      </tr>
      <tr>
        <td colspan="2">接受健康教育人员类别：{{tableData.type}}</td>
        <td colspan="2">接受健康教育人数：{{tableData.number}}</td>
      </tr>
      <tr>
        <td colspan="4">健康教育资料发放种类及数量：{{tableData.dataTypeNumber}}</td>
      </tr>
      <tr>
        <td colspan="4" height="200">活动内容：{{tableData.content}}</td>
      </tr>
      <tr>
        <td colspan="4" height="200">活动总结评价：{{tableData.evaluate}}</td>
      </tr>
      <tr>
        <td colspan="4">存档材料请附后<br/>
          □书面材料 □图片材料 □印刷材料 □影音材料 □签到表
          □其他材料
        </td>
      </tr>
      </tbody>
    </table>
    <span class="col-xs-12 col-sm-4 hidden-print">填表人（签字）：{{tableData.formHolder}}</span>
    <span class="col-xs-12 col-sm-4 hidden-print">负责人（签字）：{{tableData.headPerson}}</span>
    <span class="col-xs-12 col-sm-4 hidden-print">填表时间：{{tableData.formDate}} 年 月 日</span>

    <span class="col-xs-4 visible-print-block">填表人（签字）：{{tableData.formHolder}}</span>
    <span class="col-xs-4 visible-print-block">负责人（签字）：{{tableData.headPerson}}</span>
    <span class="col-xs-4 visible-print-block">填表时间：{{tableData.formDate}} 年 月 日</span>

    <br class="hidden-print"/>
    <br class="hidden-print"/>
    <br class="hidden-print"/>

    <table class="table table-bordered hidden-print">
      <caption class="">
        <h4 class="text-center">健康教育活动历史记录</h4>
      </caption >
      <tbody>
        <tr>
          <th>时间</th>
          <th>主题</th>
          <th>详情</th>
        </tr>
        <tr v-for="data in listData">
          <td>{{data.time}}</td>
          <td>{{data.title}}</td>
          <td><span>详情</span></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script type="text/ecmascript-6">
  import { getHE, getHEList } from '../../interface/index';

  export default {
    name: 'healthEducationActivities',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>健康教育活动表');
      this.getData();
      this.getList();
    },
    data() {
      return {
        tableData: '',
        listData: '',
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      getData() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getHE(),
          { params: { Id: 1 }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.tableData = res.body;
        }).catch((error) => {
          console.log(error);
        });
      },
      getList() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getHEList(),
          { params: { page: 1, pageSize: 10 }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.listData = res.body.results;
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
  .content{
    overflow: auto;
    padding-bottom: 30px;
  }
</style>
