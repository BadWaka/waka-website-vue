<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang='scss'>
@import './common/color.scss';

html,
body {
  height: 100%;
  background: #F7F7F7;
}

#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  height: 100%;
  box-sizing: border-box;
}
</style>
