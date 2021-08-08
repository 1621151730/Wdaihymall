<template>
  <div id="app">
    <keep-alive exclude="Datail">
      <router-view/>  <!--这是路由的显示，与跳转-->

    </keep-alive>

    <item></item> <!--里面全是bar等插槽-->

  </div>

</template>

<script>
import Item from "./components/Item";
import TabBarItem from "./components/common/tarbar/TabBarItem";
export default {
  name:'app',
  components:{
    Item,
    TabBarItem
  }
}
</script>

<style>
@import "assets/css/base.css";
#app{
  font-size: 50px;
}
</style>
