<template>
  <div>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">寻求支持</h4>
          </div>
          <div class="modal-body">
            <div>时间：2012-12-12</div>
            <div>请求人（单位）：XXX</div>
            <div>内容：XXX</div>
            <div>
              <span>支持单位：</span>
              <select>
                <option>中心卫生站</option>
                <option>中心卫生站</option>
                <option>中心卫生站</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">确认</button>
          </div>
        </div>
      </div>
    </div>

    <h4>支持管理</h4>
    <table class="table">
      <thead>
        <tr>
          <th>时间</th>
          <th>发起人（单位）</th>
          <th>状态</th>
          <th>支持单位</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XXX</td>
          <td>XXX</td>
          <td>XXX</td>
          <td>XXX</td>
          <td class="check"><span @click="chooes" data-toggle="modal" data-target="#myModal">指定机构</span></td>
        </tr>
      </tbody>
    </table>
    <Page/>
  </div>
</template>

<script>
  import Page from '../public/page';

  export default {
    name: 'help',
    components: { Page },
    methods: {
      chooes() {
      },
    },
  };
</script>

<style scoped>
  .check>span:hover{
    cursor: pointer;
    color: #cc0000;
  }
</style>
