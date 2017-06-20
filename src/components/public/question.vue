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
        人活着一辈子，身体难免会有点小病痛，最常见的就是头疼，肚子疼的。如果肚子疼了，有的人想想工作太忙了，或者懒得去医院，忍一忍就过去了；还有的认为肯定是着凉了，赶紧用个热水袋敷一敷，再喝点热水热汤。肚子疼会有很多原因，当然有些肚子疼就是着凉或者岔气了，一会儿也就自己好了，可是也有因为太过忽视，肚子疼不但没有减轻，反而延误了病情，后果很严重。
      </div>
    </div>
    <div class="bottom">
      <div class="tokeBox_user col-xs-12">
        <div class="head">
          <img src="http://iph.href.lu/60x60?text=Head"/>
          <div class="text-center">刘德华</div>
        </div>
        <div class="words col-xs-8"> 人活着一辈子，身体难免会有点小病痛，最常见的就是头疼，肚子疼的。如果肚子疼了，有的人想想工作太忙了，或者懒得去医院，忍一忍就过去了；还有的认为肯定是着凉了，赶紧用个热水袋敷一敷，再喝点热水热汤。肚子疼会有很多原因，当然有些肚子疼就是着凉或者岔气了，一会儿也就自己好了，可是也有因为太过忽视，肚子疼不但没有减轻，反而延误了病情，后果很严重。 </div>
      </div>
      <div class="tokeBox_doc col-xs-12">
        <div class="head">
          <img src="http://iph.href.lu/60x60?text=Head"/>
          <div class="text-center">刘德华</div>
        </div>
        <div class="words  col-xs-8"> 人活着一辈子，身体难免会有点小病痛，最常见的就是头疼，肚子疼的。如果肚子疼了，有的人想想工作太忙了，或者懒得去医院，忍一忍就过去了；还有的认为肯定是着凉了，赶紧用个热水袋敷一敷，再喝点热水热汤。肚子疼会有很多原因，当然有些肚子疼就是着凉或者岔气了，一会儿也就自己好了，可是也有因为太过忽视，肚子疼不但没有减轻，反而延误了病情，后果很严重。</div>
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
