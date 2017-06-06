<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="content">
    <button class="btn btn-default" v-bind:class="{ 'btn-info' : show === 'docs'}" @click="change('docs')">村医统计表</button>
    <button class="btn btn-default" v-bind:class="{ 'btn-info' : show === 'base'}" @click="change('base')">基本公共卫生服务项目基础信息表</button>
    <button class="btn btn-default" v-bind:class="{ 'btn-info' : show === 'create'}" @click="change('create')">人口数及建档统计表</button>
    <button class="btn btn-default" v-bind:class="{ 'btn-info' : show === 'family'}" @click="change('family')">家庭医生式签约服务情况统计表</button>
    <button class="btn btn-default" v-bind:class="{ 'btn-info' : show === 'rember'}" @click="change('rember')">乡村会议记录表</button>
    <button class="btn btn-default" v-bind:class="{ 'btn-info' : show === 'jiangzuo'}" @click="change('jiangzuo')">健康讲座活动记录表</button>
    <br/>
    <br/>
    <Docs v-if="show === 'docs'"/>
    <BaseT v-if="show === 'base'"/>
    <Pec v-if="show === 'create'"/>
    <Meeting v-if="show === 'rember'"/>
    <Famy v-if="show === 'family'"/>
    <Jiangzuo v-if="show === 'jiangzuo'"/>
  </div>
</template>

<script>
  import Docs from './datas_docs';
  import BaseT from './datas_base';
  import Pec from './datas_pec';
  import Meeting from './datas_meeting';
  import Famy from './datas_famy';
  import Jiangzuo from './datas_jiangzuo';

  export default {
    name: 'DatasTown',
    created() {
      this.$emit('datiChange', '数据监控');
    },
    data() {
      return {
        show: 'docs',
      };
    },
    components: {
      Docs,
      BaseT,
      Pec,
      Meeting,
      Famy,
      Jiangzuo,
    },
    methods: {
      change(type) {
        this.show = type;
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
    padding-bottom: 40px;
  }
  button{
    margin: 4px 2px;
  }
</style>
