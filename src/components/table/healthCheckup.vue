<template>
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
      <div class="table-responsive">
        <table class="table table-bordered">
          <caption class="">
            <h3 class="text-center">健康体检表</h3>
            <span>姓名：</span>
            <span class="pull-right">编号：123-122332</span>
          </caption >
          <tbody>
          <tr>
            <th width="100">体检日期</th>
            <td width="150"> 年 月 日</td>
            <th>责任医生</th>
            <td colspan="3"></td>
          </tr>
          <tr>
            <th>内容</th>
            <th colspan="5" class="text-center">检查项目</th>
          </tr>
          <tr>
            <th>症状</th>
            <td colspan="5">1无症状 2头痛 3头晕 4心悸 5胸闷 6胸痛 7慢性咳嗽 8咳嗽 9呼吸困难 10多饮水 11多尿 12体重下降 13乏力 14关节肿痛 15视力模糊 16手脚麻木 17尿急 18尿痛 19便秘 20腹泻 21恶心呕吐 22眼花 23耳鸣 24乳房胀痛 25其他______
              <br/>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th rowspan="10">一般情况</th>
            <th>体温</th>
            <td class="text-right">℃</td>
            <th>脉率</th>
            <td colspan="2" class="text-right">次/分钟</td>
          </tr>
          <tr>
            <th rowspan="3">呼吸频率</th>
            <td rowspan="3" class="text-right">次/分钟</td>
            <th rowspan="3">血压</th>
          </tr>
          <tr>
            <th>左侧</th>
            <td class="text-right">/mmHg</td>
          </tr>
          <tr>
            <th>右侧</th>
            <td class="text-right">/mmHg</td>
          </tr>
          <tr>
            <th>身高</th>
            <td class="text-right">cm</td>
            <th>体重</th>
            <td colspan="2" class="text-right">KG</td>
          </tr>
          <tr>
            <th>腰围</th>
            <td class="text-right">cm</td>
            <th>体质指数(BMI)</th>
            <td colspan="2" class="text-right">Kg/m2</td>
          </tr>
          <tr>
            <th>老年人健康状态自我评估*</th>
            <td colspan="4">
              1满意 2基本满意 3说不清楚 4不太满意 5不满意
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>老年人健生活自理能力自我评估*</th>
            <td colspan="4">
              1可自理（0-3分） 2轻度依赖（4-8分） 3中度依赖（9-18分） 4不能自理（≥19分）
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>老年人健认知功能*</th>
            <td colspan="4">
              1初筛阴性 2初筛阳性，简易智力状态检查，总分______
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>老年人情感状态*</th>
            <td colspan="4">
              1初筛阴性 2初筛阳性，老年人抑郁评分检查，总分______
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th rowspan="13">生活方式</th>
            <th rowspan="3">体育锻炼</th>
            <th>锻炼频率</th>
            <td colspan="3">1每天 2每周一次以上 3偶尔 4不锻炼<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>每次锻炼时间</th>
            <td>分钟</td>
            <th>坚持锻炼时间</th>
            <th>年</th>
          </tr>
          <tr>
            <th>锻炼方式</th>
            <td colspan="3"></td>
          </tr>
          <tr>
            <th>饮食习惯</th>
            <td colspan="4">1荤素均衡 2荤食为主 3素食为主 4嗜盐 5嗜油 6嗜糖
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th rowspan="3">吸烟情况</th>
            <th>吸烟状况</th>
            <td colspan="3">1从不吸烟 2已戒烟 3吸烟 <span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>日吸烟量</th>
            <td colspan="3">平均____支</td>
          </tr>
          <tr>
            <th>开始吸烟年龄</th>
            <td>____岁</td>
            <th>戒烟年龄</th>
            <td>____岁</td>
          </tr>
          <tr>
            <th rowspan="5">饮酒情况</th>
            <th>饮酒频率</th>
            <td colspan="3">1从不 2偶尔 3经常 4每天<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>日饮酒量</th>
            <td colspan="3">平均____两</td>
          </tr>
          <tr>
            <th>是否戒酒</th>
            <td colspan="3">1未戒酒 2已戒酒，戒酒年龄___岁<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>开始饮酒年龄</th>
            <td>____岁</td>
            <th>近一年内是否醉酒</th>
            <td colspan="3">1是 2否<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>饮酒种类</th>
            <td colspan="3">1白酒 2啤酒 3红酒 4黄酒 5其他___ <span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>职业危害因素接触史</th>
            <td colspan="4">
              1有 2无（工种_____从业时间___年）<span class="checkBox">1</span><br/>
              毒物种类  <br/>
              粉尘______________防护措施1无 2有<span class="checkBox">1</span><br/>
              放射物质__________防护措施1无 2有<span class="checkBox">1</span><br/>
              物理因素__________防护措施1无 2有<span class="checkBox">1</span><br/>
              化学物质__________防护措施1无 2有<span class="checkBox">1</span><br/>
              其他______________防护措施1无 2有<span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th rowspan="4">脏器功能</th>
            <th>口腔</th>
            <td colspan="4">
              口唇 1红润 2苍白 3发绀 4皸裂 5疱疹<span class="checkBox">1</span><br/>
              齿裂 1正常 2缺牙 3龋齿 4义牙（假牙）<span class="checkBox">1</span><span class="pull-right">&nbsp;/&nbsp;</span><span class="checkBox">1</span><span class="pull-right">&nbsp;/&nbsp;</span><span class="checkBox">1</span><br/>
              咽部 1无充血 2充血 3淋巴滤泡增生 <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>视力</th>
            <td colspan="4">左眼____右眼____（矫正视力：左眼___右眼___）</td>
          </tr>
          <tr>
            <th>听力</th>
            <td colspan="4">1听见 2听不清或无法听见<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>运动功能</th>
            <td colspan="4">1可顺利完成 2无法独立完成任何一个动作<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th rowspan="19">查体</th>
            <th>眼底*</th>
            <td colspan="4">1正常 2异常_______<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>皮肤</th>
            <td colspan="4">1正常 2潮红 3苍白 4发绀 5黄染 6色素沉着 7其他_______<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>巩膜</th>
            <td colspan="4">1正常 2黄染 3充血 4其他_______<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>淋巴结</th>
            <td colspan="4">1未触及 2锁骨上 3腋窝 4其他_______<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th rowspan="3">肺</th>
            <td colspan="4">桶状胸 1否 2是<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <td colspan="4">呼吸音 1正常 2异常____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <td colspan="4">罗音 1无 2干罗音 3湿罗音 4其他____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>心脏</th>
            <td colspan="4">
              心率：______次/分钟 心率：1齐 2不齐 3绝对不齐<span class="checkBox">1</span><br/>
              杂音：1无 2有_____<span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>腹部</th>
            <td colspan="4">
              压痛：1无 2有_____<span class="checkBox">1</span><br/>
              包块：1无 2有_____<span class="checkBox">1</span><br/>
              肝大：1无 2有_____<span class="checkBox">1</span><br/>
              脾大：1无 2有_____<span class="checkBox">1</span><br/>
              移动性浊音：1无 2有_____<span class="checkBox">1</span><br/>
            </td>
          </tr>
          <tr>
            <th>下肢水肿</th>
            <td colspan="4">1无 2单侧 3双侧不对称 4双侧对称<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>足背动脉搏动</th>
            <td colspan="4">1未触及 2触及双侧对称 3触及左侧弱或消失 4触及右侧弱或消失<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>肛门指诊*</th>
            <td colspan="4">1未及异常 2触痛 3包块 4前列腺异常 5其他_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>乳腺*</th>
            <td colspan="4">
              1未见异常 2乳房切除 3异常泌乳 4乳腺包块 5其他_____
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th rowspan="5">妇科*</th>
            <td >外阴</td>
            <td colspan="3">1未见异常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <td >阴道</td>
            <td colspan="3">1未见异常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <td>宫颈</td>
            <td colspan="3">1未见异常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <td>宫体</td>
            <td colspan="3">1未见异常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <td>附件</td>
            <td colspan="3">1未见异常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <td>其他</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <th rowspan="16">辅助检查</th>
            <th>血常规*</th>
            <td colspan="4">
              血红蛋白________g/L 白细胞________*10<sup>9</sup>/L 血小板________*10<sup>9</sup>/L
              其他____________________________
            </td>
          </tr>
          <tr>
            <th>尿常规*</th>
            <td colspan="4">
              尿蛋白________尿糖________尿酮体________尿潜血________
              其他____________________________
            </td>
          </tr>
          <tr>
            <th>空腹血糖*</th>
            <td colspan="4">
              ______mmol/L或_________mg/dL
            </td>
          </tr>
          <tr>
            <th>心电图*</th>
            <td colspan="4">1正常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>尿微量白蛋白*</th>
            <td colspan="4">_________mg/dL</td>
          </tr>
          <tr>
            <th>大便潜血*</th>
            <td colspan="4">1阴性 2阳性<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>糖化血红蛋白*</th>
            <td colspan="4">___________%</td>
          </tr>
          <tr>
            <th>乙型肝炎表面抗原*</th>
            <td colspan="4">1阴性 2阳性<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>肝功能*</th>
            <td colspan="4">
              血清谷丙转氨酶______U/L  &nbsp;&nbsp; 血清谷草转氨酶_________U/L  &nbsp;&nbsp;
              白蛋白_____________g/L  &nbsp;&nbsp; 总胆红素______________μmol/L  &nbsp;&nbsp;
              结合胆红素______________μmol/L
            </td>
          </tr>
          <tr>
            <th>肾功能*</th>
            <td colspan="4">
              血清肌酐______μmol/L  &nbsp;&nbsp; 血尿素_________mmol/L  &nbsp;&nbsp;
              血钾浓度_____________mmol/L  &nbsp;&nbsp; 血钠浓度______________mmol/L  &nbsp;&nbsp;
            </td>
          </tr>
          <tr>
            <th>血脂*</th>
            <td colspan="4">
              总胆固醇______mmol/L  &nbsp;&nbsp; 甘油三酯_________mmol/L  &nbsp;&nbsp;
              血清低密度脂胆固醇_____________mmol/L  &nbsp;&nbsp; 血清低高度脂胆固醇______________mmol/L  &nbsp;&nbsp;
            </td>
          </tr>
          <tr>
            <th>胸部X线片*</th>
            <td colspan="4">1正常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th rowspan="2">B超*</th>
            <td colspan="4">腹部B超 1正常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <td colspan="4">其他 1正常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>宫颈涂片*</th>
            <td colspan="4">1正常 2异常_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>其他*</th>
            <td colspan="4"></td>
          </tr>
          <tr>
            <th rowspan="7">现存在主要健康问题</th>
            <th>脑血管疾病</th>
            <td colspan="4">
              1未发现 2缺血性卒中 3脑出血 4虹网膜下腔出血 5短暂性脑缺血发作 6其他_____
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>肾脏疾病</th>
            <td colspan="4">
              1未发现 2糖尿病肾病 3肾功能衰竭 4急性肾炎 5慢性肾炎 6其他_____
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>心脏疾病</th>
            <td colspan="4">
              1未发现 2心肌梗死 3心绞痛 4冠状运动血运重建 5充血性心力衰竭 6心前区疼痛 7其他_____
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>血管疾病</th>
            <td colspan="4">
              1未发现 2夹层动脉瘤 3动脉闭塞性疾病 4其他_____
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>眼部疾病</th>
            <td colspan="4">
              1未发现 2视网膜出血或渗出 3视乳头水肿 4白内障 5其他_____
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
          </tr>
          <tr>
            <th>神经系统疾病</th>
            <td colspan="4">1未发现 2有_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>其他系统疾病</th>
            <td colspan="4">1未发现 2有_____<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th rowspan="6">住院治疗情况</th>
            <th rowspan="3">住院史</th>
            <th>入/出院日期</th>
            <th>原因</th>
            <th>医疗机构名称</th>
            <th>病案号</th>
          </tr>
          <tr>
            <td>/</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>/</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th rowspan="3">家庭病史</th>
            <th>建/撤床日期</th>
            <th>原因</th>
            <th>医疗机构名称</th>
            <th>病案号</th>
          </tr>
          <tr>
            <td>/</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>/</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th rowspan="7">主要用药情况</th>
            <th>药物名称</th>
            <th>用法</th>
            <th>用量</th>
            <th>用药时间</th>
            <th>
              服药已从性<br/>
              1规律 2间断 3不服药
            </th>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th rowspan="4">非免疫规划预防接种史</th>
            <th>名称</th>
            <th colspan="2">接种日期</th>
            <th colspan="2">接种机构</th>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>健康评价</th>
            <td colspan="5">
              <span class="checkBox">1</span>
              1体检无异常<br/>
              2有异常<br/>
              异常1__________<br/>
              异常2__________<br/>
              异常3__________<br/>
              异常4__________<br/>
            </td>
          </tr>
          <tr>
            <th>健康指导记录</th>
            <td colspan="3">
              1纳入慢病患者健康管理<br/>
              2建议复查<br/>
              3建议转诊<br/>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
            </td>
            <td colspan="2">
              危险因素控制：
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <span class="pull-right">&nbsp;/&nbsp;</span>
              <span class="checkBox">1</span>
              <br/>
              1戒烟 2健康饮酒 3饮食 4锻炼 5减体重（目标____KG）<br/> 6建议接种疫苗________ 7其他____________
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HealthCheckup',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>健康体检表');
    },
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
  .checkBox{
    font-size: 12px;
    border: 1px solid #999;
    padding: 0 4px;
    float: right;
  }
</style>
