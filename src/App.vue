<template>
  <div id="app">
     <!-- 头部 -->
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/MHeader/MHeader';  // 头部
export default {
  name: 'app',
  components: {
    MHeader
  }
}
</script>

<style lang='scss'>
@import './common/color.scss';

html,
body {
  height: 100%;
}

#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  padding-top: 56px;
  height: 100%;
  background: $grey50;
}
</style>
