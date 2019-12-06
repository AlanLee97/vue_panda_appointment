<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" >
      <el-tab-pane label="通知" name="first">你还没有收到任何消息</el-tab-pane>
      <el-tab-pane label="私聊" name="second">私聊</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>

</style>