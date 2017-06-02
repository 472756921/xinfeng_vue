<template>
  <div class="content">
    <div class="doc_info">
      <img src="http://iph.href.lu/80x80"/>
      <div class="col-xs-8 col-sm-10" style="padding:0">
        <h4 class="col-sm-12"><span class="col-xs-12">刘德华</span></h4>
        <div class="col-xs-12">
          <span class="col-xs-12 col-md-2">性别：女</span>
          <span class="col-xs-12 col-md-2">出生：2012-12-12</span>
          <span class="col-xs-12 col-md-2">毕业院校：清华大学</span>
          <span class="col-xs-12 col-md-2">学历：研究生</span>
          <span class="col-xs-12 col-md-2">从医：3年</span>
          <span class="col-xs-12 col-md-2">管辖区域：德阳</span>
        </div>
      </div>
    </div>
    <br/>
    <div>
      <div>
        时间选择：
        <select>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
        </select>
      </div>
      <br/>

      <div class="work_info">
        <div class="col-xs-2" @click="change(0)"><span>建档：320人</span></div>
        <div class="col-xs-2" @click="change(1)"><span>随访：320次</span></div>
        <div class="col-xs-2" @click="change(2)"><span>健康问题：320个</span></div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table">
        <caption><h4>{{ title }}</h4></caption>
        <thead>
        <tr>
          <th width="200">类型/月份</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>11</th>
          <th>12</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="type in ctype">
            <td>{{ type }}</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
    <span class="pull-right">单位：人</span>
  </div>
</template>

<script>
  const typeCreate = ['总人数', '高血压', '糖尿病', '冠心病', '慢性阻塞性肺疾病', '恶性肿瘤', '脑卒中', '严重精神障碍', '结核病', '肝炎', '其他法定传染病', '职业病', '其他'];
  const typeFlow = ['总表数', '健康体检表', '接诊记录表', '会诊记录表', '双向转诊单', '居民健康档案', '健康教育活动表', '儿童免疫程序表', '新生儿家庭访视记录表', '儿童健康检查记录表', '产后访视记录表', '产后42天健康检查记录表', '老年人生活自理能力评估表'];
  const typeHq = ['发起', '关闭', '处理中', '未回复'];

  export default {
    name: 'Datas_doc',
    created() {
      this.$emit('position', 'datas');
    },
    data() {
      return {
        ctype: typeCreate,
        title: '建档统计表',
      };
    },
    methods: {
      check() {
        this.$router.push('/town/data/12');
      },
      change(type) {
        if (type === 0) {
          this.ctype = typeCreate;
          this.title = '建档统计表';
        } else if (type === 1) {
          this.ctype = typeFlow;
          this.title = '随访统计表';
        } else if (type === 2) {
          this.ctype = typeHq;
          this.title = '健康问题统计表';
        }
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
  textarea{
    width: 100%;
    border: 1px solid #ccc;
  }
  .content{
    overflow: auto;
    padding-bottom: 40px;
  }
  .doc_info{
    background-color: #efefef;
    padding: 20px;
    overflow: auto;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .doc_info > img {
    float: left;
    margin: 4px;
  }
  .work_info{
    padding: 20px;
    background: #eee;
    border-radius: 5px;
    border: 1px solid #ccc;
    overflow: auto;
  }
  .work_info>div>span{
    cursor: pointer;
  }
  .work_info>div>span:hover{
    color: #cc0000;
  }
</style>
