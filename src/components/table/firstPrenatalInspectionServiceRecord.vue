<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">第 1 次产前检查服务记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
        <tr>
          <td>填表日期</td>
          <td>年 月 日</td>
          <td>孕周</td>
          <td></td>
          <td colspan="2">周</td>
        </tr>
        <tr>
          <td>孕妇年龄</td>
          <td colspan="5"></td>
        </tr>
        <tr>
          <td>丈夫姓名</td>
          <td></td>
          <td>丈夫年龄</td>
          <td></td>
          <td>丈夫电话</td>
          <td></td>
        </tr>
        <tr>
          <td>孕次</td>
          <td></td>
          <td>产次</td>
          <td colspan="3">阴道分娩 次 剖宫产 次</td>
        </tr>
        <tr>
          <td>末次月经</td>
          <td>年 月 日或不详</td>
          <td>预 产 期</td>
          <td colspan="3">年 月 日</td>
        </tr>
        <tr>
          <td>既往史</td>
          <td colspan="5">1 无 2 心脏病 3 肾脏疾病 4 肝脏疾病 5 高血压 6 贫血 7 糖尿病 8 其他</td>
        </tr>
        <tr>
          <td>家族史</td>
          <td colspan="5">1 无 2 遗传性疾病史 3 精神疾病史 4 其他</td>
        </tr>
        <tr>
          <td>个人史</td>
          <td colspan="5">1 无特殊 2 吸烟 3 饮酒 4 服用药物 5 接触有毒有害物质<br>6 接触放射线 7 其他</td>
        </tr>
        <tr>
          <td>妇产科手术史</td>
          <td colspan="5">1 无 ２有</td>
        </tr>
        <tr>
          <td>孕产史</td>
          <td colspan="5">1 自然流产 2 人工流产 3 死胎 4 死产 5 新生儿死亡 6 出生缺陷儿</td>
        </tr>
        <tr>
          <td>身高</td>
          <td>cm</td>
          <td></td>
          <td>体重</td>
          <td colspan="2">Kg</td>
        </tr>
        <tr>
          <td>体质指数（BMI)</td>
          <td>kg/m2</td>
          <td></td>
          <td>血压</td>
          <td colspan="2">/ mmHg</td>
        </tr>
        <tr>
          <td>听诊</td>
          <td colspan="2">心脏：1 未见异常 2 异常</td>
          <td colspan="3">肺部：1 未见异常 2 异常</td>
        </tr>
        <tr>
          <td rowspan="3">妇科检查</td>
          <td colspan="2">外阴：1未见异常 2 异常</td>
          <td colspan="3">阴道：1 未见异常 2 异常</td>
        </tr>
        <tr>
          <td colspan="2">宫颈：1 未见异常 2 异常</td>
          <td colspan="3">子宫：1 未见异常 2 异常</td>
        </tr>
        <tr>
          <td colspan="2">附件: 1 未见异常 2 异常</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td rowspan="14">辅助检查</td>
          <td colspan="2">血常规</td>
          <td colspan="3">血红蛋白值 g/L 白细胞计数值 /L血小板计数值 /L 其他</td>
        </tr>
        <tr>
          <td colspan="2">尿常规</td>
          <td colspan="3">尿蛋白 尿糖 尿酮体 尿潜血 其他</td>
        </tr>
        <tr>
          <td rowspan="2">血型</td>
          <td>ABO</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td>Rh*</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2">血糖*</td>
          <td colspan="3">mmol/L</td>
        </tr>
        <tr>
          <td colspan="2">肝功能</td>
          <td colspan="3">血清谷丙转氨酶 U/L 血清谷草转氨酶 U/L<br>白蛋白 g/L 总胆红素 μmol/L 结合胆红素 μmol/L</td>
        </tr>
        <tr>
          <td colspan="2">肾功能</td>
          <td colspan="3">血清肌酐 μmol/L 血尿素 mmol/L</td>
        </tr>
        <tr>
          <td colspan="2" rowspan="2">阴道分泌物*</td>
          <td colspan="3">1 未见异常 2 滴虫 3 假丝酵母菌 4 其他</td>
        </tr>
        <tr>
          <td colspan="3">阴道清洁度：1Ⅰ度 2Ⅱ度 3 Ⅲ度 4 Ⅳ度</td>
        </tr>
        <tr>
          <td colspan="2">乙型肝炎</td>
          <td colspan="3">乙型肝炎表面抗原 乙型肝炎表面抗体*<br>乙型肝炎 e 抗原* 乙型肝炎 e 抗体*<br>乙型肝炎核心抗体*</td>
        </tr>
        <tr>
          <td colspan="2">梅毒血清学试验*</td>
          <td colspan="3">1阴性 2 阳性</td>
        </tr>
        <tr>
          <td colspan="2">HIV 抗体检测*</td>
          <td colspan="3">1阴性 2 阳性</td>
        </tr>
        <tr>
          <td colspan="2">B 超*</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="2">其他*</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td>总体评估</td>
          <td colspan="5">1 未见异常 2 异常</td>
        </tr>
        <tr>
          <td>保健指导</td>
          <td colspan="5">1 生活方式 2 心理 3 营养 4 避免致畸因素和疾病对胚胎的不良影响<br>5产前筛查宣传告知 6其他</td>
        </tr>
        <tr>
          <td colspan="6">转诊 1 无 2 有 <br>原因： 机构及科室：</td>
        </tr>
        <tr>
          <td colspan="2">下次随访日期</td>
          <td colspan="2">年 月 日</td>
          <td colspan="2">随访医生签名</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'firstPrenatalInspectionServiceRecord',
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
