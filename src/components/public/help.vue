<template>
  <div class="help">
    <span class="back" @click="back">返回上一级</span>
    <br/>
    <br/>
    <h4>请求内容</h4>
    <div class="col-sm-4 col-xs-12">需求类型：药品</div>
    <div class="col-sm-4 col-xs-12">发起时间：2012-12-21</div>
    <div class="col-sm-4 col-xs-12">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：<span class="status">正在处理</span></div>
    <div class="col-sm-4 col-xs-12">请求人&nbsp;&nbsp;&nbsp;：华阳镇卫生中心</div>
    <br/>
    <br/>
    <div class="col-xs-12 zhichi">
      <span>支持描述:</span>
      <p>我院急需阿莫西林等消炎药</p>
    </div>
    <br/>
    <div>
      <h4>上级回复</h4>
      <div class="col-xs-12">上级单位：新丰县医院</div>
      <br/>
      <br/>
      <div class="take col-xs-12">
        <div class="tokeBox_user">
          <div class="head">
            <img src="http://iph.href.lu/60x60?text=Head"/>
            <div class="text-center">新丰县医院</div>
          </div>
          <div class="words col-xs-8">已通过系调配，先药品已经发出，请等待接收</div>
        </div>
        <div class="tokeBox_doc col-xs-12">
          <div class="head">
            <img src="http://iph.href.lu/60x60?text=Head"/>
            <div class="text-center">华阳镇卫生中心</div>
          </div>
          <div class="words  col-xs-8">收到，请尽快送达</div>
        </div>
      </div>
      <div class="inputBox col-xs-12">
        <textarea class="col-xs-12"></textarea>
        <button type="button" class="btn btn-success pull-right">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Help',
    created() {
      this.$emit('datiChange', '支持列表>支持详情');
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };
</script>

<style scoped>
  .check>span {
    color: #000066;
    cursor: pointer;
  }
  .check>span:hover {
    color: #cc0000;
  }
  .help{
    padding-bottom: 40px;
    overflow: auto;
  }
  .status{
    color: #cc0000;
  }
  .zhichi{
    background-color: #eee;
    padding: 10px;
    margin: 12px 0;
    border-radius: 6px;
  }
  .zhichi>span{
    color: #cc0000;
  }
  .userFor>p{
    margin: 0;
  }
  .userFor>small{
    color: #999;
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
  .take{
    border: 1px solid #aaa;
    padding: 10px;
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
    height: 100px;
    margin-bottom: 10px;
  }
  .btn-group{
    margin: 6px;
  }
</style>
