<template>
  <div class="content table-responsive">
    <h5 class="check"><span @click="back">返回上一级</span></h5>
    <table class="table table-bordered">
      <caption class="">
        <h3 class="text-center">1～8月龄儿童健康检查记录表</h3>
        <span>姓名：</span>
        <span class="pull-right">编号：123-122332</span>
      </caption >
      <tbody>
        <tr>
          <th colspan="2">月 龄</th>
          <th>满 月</th>
          <th>3 月龄</th>
          <th>6 月龄</th>
          <th>8 月龄</th>
        </tr>
        <tr>
          <th colspan="2">随访日期</th>
          <td v-for="data in tableData">{{data.birthday}}</td>
          <td v-for="n in 4-tableData.length"></td>
        </tr>
        <tr>
          <th colspan="2">体 重/kg</th>
          <td v-for="data in tableData"><span class="unline">{{data.weight.split(',')[0]}}</span>
            上<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('上') != -1"></span>
            中<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('中') != -1"></span>
            下<span class="icon iconfont icon-gou gou" v-if="data.weight.split(',')[1].indexOf('下') != -1"></span>
          </td>
        </tr>
        <tr>
          <th colspan="2">身 长/cm</th>
          <td>上 中 下</td>
          <td>上 中 下</td>
          <td>上 中 下</td>
          <td>上 中 下</td>
        </tr>
        <tr>
          <th colspan="2">头 围/cm</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th rowspan="16" style="line-height: 700px">体格检查</th>
          <th>面 色</th>
          <td>1红润 2黄染 3其他</td>
          <td>1红润 2黄染 3其他</td>
          <td>1红润 2黄染 3其他</td>
          <td>1红润 2黄染 3其他</td>
        </tr>
        <tr>
          <th>皮 肤</th>
          <td>1 未见异常 2异常</td>
          <td>1 未见异常 2异常</td>
          <td>1 未见异常 2异常</td>
          <td>1 未见异常 2异常</td>
        </tr>
        <tr>
          <th>前 囟</th>
          <td>1 闭合 ２未闭,cm× cm</td>
          <td>1 闭合 ２未闭,cm× cm</td>
          <td>1 闭合 ２未闭,cm× cm</td>
          <td>1 闭合 ２未闭,cm× cm</td>
        </tr>
        <tr>
          <th>颈部包块</th>
          <td>1 有 2 无</td>
          <td>1 有 2 无</td>
          <td>1 有 2 无</td>
          <td>1 有 2 无</td>
        </tr>
        <tr>
          <th>眼 睛</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>耳</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>听 力</th>
          <td class="text-center">--</td>
          <td class="text-center">--</td>
          <td>1 通过 2 未通过</td>
          <td class="text-center">--</td>
        </tr>
        <tr>
          <th>口 腔</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>胸 部</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>腹 部</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>脐 部</th>
          <td>1 未脱 2 脱落 3 脐<br>部有渗出 4 其他</td>
          <td>1 未见异常 2 异常</td>
          <td class="text-center">--</td>
          <td class="text-center">--</td>
        </tr>
        <tr>
          <th>四 肢</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>可疑佝偻病症状</th>
          <td class="text-center">--</td>
          <td>1 无 2 夜惊<br>3 多汗 4 烦躁</td>
          <td>1 无 2 夜惊<br>3 多汗 4 烦躁</td>
          <td>1 无 2 夜惊<br>3 多汗 4 烦躁</td>
        </tr>
        <tr>
          <th>可疑佝偻病体征</th>
          <td class="text-center">--</td>
          <td>1 无 2 颅骨软化</td>
          <td>1 无 2 肋串珠<br>3 肋软骨沟<br>4 鸡胸 5 手足镯<br>6 颅骨软化 7 方颅</td>
          <td>1 无 2 肋串珠<br>3 肋软骨沟<br>4 鸡胸 5 手足镯<br>6 颅骨软化 7 方颅</td>
        </tr>
        <tr>
          <th>肛门/外生殖器</th>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
          <td>1 未见异常 2 异常</td>
        </tr>
        <tr>
          <th>血红蛋白值</th>
          <td class="text-center">--</td>
          <td class="text-center">--</td>
          <td class="text-center">g/L</td>
          <td class="text-center">g/L</td>
        </tr>
        <tr>
          <th colspan="2">户外活动</th>
          <td>小时/日</td>
          <td>小时/日</td>
          <td>小时/日</td>
          <td>小时/日</td>
        </tr>
        <tr>
          <th colspan="2">服用维生素 D</th>
          <td>IU/日</td>
          <td>IU/日</td>
          <td>IU/日</td>
          <td>IU/日</td>
        </tr>
        <tr>
          <th colspan="2">发育评估</th>
          <td class="text-center">---------</td>
          <td>1.对很大声音没有反应<br>2.逗引时不发音或不会<br>微笑<br>3.不注视人脸，不追视<br>移动人或物品<br>4.俯卧时不会抬头</td>
          <td>1.发音少，不会笑出<br>声<br>2.不会伸手抓物<br>3.紧握拳松不开<br>4.不能扶坐</td>
          <td>1.听到声音无应答<br>2.不会区分生人和熟<br>人<br>3.双手间不会传递玩<br>具<br>4.不会独坐</td>
        </tr>
        <tr>
          <th colspan="2">两次随访间患病情况</th>
          <td>1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
          <td>1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
          <td>1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
          <td>1 无<br>2 肺炎 次<br>3 腹泻 次<br>4 外伤 次<br>5 其他</td>
        </tr>
        <tr>
          <th colspan="2">转诊建议</th>
          <td>1 无 2 有<br>原因：<br>机构及科室：</td>
          <td>1 无 2 有<br>原因：<br>机构及科室：</td>
          <td>1 无 2 有<br>原因：<br>机构及科室：</td>
          <td>1 无 2 有<br>原因：<br>机构及科室：</td>
        </tr>
        <tr>
          <th colspan="2">指 导</th>
          <td>1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
          <td>1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
          <td>1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
          <td>1 科学喂养<br>2 生长发育<br>3 疾病预防<br>4 预防伤害<br>5 口腔保健<br>6 其他</td>
        </tr>
        <tr>
          <th colspan="2">下次随访日期</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th colspan="2">随访医生签名</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getUserBabyOE } from '../../interface/index';

  export default {
    name: 'monthsOldChildrenHealthCheckRecordsOE',
    created() {
      this.$emit('datiChange', '村级列表>用户列表>用户详情>1～8月龄儿童健康检查记录表');
      const authTokenes = JSON.parse(sessionStorage.getItem('user')).authToken;
      this.$http.get(
        getUserBabyOE(),
        { params: { id: 1 }, headers: { authToken: authTokenes } },
      ).then((res) => {
        this.tableData = res.body;
      }).catch((error) => {
        console.log(error);
      });
    },
    data() {
      return {
        tableData: '',
      };
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
  .content{
    overflow: auto;
    padding-bottom: 30px;
  }
  .unline{
    border-bottom: 1px solid #000 ;
    color: #cc0000;
    padding: 0 5px;
  }
  .gou{
    color: green;
  }
</style>
