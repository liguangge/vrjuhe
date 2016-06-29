<template>
  <div class="page page-current">
      <bar v-if="isIndex">
        <bar-item path="/home" label="首页" icon="home"></bar-item>
        <bar-item path="/home" label="任务" icon="tasks"></bar-item>
        <bar-item path="/list" label="列表" icon="mytask"></bar-item>
        <bar-item path="/list" label="我自己" icon="me"></bar-item>
        <bar-item path="/list" label="更多" icon="more"></bar-item>
      </bar>
      <router-view></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar'
import BarItem from './components/BarItem'

export default {
   data () {
    return {
      isIndex: true
    }
  },
  components: {
    Bar,
    BarItem
  }
}
</script>

<style>
@import './assets/css/sm.css'

</style>
