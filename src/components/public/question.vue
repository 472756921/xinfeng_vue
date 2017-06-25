<template>
  <div class="question">
    <span class="back" @click="back">返回上一级</span>
    <div class="top table-responsive">
      <h4 class="title">病人基本资料：<small>(点击用户姓名可查看详细资料)</small></h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>姓名</th>
              <th>年龄</th>
              <th>体重</th>
              <th>性别</th>
              <th>慢性病</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="checkInfo" @click="checkInfo">张三丰</span></td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      <h4 class="title">病情描述：</h4>
      <div class="des ">
       这个用户长期存在白内障的问题，如何有效地治疗该疾病。
      </div>
    </div>
    <div class="bottom">
      <div class="tokeBox_user col-xs-12">
        <div class="head">
          <img src="http://iph.href.lu/60x60?text=Head"/>
          <div class="text-center">刘医生</div>
        </div>
        <div class="words col-xs-8">这个白内障是最常见的致盲眼病，白内障主要是晶体混浊，导致光线不能达到视网膜，主要和代谢，年龄，外伤以及过度用眼有关。这个成熟期可以手术更好晶状体的。可用一些药物延缓病情发展，如：可视明，卡他林，莎普爱思等滴眼液滴眼。.饮食宜含丰富的蛋白质，钙，微量元素，多食含维生素A，B，C，D的食物。
        </div>
      </div>
      <div class="tokeBox_doc col-xs-12">
        <div class="head">
          <img src="http://iph.href.lu/60x60?text=Head"/>
          <div class="text-center">华阳镇卫生中心</div>
        </div>
        <div class="words  col-xs-8">药物治疗白内障处于研究探索阶段，迄今为止世界上还没有任何一种能治疗白内障的药物。有的药物可能只起到减缓白内障发展的作用，但不能从根本上彻底治愈。目前，手术时治疗白内障唯一有效的方法，现在有很多广告宣称吃药能治好白内障，这是极其不负责任的，是对患者的误导。</div>
      </div>
    </div>
    <div class="inputBox">
      <div class="col-xs-12">
        <textarea class="col-xs-12"></textarea>
      </div>
      <div class="btn-group col-xs-3 pull-right">
        <button v-if="countyAdmin !== 'countyAdmin'" type="button" class="btn btn-warning col-xs-6" >转交</button>
        <button type="button" class="btn btn-success col-xs-6 pull-right">回复</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'question',
    created() {
      this.$emit('datiChange', '问题列表>问题详情');
      const Character = this.$route.path.split('/')[1];
      if (Character === 'countyAdmin') {
        this.countyAdmin = 'countyAdmin';
      }
      if (Character === 'county') {
        this.countyAdmin = 'countyAdmin';
      }
    },
    data() {
      return {
        character: '',
        countyAdmin: '',
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      checkInfo() {
        this.$router.push('/countyAdmin/file/town/userList/user/1');
      },
    },
  };
</script>

<style scoped>
  .title{
    color: #cc0000;
  }
  .back{
    cursor: pointer;
  }
  .back:hover{
    color: #cc0000;
  }
  .question{
    overflow: auto;
    margin-bottom: 30px;
  }
  .des{
    text-indent: 28px;
  }
  .bottom{
    margin-top: 16px;
    border: 1px solid #eee;
    padding: 20px 0;
    overflow: auto;
  }
  .tokeBox_user{
    width: 100%;
    overflow: auto;
    margin: 5px 0;
  }
  .tokeBox_user>.head{
    width: 60px;
    float: left;
  }
  .tokeBox_user > .words{
    color: #333;
    margin-left: 12px;
    max-width: 1000px;
    float: left;
    padding: 10px;
    background-color: #cdd7e1;
  }
  .tokeBox_user >.words:before{
    content: ' ';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #cdd7e1;
    margin-left: -16px;
    transform:rotate(7deg);
    -ms-transform:rotate(45deg); 	/* IE 9 */
    -moz-transform:rotate(45deg); 	/* Firefox */
    -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
    -o-transform:rotate(45deg);
  }

  .tokeBox_doc{
    width: 100%;
    overflow: auto;
    margin: 5px 0;
  }
  .tokeBox_doc>.head{
    width: 60px;
    float: right;
  }
  .tokeBox_doc > .words{
    margin-right: 12px;
    max-width: 1000px;
    float: right;
    padding: 10px;
    background-color: #6699cc;
    color: #fff;
    position: relative;
  }
  .tokeBox_doc >.words:after{
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #6699cc;
    right: -21px;
    top:10px;
    margin-right: 16px;
    transform:rotate(7deg);
    -ms-transform:rotate(45deg); 	/* IE 9 */
    -moz-transform:rotate(45deg); 	/* Firefox */
    -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
    -o-transform:rotate(45deg);
  }
  .inputBox{
    padding: 0;
    margin-top: 20px;
  }
  .inputBox>div{
    padding: 0;
  }
  textarea{
    resize: none;
    height: 140px;
  }
  .btn-group{
    margin: 6px;
  }
  .checkInfo{
    cursor: pointer;
  }
  .checkInfo:hover{
    color: #cc0000;
  }
</style>
