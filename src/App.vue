<template>
  <div class="page page-current">
      <bar v-if="isIndex">
        <bar-item path="/home" label="首页" icon="home"></bar-item>
        <bar-item path="/video" label="视频" icon="tasks"></bar-item>
        <bar-item path="/game" label="游戏" icon="mytask"></bar-item>
        <bar-item path="/mine" label="自己" icon="me"></bar-item>
        <bar-item path="/more" label="更多" icon="more"></bar-item>
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
