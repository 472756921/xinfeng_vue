<template>
  <div class="table-responsive col-xs-12 userInfo">
    <table class="table">
      <caption class=""><h4>个人信息</h4></caption >
      <tbody>
        <tr class="active">
          <th>姓名</th>
          <th>性别</th>
          <th>出生日期</th>
          <th>常驻类型</th>
          <th>民族</th>
        </tr>
        <tr>
          <td>刘德华</td>
          <td>男</td>
          <td>1994-12-21</td>
          <td>户籍</td>
          <td>汉</td>
        </tr>
        <tr class="active">
          <th>血型</th>
          <th>文化程度</th>
          <th>身份证号码</th>
          <th>本人电话</th>
          <th>工作单位</th>
        </tr>
        <tr>
          <td>AB</td>
          <td>小学</td>
          <td>392040399201928399</td>
          <td>13928837465</td>
          <td>天赋兴趣浮沉国际49楼4990号</td>
        </tr>
        <tr class="active">
          <th>职业</th>
          <th>婚姻状况</th>
          <th>医疗费用支付方式</th>
          <th>联系人</th>
          <th>联系人电话</th>
        </tr>
        <tr>
          <td>物业</td>
          <td>结婚</td>
          <td>支付宝</td>
          <td>小刘德华</td>
          <td>13928837465</td>
        </tr>
      </tbody>
    </table>
    <table class="table">
      <caption class=""><h4>疾病信息</h4></caption >
      <tbody>
      <tr class="active">
        <th>药物过敏史</th>
        <th>暴露史</th>
        <th>遗传病史</th>
        <th>残疾情况</th>
      </tr>
      <tr>
        <td>刘德华</td>
        <td>男</td>
        <td>1994-12-21</td>
        <td>户籍</td>
      </tr>
      <tr class="active">
        <th>既往史-疾病</th>
        <th>既往史-手术</th>
        <th>既往史-外伤</th>
        <th>既往史-输血</th>
      </tr>
      <tr>
        <td>AB</td>
        <td>392040399201928399</td>
        <td>13928837465</td>
        <td>天赋兴趣浮沉国际49楼4990号</td>
      </tr>
      <tr class="active">
        <th>家族史-父亲</th>
        <th>家族史-母亲</th>
        <th>家族史-兄弟姐妹</th>
        <th>家族史-子女</th>
      </tr>
      <tr>
        <td>物业</td>
        <td>结婚</td>
        <td>支付宝</td>
        <td>小刘德华</td>
      </tr>
      </tbody>
    </table>
    <table class="table">
      <caption class=""><h4>生活环境</h4></caption >
      <tbody>
      <tr class="active">
        <th>厨房排风设施</th>
        <th>燃料类型</th>
        <th>饮水</th>
        <th>厕所</th>
        <th>畜禽栏</th>
      </tr>
      <tr>
        <td>刘德华</td>
        <td>男</td>
        <td>1994-12-21</td>
        <td>户籍</td>
        <td>户籍</td>
      </tr>
      </tbody>
    </table>
    <h4>
      <span>资料</span>
    </h4>
    <br/>
    <div class="tableList">
      <button class="btn btn-success">健康体检表</button>
      <button class="btn btn-success">接诊记录表</button>
      <button class="btn btn-success">会诊记录表</button>
      <button class="btn btn-default">双向转诊表</button>
      <button class="btn btn-default">居民健康档案</button>
      <button class="btn btn-default">健康教育活动表</button>
      <button class="btn btn-default">儿童免疫程序表</button>
      <button class="btn btn-default">新生儿家庭访视记录表</button>
      <button class="btn btn-default">3~6岁儿童健康检查记录表</button>
      <button class="btn btn-default">第一次产前检查服务记录表</button>
      <button class="btn btn-default">第2~5次产前随访服务记录表</button>
      <button class="btn btn-default">产后访视记录表</button>
      <button class="btn btn-default">产后42天健康检查记录表</button>
      <button class="btn btn-default">老年人生活自理能力评估表</button>
      <button class="btn btn-default">高血压患者随访服务记录表</button>
      <button class="btn btn-default">糖尿病患者随访服务记录表</button>
      <button class="btn btn-default">严重精神障碍患者随访服务记录表</button>
      <button class="btn btn-default">严重精神障碍患者个人信息补充表</button>
      <button class="btn btn-default">肺结核患者第一次入户随访记录表</button>
      <button class="btn btn-default">肺结核患者随访服务记录表</button>
      <button class="btn btn-default">老年人中医药健康管理服务记录表</button>
      <button class="btn btn-default">体质判定标准表</button>
      <button class="btn btn-default">卫生计生监督协管信息报告登记表</button>
      <button class="btn btn-default">月龄儿童健康检查记录表</button>
    </div>
    <button class="backBtn center-block btn btn-lg btn-info">返回</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
  };
</script>

<style scoped>
  .userInfo{
    overflow: auto;
  }
  .backBtn{
    margin: 20px auto;
  }
  .tableList>button{
    margin-bottom: 6px;
  }
</style>
