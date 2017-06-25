<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <h5 class="check hidden-print"><span @click="back">返回上一级</span></h5>
      <div class="table-responsive">
        <table class="table table-bordered">
          <caption class="">
            <h3 class="text-center">健康体检表</h3>
            <span>姓名：</span>
            <span class="pull-right">编号：{{tableData.code}}</span>
          </caption >
          <tbody>
          <tr>
            <th width="100">体检日期</th>
            <td width="150">{{tableData.checkTime.split(' ')[0]}}</td>
            <th>责任医生</th>
            <td colspan="3">{{tableData.responsibleDoctor}}</td>
          </tr>
          <tr>
            <th>内容</th>
            <th colspan="5" class="text-center">检查项目</th>
          </tr>
          <tr>
            <th>症状</th>
            <td colspan="5">1无症状 2头痛 3头晕 4心悸 5胸闷 6胸痛 7慢性咳嗽 8咳嗽 9呼吸困难
              10多饮水 11多尿 12体重下降 13乏力 14关节肿痛 15视力模糊 16手脚麻木 17尿急 18尿痛 19便秘
              20腹泻 21恶心呕吐 22眼花 23耳鸣 24乳房胀痛 25其他<span class="unline">{{getTheContent(tableData.symptom).ortherData}}</span>
              <br/>
              <span v-for="(da, index) in getTheContent(tableData.symptom).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th rowspan="10">一般情况</th>
            <th>体温</th>
            <td class="text-right">{{tableData.temperature}}℃</td>
            <th>脉率</th>
            <td colspan="2" class="text-right">{{tableData.pulseRate}}次/分钟</td>
          </tr>
          <tr>
            <th rowspan="3">呼吸频率</th>
            <td rowspan="3" class="text-right">{{tableData.respiratoryRate}}次/分钟</td>
            <th rowspan="3">血压</th>
          </tr>
          <tr>
            <th>左侧</th>
            <td class="text-right">{{tableData.leftSideOfBloodPressure}}/mmHg</td>
          </tr>
          <tr>
            <th>右侧</th>
            <td class="text-right">{{tableData.rightSideOfBloodPressure}}/mmHg</td>
          </tr>
          <tr>
            <th>身高</th>
            <td class="text-right">{{tableData.height}}cm</td>
            <th>体重</th>
            <td colspan="2" class="text-right">{{tableData.weight}}KG</td>
          </tr>
          <tr>
            <th>腰围</th>
            <td class="text-right">{{tableData.theWaist}}cm</td>
            <th>体质指数(BMI)</th>
            <td colspan="2" class="text-right">{{tableData.bmi}}Kg/m2</td>
          </tr>
          <tr>
            <th>老年人健康状态自我评估*</th>
            <td colspan="4">
              1满意 2基本满意 3说不清楚 4不太满意 5不满意
              <span class="checkBox">{{tableData.geriatricHealthSelfAssessment}}</span>
            </td>
          </tr>
          <tr>
            <th>老年人健生活自理能力自我评估*</th>
            <td colspan="4">
              1可自理（0-3分） 2轻度依赖（4-8分） 3中度依赖（9-18分） 4不能自理（≥19分）
              <span class="checkBox">{{tableData.selfAssessmentOfLivingAbility}}</span>
            </td>
          </tr>
          <tr>
            <th>老年人健认知功能*</th>
            <td colspan="4">
              1初筛阴性 2初筛阳性，简易智力状态检查，总分<span class="unline">{{getTheContent(tableData.cognitiveFunction).ortherData}}</span>
              <span class="checkBox">{{tableData.cognitiveFunction.split('^')[0]}}</span>
            </td>
          </tr>
          <tr>
            <th>老年人情感状态*</th>
            <td colspan="4">
              1初筛阴性 2初筛阳性，老年人抑郁评分检查，总分<span class="unline">{{getTheContent(tableData.emotionalState).ortherData}}</span>
              <span class="checkBox">{{tableData.emotionalState.split('^')[0]}}</span>
            </td>
          </tr>
          <tr>
            <th rowspan="13">生活方式</th>
            <th rowspan="3">体育锻炼</th>
            <th>锻炼频率</th>
            <td colspan="3">1每天 2每周一次以上 3偶尔 4不锻炼<span class="checkBox" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.exerciseFrequency}}</span></td>
          </tr>
          <tr>
            <th>每次锻炼时间</th>
            <td v-if="tableData.lifeStyle!=undefined"><span class="unline">{{tableData.lifeStyle.exerciseTime}}</span>分钟</td>
            <th>坚持锻炼时间</th>
            <td v-if="tableData.lifeStyle!=undefined"><span class="unline">{{tableData.lifeStyle.adhereToTheTime}}</span>年</td>
          </tr>
          <tr>
            <th>锻炼方式</th>
            <td colspan="3" v-if="tableData.lifeStyle!=undefined"><span class="unline">{{tableData.lifeStyle.exerciseMethod}}</span></td>
          </tr>
          <tr>
            <th>饮食习惯</th>
            <td colspan="4">1荤素均衡 2荤食为主 3素食为主 4嗜盐 5嗜油 6嗜糖
              <span v-for="(da, index) in getTheContent(tableData.eatingHabits).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th rowspan="3">吸烟情况</th>
            <th>吸烟状况</th>
            <td colspan="3">1从不吸烟 2已戒烟 3吸烟 <span class="checkBox" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.smokingStatus}}</span></td>
          </tr>
          <tr>
            <th>日吸烟量</th>
            <td colspan="3">平均<span class="unline" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.dailySmoking}}</span></td>
          </tr>
          <tr>
            <th>开始吸烟年龄</th>
            <td><span class="unline" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.startDrinkingAge}}</span>岁</td>
            <th>戒烟年龄</th>
            <td><span class="unline" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.smokingCessationAge}}</span>岁</td>
          </tr>
          <tr>
            <th rowspan="5">饮酒情况</th>
            <th>饮酒频率</th>
            <td colspan="3">1从不 2偶尔 3经常 4每天<span class="checkBox" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.drinkingFrequency}}</span></td>
          </tr>
          <tr>
            <th>日饮酒量</th>
            <td colspan="3">平均<span class="unline" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.dailyDrinkingCapacity}}</span> 两</td>
          </tr>
          <tr>
            <th>是否戒酒</th>
            <td colspan="3">1未戒酒 2已戒酒，戒酒年龄<span class="unline" v-if="tableData.lifeStyle!=undefined"> {{tableData.lifeStyle.abstinenceAge}}</span>岁
              <span class="checkBox"  v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.abstinence}}</span></td>
          </tr>
          <tr>
            <th>开始饮酒年龄</th>
            <td><span class="unline" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.startDrinkingAge}}</span> 岁</td>
            <th>近一年内是否醉酒</th>
            <td colspan="3">1是 2否<span class="checkBox">1</span></td>
          </tr>
          <tr>
            <th>饮酒种类</th>
            <td colspan="3">1白酒 2啤酒 3红酒 4黄酒 5其他 <span class="unline">{{getTheContent(tableData.lifeStyle.drunkType).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.lifeStyle.drunkType).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>职业危害因素接触史</th>
            <td colspan="4">
              1有 2无（工种<span class="unline" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.typeOfWork}}</span>
              从业时间<span class="unline" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.employmentTime}}</span> 年）
              <span class="checkBox" v-if="tableData.lifeStyle!=undefined">{{tableData.lifeStyle.typeOfWork}}</span><br/>
              毒物种类  <br/>
              粉尘<span class="unline" v-if="tableData.lifeStyle!=undefined">{{getTheContent(tableData.lifeStyle.dustProtection).ortherData}}</span>防护措施1无 2有
              <span v-for="(da, index) in getTheContent(tableData.lifeStyle.dustProtection).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
              放射物质<span class="unline" v-if="tableData.lifeStyle!=undefined">{{getTheContent(tableData.lifeStyle.radioactiveSubstanceProtection).ortherData}}</span>防护措施1无 2有
              <span v-for="(da, index) in getTheContent(tableData.lifeStyle.radioactiveSubstanceProtection).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
              物理因素<span class="unline" v-if="tableData.lifeStyle!=undefined">{{getTheContent(tableData.lifeStyle.physicalFactorsProtection).ortherData}}</span>防护措施1无 2有
              <span v-for="(da, index) in getTheContent(tableData.lifeStyle.physicalFactorsProtection).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
              化学物质<span class="unline" v-if="tableData.lifeStyle!=undefined">{{getTheContent(tableData.lifeStyle.chemicalSubstancesProtection).ortherData}}</span>防护措施1无 2有
              <span v-for="(da, index) in getTheContent(tableData.lifeStyle.chemicalSubstancesProtection).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
              其他<span class="unline" v-if="tableData.lifeStyle!=undefined">{{getTheContent(tableData.lifeStyle.otherPoisonProtection).ortherData}}</span>防护措施1无 2有
              <span v-for="(da, index) in getTheContent(tableData.lifeStyle.otherPoisonProtection).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th rowspan="4">脏器功能</th>
            <th>口腔</th>
            <td colspan="4">
              口唇 1红润 2苍白 3发绀 4皸裂 5疱疹<span class="checkBox">{{tableData.lips}}</span><br/>
              齿裂 1正常 2缺牙 3龋齿 4义牙（假牙）
              <span v-for="(da, index) in getTheContent(tableData.dentition).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
              <br/>
              咽部 1无充血 2充血 3淋巴滤泡增生 <span class="checkBox">{{tableData.pharynx}}</span>
            </td>
          </tr>
          <tr>
            <th>视力</th>
            <td colspan="4">
              左眼<span class="unline">{{tableData.leftEye}}</span>
              右眼<span class="unline">{{tableData.rightEye}}</span>
              （矫正视力：左眼<span class="unline">{{tableData.correctiveLeftEye}}</span>右眼<span class="unline">{{tableData.correctiveRightEye}}</span>）
            </td>
          </tr>
          <tr>
            <th>听力</th>
            <td colspan="4">1听见 2听不清或无法听见<span class="checkBox">{{tableData.hearing}}</span></td>
          </tr>
          <tr>
            <th>运动功能</th>
            <td colspan="4">1可顺利完成 2无法独立完成任何一个动作<span class="checkBox">{{tableData.motorFunction}}</span></td>
          </tr>
          <tr>
            <th rowspan="19">查体</th>
            <th>眼底*</th>
            <td colspan="4">1正常 2异常<span class="unline">{{getTheContent(tableData.checkTheBody.theFundusOculi).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.checkTheBody.theFundusOculi).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>皮肤</th>
            <td colspan="4">1正常 2潮红 3苍白 4发绀 5黄染 6色素沉着 7其他<span class="unline">{{getTheContent(tableData.checkTheBody.skin).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.checkTheBody.skin).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>巩膜</th>
            <td colspan="4">1正常 2黄染 3充血 4其他<span class="unline">{{getTheContent(tableData.checkTheBody.sclera).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.checkTheBody.sclera).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>淋巴结</th>
            <td colspan="4">1未触及 2锁骨上 3腋窝 4其他<span class="unline">{{getTheContent(tableData.checkTheBody.lymphGland).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.checkTheBody.lymphGland).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th rowspan="3">肺</th>
            <td colspan="4">桶状胸 1否 2是<span class="checkBox">{{tableData.checkTheBody.barrelChest}}</span></td>
          </tr>
          <tr>
            <td colspan="4">呼吸音 1正常 2异常<span class="unline">{{getTheContent(tableData.checkTheBody.breathSounds).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.checkTheBody.breathSounds).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td colspan="4">罗音 1无 2干罗音 3湿罗音 4其他<span class="unline">{{getTheContent(tableData.checkTheBody.rale).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.checkTheBody.rale).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>心脏</th>
            <td colspan="4">
              心率：<span class="unline">{{tableData.checkTheBody.heartRate}}</span> 次/分钟 心律：1齐 2不齐 3绝对不齐<span class="checkBox">{{tableData.checkTheBody.rhythm}}</span><br/>
              杂音：1无 2有<span class="unline">{{getTheContent(tableData.checkTheBody.noise).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.checkTheBody.noise).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>腹部</th>
            <td colspan="4">
              压痛：1无 2有<span class="unline">{{getTheContent(tableData.checkTheBody.tenderness).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.tenderness).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
              包块：1无 2有<span class="unline">{{getTheContent(tableData.checkTheBody.bagPiece).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.bagPiece).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
              肝大：1无 2有<span class="unline">{{getTheContent(tableData.checkTheBody.liver).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.liver).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
              脾大：1无 2有<span class="unline">{{getTheContent(tableData.checkTheBody.splenomegaly).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.splenomegaly).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
              移动性浊音：1无 2有<span class="unline">{{getTheContent(tableData.checkTheBody.mobileDullness).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.mobileDullness).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span><br/>
            </td>
          </tr>
          <tr>
            <th>下肢水肿</th>
            <td colspan="4">1无 2单侧 3双侧不对称 4双侧对称<span class="checkBox">{{tableData.checkTheBody.edemaOfLowerLimb}}</span></td>
          </tr>
          <tr>
            <th>足背动脉搏动</th>
            <td colspan="4">1未触及 2触及双侧对称 3触及左侧弱或消失 4触及右侧弱或消失<span class="checkBox">{{tableData.checkTheBody.dorsalisPedisArterialPulse}}</span></td>
          </tr>
          <tr>
            <th>肛门指诊*</th>
            <td colspan="4">1未及异常 2触痛 3包块 4前列腺异常 5其他<span class="unline">{{getTheContent(tableData.checkTheBody.analDampness).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.analDampness).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span></td>
          </tr>
          <tr>
            <th>乳腺*</th>
            <td colspan="4">
              1未见异常 2乳房切除 3异常泌乳 4乳腺包块 5其他<span class="unline">{{getTheContent(tableData.checkTheBody.breast).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.breast).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th rowspan="5">妇科*</th>
            <td >外阴</td>
            <td colspan="3">1未见异常 2异常<span class="unline">{{getTheContent(tableData.checkTheBody.vulva).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.vulva).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td >阴道</td>
            <td colspan="3">1未见异常 2异常<span class="unline">{{getTheContent(tableData.checkTheBody.vagina).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.vagina).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>宫颈</td>
            <td colspan="3">1未见异常 2异常<span class="unline">{{getTheContent(tableData.checkTheBody.cervical).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.cervical).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>宫体</td>
            <td colspan="3">1未见异常 2异常<span class="unline">{{getTheContent(tableData.checkTheBody.palace).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.palace).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>附件</td>
            <td colspan="3">1未见异常 2异常<span class="unline">{{getTheContent(tableData.checkTheBody.enclosure).ortherData}}</span>
               <span v-for="(da, index) in getTheContent(tableData.checkTheBody.enclosure).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>其他</th>
            <td colspan="4">{{tableData.checkTheBody.otherGynaecology}}</td>
          </tr>
          <tr>
            <th rowspan="16">辅助检查</th>
            <th>血常规*</th>
            <td colspan="4">
              血红蛋白<span class="unline">{{tableData.auxiliaryCheck.hemoglobin}}</span>g/L
              白细胞<span class="unline">{{tableData.auxiliaryCheck.whiteBloodCell}}</span>*10<sup>9</sup>/L
              血小板<span class="unline">{{tableData.auxiliaryCheck.platelet}}</span>*10<sup>9</sup>/L
              其他<span class="unline">{{tableData.auxiliaryCheck.otherRoutineBloodTest}}</span>
            </td>
          </tr>
          <tr>
            <th>尿常规*</th>
            <td colspan="4">
              尿蛋白<span class="unline">{{tableData.auxiliaryCheck.urineProtein}}</span>
              尿糖<span class="unline">{{tableData.auxiliaryCheck.urineSugar}}</span>
              尿酮体<span class="unline">{{tableData.auxiliaryCheck.urineKetoneBody}}</span>
              尿潜血<span class="unline">{{tableData.auxiliaryCheck.urineOccultBlood}}</span>
              其他<span class="unline">{{tableData.auxiliaryCheck.otherUrineRoutine}}</span>
            </td>
          </tr>
          <tr>
            <th>空腹血糖*</th>
            <td colspan="4">
              <span class="unline">{{tableData.auxiliaryCheck.fastingPlasmaGlucose}}</span>mmol/L或<span class="unline">{{tableData.auxiliaryCheck.otherFastingPlasmaGlucose}}</span>mg/dL
            </td>
          </tr>
          <tr>
            <th>心电图*</th>
            <td colspan="4">1正常 2异常_____<span class="checkBox">{{tableData.auxiliaryCheck.electrocardiogram}}</span></td>
          </tr>
          <tr>
            <th>尿微量白蛋白*</th>
            <td colspan="4"><span class="unline">{{tableData.auxiliaryCheck.urinaryMicroalbumin}}</span>mg/dL</td>
          </tr>
          <tr>
            <th>大便潜血*</th>
            <td colspan="4">1阴性 2阳性<span class="checkBox">{{tableData.auxiliaryCheck.fecalOccultBlood}}</span></td>
          </tr>
          <tr>
            <th>糖化血红蛋白*</th>
            <td colspan="4"><span class="unline">{{tableData.auxiliaryCheck.glycosylatedHemoglobin}}</span>%</td>
          </tr>
          <tr>
            <th>乙型肝炎表面抗原*</th>
            <td colspan="4">1阴性 2阳性<span class="checkBox">{{tableData.auxiliaryCheck.hepatitisBSurfaceAntigen}}</span></td>
          </tr>
          <tr>
            <th>肝功能*</th>
            <td colspan="4">
              血清谷丙转氨酶<span class="unline">{{tableData.auxiliaryCheck.serumGlutamicPyruvicTransaminase}}</span>U/L  &nbsp;&nbsp;
              血清谷草转氨酶<span class="unline">{{tableData.auxiliaryCheck.serumAspartateAminotransferase}}</span>U/L  &nbsp;&nbsp;
              白蛋白<span class="unline">{{tableData.auxiliaryCheck.albumin}}</span>g/L  &nbsp;&nbsp;
              总胆红素<span class="unline">{{tableData.auxiliaryCheck.totalBilirubin}}</span>μmol/L  &nbsp;&nbsp;
              结合胆红素<span class="unline">{{tableData.auxiliaryCheck.conjugatedBilirubin}}</span>μmol/L
            </td>
          </tr>
          <tr>
            <th>肾功能*</th>
            <td colspan="4">
              血清肌酐<span class="unline">{{tableData.auxiliaryCheck.serumCreatinine}}</span>μmol/L  &nbsp;&nbsp;
              血尿素<span class="unline">{{tableData.auxiliaryCheck.learnUrea}}</span>mmol/L  &nbsp;&nbsp;
              血钾浓度<span class="unline">{{tableData.auxiliaryCheck.serumPotassiumConcentration}}</span>mmol/L  &nbsp;&nbsp;
              血钠浓度<span class="unline">{{tableData.auxiliaryCheck.serumSodiumConcentration}}</span>mmol/L  &nbsp;&nbsp;
            </td>
          </tr>
          <tr>
            <th>血脂*</th>
            <td colspan="4">
              总胆固醇<span class="unline">{{tableData.auxiliaryCheck.totalCholesterol}}</span>mmol/L  &nbsp;&nbsp;
              甘油三酯<span class="unline">{{tableData.auxiliaryCheck.glycerinThreeFat}}</span>mmol/L  &nbsp;&nbsp;
              血清低密度脂胆固醇<span class="unline">{{tableData.auxiliaryCheck.serumLowDensityLipoproteinCholesterol}}</span>mmol/L  &nbsp;&nbsp;
              血清低高度脂胆固醇<span class="unline">{{tableData.auxiliaryCheck.serumHighDensityLipoproteinCholesterol}}</span>mmol/L  &nbsp;&nbsp;
            </td>
          </tr>
          <tr>
            <th>胸部X线片*</th>
            <td colspan="4">1正常 2异常_____<span class="checkBox">{{tableData.auxiliaryCheck.chestXRay}}</span></td>
          </tr>
          <tr>
            <th rowspan="2">B超*</th>
            <td colspan="4">腹部B超 1正常 2异常_____<span class="checkBox">{{tableData.auxiliaryCheck.abdominalBSuper}}</span></td>
          </tr>
          <tr>
            <td colspan="4">其他 1正常 2异常_____<span class="checkBox">{{tableData.auxiliaryCheck.otherBSuper}}</span></td>
          </tr>
          <tr>
            <th>宫颈涂片*</th>
            <td colspan="4">1正常 2异常_____<span class="checkBox">{{tableData.auxiliaryCheck.cervicalSmear}}</span></td>
          </tr>
          <tr>
            <th>其他*</th>
            <td colspan="4"><span class="unline">{{tableData.auxiliaryCheck.otherCheck}}</span></td>
          </tr>
          <tr>
            <th rowspan="7">现存在主要健康问题</th>
            <th>脑血管疾病</th>
            <td colspan="4">
              1未发现 2缺血性卒中 3脑出血 4虹网膜下腔出血 5短暂性脑缺血发作 6其他<span class="unline">{{getTheContent(tableData.cerebrovascularDisease).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.cerebrovascularDisease).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>肾脏疾病</th>
            <td colspan="4">
              1未发现 2糖尿病肾病 3肾功能衰竭 4急性肾炎 5慢性肾炎 6其他<span class="unline">{{getTheContent(tableData.kidneyDisease).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.kidneyDisease).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>心脏疾病</th>
            <td colspan="4">
              1未发现 2心肌梗死 3心绞痛 4冠状运动血运重建 5充血性心力衰竭 6心前区疼痛 7其他<span class="unline">{{getTheContent(tableData.heartDisease).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.heartDisease).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>血管疾病</th>
            <td colspan="4">
              1未发现 2夹层动脉瘤 3动脉闭塞性疾病 4其他<span class="unline">{{getTheContent(tableData.vascularDisease).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.vascularDisease).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>眼部疾病</th>
            <td colspan="4">
              1未发现 2视网膜出血或渗出 3视乳头水肿 4白内障 5其他<span class="unline">{{getTheContent(tableData.eyeDisease).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.eyeDisease).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>神经系统疾病</th>
            <td colspan="4">1未发现 2有<span class="unline">{{getTheContent(tableData.nervousDystemDisease).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.nervousDystemDisease).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th>其他系统疾病</th>
            <td colspan="4">1未发现 2有<span class="unline">{{getTheContent(tableData.otherSystemDiseases).ortherData}}</span>
              <span v-for="(da, index) in getTheContent(tableData.otherSystemDiseases).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
          </tr>
          <tr>
            <th v-bind:rowspan='tableData.hospitalization.length+1 + tableData.familySickbed.length+1'>住院治疗情况</th>
            <th v-bind:rowspan='tableData.hospitalization.length+1'>住院史</th>
            <th>入/出院日期</th>
            <th>原因</th>
            <th>医疗机构名称</th>
            <th>病案号</th>
          </tr>
          <tr v-for="(hospitalization, i) in tableData.hospitalization">
            <td>{{hospitalization.checkInTime}} / {{hospitalization.dischargeTime}}</td>
            <td>{{hospitalization.reason}}</td>
            <td>{{hospitalization.nameOfMedicalInstitution}}</td>
            <td>{{hospitalization.diseaseNumber}}</td>
          </tr>
          <tr>
            <th  v-bind:rowspan='tableData.familySickbed.length+1'>家庭病史</th>
            <th>建/撤床日期</th>
            <th>原因</th>
            <th>医疗机构名称</th>
            <th>病案号</th>
          </tr>
          <tr v-for="(familySickbed, i) in tableData.familySickbed">
            <td>{{familySickbed.checkInTime}} / {{familySickbed.dischargeTime}}</td>
            <td>{{familySickbed.reason}}</td>
            <td>{{familySickbed.nameOfMedicalInstitution}}</td>
            <td>{{familySickbed.diseaseNumber}}</td>
          </tr>
          <tr>
            <th v-bind:rowspan='tableData.medicationSituation.length+1'>主要用药情况</th>
            <th>药物名称</th>
            <th>用法</th>
            <th>用量</th>
            <th>用药时间</th>
            <th>
              服药已从性<br/>
              1规律 2间断 3不服药
            </th>
          </tr>
          <tr v-for="(medicationSituation, i) in tableData.medicationSituation">
            <td>{{i+1}}{{medicationSituation.drugName}}</td>
            <td>{{medicationSituation.usage}}</td>
            <td>{{medicationSituation.consumption}}</td>
            <td>{{medicationSituation.medicationTime}}</td>
            <td>{{medicationSituation.drugCompliance}}</td>
          </tr>
          <tr>
            <th v-bind:rowspan="tableData.vaccinationHistory.length+1">非免疫规划预防接种史</th>
            <th>名称</th>
            <th colspan="2">接种日期</th>
            <th colspan="2">接种机构</th>
          </tr>
          <tr v-for="dat in tableData.vaccinationHistory">
            <td>{{dat.name}}</td>
            <td colspan="2">{{dat.vaccinationTime}}</td>
            <td colspan="2">{{dat.vaccinationInstitution}}</td>
          </tr>
          <tr>
            <th>健康评价</th>
            <td colspan="5">
              <span class="checkBox">{{tableData.healthAssessment}}</span>
              1体检无异常<br/>
              2有异常<br/>
              异常1<span class="unline">{{tableData.abnormalOne}}</span><br/>
              异常2<span class="unline">{{tableData.abnormalTwo}}</span><br/>
              异常3<span class="unline">{{tableData.abnormalThree}}</span><br/>
              异常4<span class="unline">{{tableData.abnormalFour}}</span><br/>
            </td>
          </tr>
          <tr>
            <th>健康指导记录</th>
            <td colspan="3">
              1纳入慢病患者健康管理<br/>
              2建议复查<br/>
              3建议转诊<br/>
              <span v-for="(da, index) in getTheContent(tableData.healthGuidance).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
            </td>
            <td colspan="2">
              危险因素控制：
               <span v-for="(da, index) in getTheContent(tableData.riskFactorcontrol).data">
                <span class="pull-right" v-if="index !== 0">&nbsp;/&nbsp;</span>
                <span class="checkBox">{{da}}</span>
              </span>
              <br/>
              1戒烟 2健康饮酒 3饮食 4锻炼 5减体重（目标<span class="unline">{{tableData.weightReduction}}</span>KG）<br/>
              6建议接种疫苗<span class="unline">{{tableData.vaccine}}</span> 7其他<span class="unline">{{tableData.otherControl}}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <br />
      <table class="table table-bordered">
        <caption class="">
          <h3 class="text-center">健康体检表历史记录</h3>
        </caption >
        <thead>
          <tr>
            <th>时间</th>
            <th>医生</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in listData">
            <td>{{data.checkTime.split(' ')[0]}}</td>
            <td>{{data.responsibleDoctor}}</td>
            <td><span>详情</span></td>
          </tr>
        </tbody>
      </table>


  </div>
</template>

<script type="text/ecmascript-6">
  import { getHealthList, getHealthData } from '../../interface/index';

  export default {
    name: 'HealthCheckup',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>健康体检表');
      this.getList();
      this.getData();
    },
    data() {
      return {
        listData: '',
        tableData: '',
        mCol: '',
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      getList() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getHealthList(),
          { params: { id: 1, page: 1, pageSize: 10 }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.listData = res.body.results;
        }).catch((error) => {
          console.log(error);
        });
      },
      getData() {
        const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
        this.$http.get(
          getHealthData(),
          { params: { id: 1 }, headers: { authToken: authTokenes } },
        ).then((res) => {
          this.tableData = res.body;
          this.mCol = this.tableData.medicationSituation.length;
        }).catch((error) => {
          console.log(error);
        });
      },
      getTheContent(data) {
        if (data === '' || data === undefined || data.length <= 0) {
          return '';
        }
        const dataList = data.split(',');
        const LastData = [];
        let orther = '';
        for (let i = 0; i < dataList.length; i += 1) {
          if (dataList[i].indexOf('^') !== -1) {
            orther = dataList[i].split('^')[1];
            LastData.push(dataList[i].split('^')[0]);
          } else {
            LastData.push(dataList[i]);
          }
        }
        return {
          data: LastData,
          ortherData: orther,
        };
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
  .unline{
    border-bottom: 1px solid #000 ;
    color: #cc0000;
    padding: 0 5px;
  }
</style>
