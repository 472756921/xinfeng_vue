<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">2 型糖尿病患者随访服务记录表 </h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <th class="tg-yw4l" colspan="2">随访日期</th>
        <th class="tg-yw4l" colspan="2">年 月 日</th>
        <th class="tg-yw4l" colspan="2">年 月 日</th>
        <th class="tg-yw4l" colspan="2">年 月 日</th>
        <th class="tg-yw4l" colspan="2">年 月 日</th>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">随访方式</td>
        <td class="tg-yw4l" colspan="2">1门诊 2家庭 3电话</td>
        <td class="tg-yw4l" colspan="2">1门诊 2家庭 3电话</td>
        <td class="tg-yw4l" colspan="2">1门诊 2家庭 3电话</td>
        <td class="tg-yw4l" colspan="2">1门诊 2家庭 3电话</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">症<br>状</td>
        <td class="tg-yw4l" rowspan="2">1 无症状<br>2 多饮<br>3 多食<br>4 多尿<br>5 视力模糊<br>6 感染<br>7 手脚麻木<br>8 下肢浮肿<br>9 体重明显下降</td>
        <td class="tg-yw4l" colspan="2">□/□/□/□/□/□/□/□</td>
        <td class="tg-yw4l" colspan="2">□/□/□/□/□/□/□/□</td>
        <td class="tg-yw4l" colspan="2">□/□/□/□/□/□/□/□</td>
        <td class="tg-yw4l" colspan="2">□/□/□/□/□/□/□/□</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">其他：</td>
        <td class="tg-yw4l" colspan="2">其他：</td>
        <td class="tg-yw4l" colspan="2">其他：</td>
        <td class="tg-yw4l" colspan="2">其他：</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="5">体<br>征</td>
        <td class="tg-yw4l">血 压（mmHg）</td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">体 重（kg)</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
      </tr>
      <tr>
        <td class="tg-yw4l">体质指数（kg/m2）</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
      </tr>
      <tr>
        <td class="tg-yw4l">足背动脉搏动</td>
        <td class="tg-yw4l" colspan="2">1 触及正常 □<br>2 减弱（双侧 左侧 右侧）<br>3 消失（双侧 左侧 右侧）</td>
        <td class="tg-yw4l" colspan="2">1 触及正常 □<br>2 减弱（双侧 左侧 右侧）<br>3 消失（双侧 左侧 右侧）</td>
        <td class="tg-yw4l" colspan="2">1 触及正常 □<br>2 减弱（双侧 左侧 右侧）<br>3 消失（双侧 左侧 右侧）</td>
        <td class="tg-yw4l" colspan="2">1 触及正常 □<br>2 减弱（双侧 左侧 右侧）<br>3 消失（双侧 左侧 右侧）</td>
      </tr>
      <tr>
        <td class="tg-yw4l">其 他</td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="6">生<br>活<br>方<br>式<br>指<br>导</td>
        <td class="tg-yw4l">日吸烟量（支）</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
      </tr>
      <tr>
        <td class="tg-yw4l">日饮酒量（两）</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
      </tr>
      <tr>
        <td class="tg-yw4l">主食（克/天）</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
        <td class="tg-yw4l" colspan="2">/</td>
      </tr>
      <tr>
        <td class="tg-yw4l">摄盐情况（咸淡）</td>
        <td class="tg-yw4l" colspan="2">轻/中/重 <br>/轻/中/重</td>
        <td class="tg-yw4l" colspan="2">轻/中/重<br>轻/中/重</td>
        <td class="tg-yw4l" colspan="2">轻/中/重<br>轻/中/重</td>
        <td class="tg-yw4l" colspan="2">轻/中/重<br>轻/中/重</td>
      </tr>
      <tr>
        <td class="tg-yw4l">心理调整</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 差</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 差</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 差</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 差</td>
      </tr>
      <tr>
        <td class="tg-yw4l">遵医行为</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 差</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 差</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 差</td>
        <td class="tg-yw4l" colspan="2">1 良好 2 一般 3 差</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">辅助检查*</td>
        <td class="tg-yw4l">空腹血糖值</td>
        <td class="tg-yw4l" colspan="2">mmol/L</td>
        <td class="tg-yw4l" colspan="2">mmol/L</td>
        <td class="tg-yw4l" colspan="2">mmol/L</td>
        <td class="tg-yw4l" colspan="2">mmol/L</td>
      </tr>
      <tr>
        <td class="tg-yw4l">其他检查*</td>
        <td class="tg-yw4l" colspan="2">糖化血红蛋白 ％<br>检查日期： 月 日</td>
        <td class="tg-yw4l" colspan="2">糖化血红蛋白 ％<br>检查日期： 月 日</td>
        <td class="tg-yw4l" colspan="2">糖化血红蛋白 ％<br>检查日期： 月 日</td>
        <td class="tg-yw4l" colspan="2">糖化血红蛋白 ％<br>检查日期： 月 日</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">服药依从性</td>
        <td class="tg-yw4l" colspan="2">1 规律 2 间断 3 不服药</td>
        <td class="tg-yw4l" colspan="2">1 规律 2 间断 3 不服药</td>
        <td class="tg-yw4l" colspan="2">1 规律 2 间断 3 不服药</td>
        <td class="tg-yw4l" colspan="2">1 规律 2 间断 3 不服药</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">药物不良反应</td>
        <td class="tg-yw4l" colspan="2">1无 2有</td>
        <td class="tg-yw4l" colspan="2">1无 2有</td>
        <td class="tg-yw4l" colspan="2">1无 2有</td>
        <td class="tg-yw4l" colspan="2">1无 2有</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">低血糖反应</td>
        <td class="tg-yw4l" colspan="2">1 无 2 偶尔 3 频繁</td>
        <td class="tg-yw4l" colspan="2">1 无 2 偶尔 3 频繁</td>
        <td class="tg-yw4l" colspan="2">1 无 2 偶尔 3 频繁</td>
        <td class="tg-yw4l" colspan="2">1 无 2 偶尔 3 频繁</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">此次随访分类</td>
        <td class="tg-yw4l" colspan="2">1控制满意2控制不满意<br>3不良反应4并发症</td>
        <td class="tg-yw4l" colspan="2">1控制满意2控制不满意<br>3不良反应4并发症</td>
        <td class="tg-yw4l" colspan="2">1控制满意2控制不满意<br>3不良反应4并发症</td>
        <td class="tg-yw4l" colspan="2">1控制满意2控制不满意<br>3不良反应4并发症</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="3">用<br>药<br>情<br>况</td>
        <td class="tg-yw4l">药物名称 1</td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">用法用量</td>
        <td class="tg-yw4l">每日 次</td>
        <td class="tg-yw4l">每次</td>
        <td class="tg-yw4l">每日 次</td>
        <td class="tg-yw4l">每次</td>
        <td class="tg-yw4l">每日 次</td>
        <td class="tg-yw4l">每次</td>
        <td class="tg-yw4l">每日 次</td>
        <td class="tg-yw4l">每次</td>
      </tr>
      <tr>
        <td class="tg-yw4l">胰岛素</td>
        <td class="tg-yw4l" colspan="2">种类：<br>用法和用量：</td>
        <td class="tg-yw4l" colspan="2">种类：<br>用法和用量：</td>
        <td class="tg-yw4l" colspan="2">种类：<br>用法和用量：</td>
        <td class="tg-yw4l" colspan="2">种类：<br>用法和用量：</td>
      </tr>
      <tr>
        <td class="tg-yw4l" rowspan="2">转<br>诊</td>
        <td class="tg-yw4l">原 因</td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">机构及科别</td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">下次随访日期</td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="2">随访医生签名</td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
        <td class="tg-yw4l" colspan="2"></td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <thead>
      <tr>
        <th>姓名</th>
        <th>随访日期</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in listData.results">
        <td>{{data.name}}</td>
        <td>{{data.obj1[0].starTime}} ~ {{data.obj1[0].endTime}}</td>
        <td>详情 {{data.id}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { diabetesList, diabetes } from '../../interface';

  export default {
    name: 'followUpServiceRecordsForPatientsWithType2DiabetesMellitus',
    data() {
      return {
        tableData: '',
        listData: '',
      };
    },
    created() {
      this.getListData(1);
      this.getTableData(1);
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      getListData(ID) {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          diabetesList(),
          {
            params: {
              id: ID,
              page: 1,
              pageSize: 10,
            },
            headers: {
              authToken: authTokenes,
            },
          },
        ).then((res) => {
          this.listData = JSON.parse(res.bodyText);
        }).catch((error) => {
          console.log(error);
        });
      },
      getTableData(ID) {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          diabetes(),
          {
            params: {
              id: ID,
              starTime: '2017-09-09 ',
              endTime: '2017-11-09',
            },
            headers: {
              authToken: authTokenes,
            },
          },
        ).then((res) => {
          this.tableData = JSON.parse(res.bodyText);
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
