<template>
  <div id="app">
    <Item></Item>
    <router-view></router-view>
  </div>
</template>

<script>
import Item from "./components/Item";
export default {
  name:'app',
  components:{
    Item
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
