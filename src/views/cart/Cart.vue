<template>
<div class="cart">
  <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
<!-- 商品列表-->
  <cart-list></cart-list>
<!-- 底部的汇总-->
  <cart-bottom-bar></cart-bottom-bar>
</div>
</template>

<script>
import NavBar from "../../components/common/navigationbar/NavBar";
import CartList from "./cartchild/CartList";
import CartBottomBar from "./cartchild/CartBottomBar";
import {mapGetters} from "vuex"

export default {
  name: "Cart",
  components: {
    CartList,
    NavBar,
    CartBottomBar

  },
  computed:{
    // getLength() {
    //  return  this.$store.state.cartList.length
    // }
    ...mapGetters([
     'cartLength'
    ])
  }
}
</script>

<style scoped>
.cart{
  /*防止图片制定*/
  padding-top: 135px;
  /*height: 100vh;*/
}
.nav-bar{
  background-color: #ff8198;
  color: #ffffff;

}
</style>
