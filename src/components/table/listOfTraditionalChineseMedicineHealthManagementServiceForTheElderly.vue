<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption>
        <h3 class="text-center">老年人中医药健康管理服务记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：</span>
      </caption >
      <tbody>
      <tr>
        <th class="tg-yw4l" colspan="5">请根据近一年的体验和感觉，回答以下问题。</th>
        <th class="tg-yw4l">没有(根本不/从来没有)</th>
        <th class="tg-yw4l">很少(有一点/偶尔)</th>
        <th class="tg-yw4l">有时(有些/少数时间)</th>
        <th class="tg-yw4l">经常(相当/多数时间)</th>
        <th class="tg-yw4l">总是(非常/每天)</th>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(1)您精力充沛吗？（指精神头足，乐于做事）</td>
        <td class="tg-yw4l">1</td>
        <td class="tg-yw4l">2</td>
        <td class="tg-yw4l">3</td>
        <td class="tg-yw4l">4</td>
        <td class="tg-yw4l">5</td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(2)您容易疲乏吗？（指体力如何，是否稍微活动一下或做一点家务劳动就感到累）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(3)您容易气短，呼吸短促，接不上气吗？</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(4)您说话声音低弱无力吗?（指说话没有力气）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(5)您感到闷闷不乐、情绪低沉吗?（指心情不愉快，情绪低落）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(6)您容易精神紧张、焦虑不安吗?（指遇事是否心情紧张）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(7)您因为生活状态改变而感到孤独、失落吗？</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(8)您容易感到害怕或受到惊吓吗?</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(9)您感到身体超重不轻松吗?(感觉身体沉重)<br>[BMI 指数=体重（kg）/身高 2（m）]</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(10)您眼睛干涩吗?</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(11)您手脚发凉吗?（不包含因周围温度低或穿的少导致的手脚发冷）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(12)您胃脘部、背部或腰膝部怕冷吗？（指上腹部、背部、腰部或膝关节等，有一处或多处怕冷）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(13)您比一般人耐受不了寒冷吗？（指比别人容易害怕冬天或是夏天的冷空调、电扇等）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(14)您容易患感冒吗?（指每年感冒的次数）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(15)您没有感冒时也会鼻塞、流鼻涕吗?</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(16)您有口粘口腻，或睡眠打鼾吗？</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(17)您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗?</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(18)您的皮肤容易起荨麻疹吗? (包括风团、风疹块、风疙瘩)</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(19)您的皮肤在不知不觉中会出现青紫瘀斑、皮下出血吗?（指皮肤在没<br>有外伤的情况下出现青一块紫一块的情况）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(20)您的皮肤一抓就红，并出现抓痕吗?（指被指甲或钝物划过后皮肤的反应）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(21)您皮肤或口唇干吗?</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(22)您有肢体麻木或固定部位疼痛的感觉吗？</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(23)您面部或鼻部有油腻感或者油亮发光吗?（指脸上或鼻子）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(24)您面色或目眶晦黯，或出现褐色斑块/斑点吗?</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(25)您有皮肤湿疹、疮疖吗？</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(26)您感到口干咽燥、总想喝水吗？</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(27)您感到口苦或嘴里有异味吗?（指口苦或口臭）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(28)您腹部肥大吗?（指腹部脂肪肥厚）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(29)您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？（指不喜欢吃凉的食物，或吃了凉的食物后会不舒服）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(30)您有大便黏滞不爽、解不尽的感觉吗?(大便容易粘在马桶或便坑壁上)</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(31)您容易大便干燥吗?</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(32)您舌苔厚腻或有舌苔厚厚的感觉吗?（如果自我感觉不清楚可由调查员观察后填写）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l" colspan="5">(33)您舌下静脉瘀紫或增粗吗？（可由调查员辅助观察后填写）</td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
        <td class="tg-yw4l"></td>
      </tr>
      <tr>
        <td class="tg-yw4l">体质<br>类型</td>
        <td class="tg-yw4l">气虚质</td>
        <td class="tg-yw4l">阳虚质</td>
        <td class="tg-yw4l">阴虚质</td>
        <td class="tg-yw4l">痰湿质</td>
        <td class="tg-yw4l">湿热质</td>
        <td class="tg-yw4l">血瘀质</td>
        <td class="tg-yw4l">气郁质</td>
        <td class="tg-yw4l">特禀质</td>
        <td class="tg-yw4l">平和质</td>
      </tr>
      <tr>
        <td class="tg-yw4l">体质辨识</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
        <td class="tg-yw4l">1．得分<br>2．是<br>3．倾向是</td>
      </tr>
      <tr>
        <td class="tg-yw4l">中医药<br>保健<br>指导</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
        <td class="tg-yw4l">1．情志调摄<br>2．饮食调养<br>3．起居调摄<br>4．运动保健<br>5．穴位保健<br>6．其他：</td>
      </tr>
      <tr>
        <td class="tg-yw4l">填表日期</td>
        <td class="tg-yw4l" colspan="3"></td>
        <td class="tg-yw4l" colspan="2">年 月 日</td>
        <td class="tg-yw4l" colspan="4">医生签名</td>
      </tr>
      </tbody>
    </table>
    <br/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'listOfTraditionalChineseMedicineHealthManagementServiceForTheElderly',
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
