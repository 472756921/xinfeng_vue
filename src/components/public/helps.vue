<template>
  <div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">新建支持</h4>
          </div>
          <div class="modal-body">
            <div>
              <span>需求类型：</span>
              <select>
                <option>药品</option>
                <option>诊疗</option>
              </select>
            </div>
            <div>
              <span>描述：</span>
              <textarea></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">发出</button>
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-primary btn-sm"  data-toggle="modal" data-target="#myModal" v-if="character === 'town'">新建支持</button>
    <br/>
    <br/>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>类型</th>
        <th>描述</th>
        <th>时间</th>
        <th>回复时间</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>药品</td>
          <td>没有阿莫西林了</td>
          <td>2012-12-21</td>
          <td>2012-12-21</td>
          <td>已提交</td>
          <td class="check"><span @click="check">详情</span></td>
        </tr>
      </tbody>
    </table>
    <Page />
  </div>
</template>

<script>
  import Page from './page';

  export default {
    name: 'Helps',
    components: { Page },
    created() {
      this.$emit('datiChange', '支持列表');
      const Character = this.$route.path.split('/')[1];
      this.character = Character;
    },
    data() {
      return {
        character: '',
      };
    },
    methods: {
      check() {
        this.$router.push('help/12');
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
    resize: none;
    height: 200px;
    border: 1px solid #ccc;
  }
</style>
