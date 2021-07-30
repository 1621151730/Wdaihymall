<template>
<!-- TabBar就一个插槽-->
  <TabBar>
    <TabBarItem path="/home">
      <router-link to="/home"></router-link>
      <!--TabBarItem中有三个插槽-->
      <img slot="bar-icon" src="../assets/img/tarbar/home.svg" alt=""/>
      <img slot="bar-icon-active" src="../assets/img/tarbar/home_active.svg" alt=""/>
      <div slot="bar-text">首页</div>
    </TabBarItem>

    <TabBarItem path="/category">
      <router-link to="/category"></router-link>
      <img slot="bar-icon" src="../assets/img/tarbar/category.svg" alt=""/>
      <img slot="bar-icon-active" src="../assets/img/tarbar/category_active.svg" alt=""/>
      <div slot="bar-text">类别</div>

    </TabBarItem>

    <TabBarItem path="/cart">
      <img slot="bar-icon" src="../assets/img/tarbar/cart.svg" alt=""/>
      <img  slot="bar-icon-active" src="../assets/img/tarbar/cart_active.svg" alt=""/>
      <div  slot="bar-text">购物车</div>
      <router-link to="/cart"></router-link>
    </TabBarItem>

    <TabBarItem path="/profile">
      <img slot="bar-icon" src="../assets/img/tarbar/profile.svg" alt=""/>
      <img  slot="bar-icon-active" src="../assets/img/tarbar/profile_active.svg" alt=""/>
      <div  slot="bar-text">我的</div>
      <router-link to="/profile"></router-link>
    </TabBarItem>
  </TabBar>

</template>

<script>

import TabBar from "./common/tarbar/TabBar";
import TabBarItem from "./common/tarbar/TabBarItem";

export default {
  name: "Item",
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style scoped>

</style>
