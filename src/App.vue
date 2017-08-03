<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
@import './common/color.scss';

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  background: $grey50;
}
</style>
