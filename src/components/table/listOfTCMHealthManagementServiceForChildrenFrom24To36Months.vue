<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">6～18 月龄儿童中医药健康管理服务记录表 </h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <th class="tg-yw4l">月 龄</th>
        <th class="tg-yw4l">24 月龄</th>
        <th class="tg-yw4l">30 月龄</th>
        <th class="tg-yw4l">36 月龄</th>
      </tr>
      <tr>
        <td class="tg-yw4l">随访日期</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">中医药健康管理服务</td>
        <td class="tg-yw4l">1.中医饮食调养指导<br>2.中医起居调摄指导<br>3.传授按揉迎香穴、足三里穴方法<br>4.其他：</td>
        <td class="tg-yw4l">1.中医饮食调养指导<br>2.中医起居调摄指导<br>3.传授按揉迎香穴、足三里穴方法<br>4.其他：</td>
        <td class="tg-yw4l">1.中医饮食调养指导<br>2.中医起居调摄指导<br>3.传授按揉迎香穴、足三里穴方法<br>4.其他：</td>
      </tr>
      <tr>
        <td class="tg-yw4l">下次随访日期</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">随访医生签名</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      </tbody>
    </table>
    <p>
      <h4>填表说明:</h4>
    1．印制新表格时可在“0～6 岁儿童健康管理服务规范”所列儿童健康检查记录表基础上增加“中医药健康管理服务”内容。<br/>
    2．中医药健康管理服务：请在所提供服务对应的选项上划“√”，可多选。其他服务请注明。
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'listOfTCMHealthManagementServiceForChildrenFrom24To36Months',
    methods: {
      back() {
        this.$router.go(-1);
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
