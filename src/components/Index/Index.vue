<template>
  <div class="index">
    <m-header></m-header>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
import MHeader from '../MHeader/MHeader'
export default {
  name: 'index',
  data() {
    return {
      title: '主页'
    }
  },
  // 组件
  components: {
    MHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
