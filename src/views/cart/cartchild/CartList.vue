<template>
<div class="cart-list">
  <scroll class="content" ref="scroll">
    <cart-list-item v-for="(item,index) of cartList"
                    :products="item" :key="index"
    ></cart-list-item>
  </scroll>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from "../../../components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  },
 activated(){
    //要刷新的，在页面活跃的时候就要刷新一次，不然你添加了组件，有了高度，scroll不知道，就滑动不了
    this.$refs.scroll.refresh()
  }
}

</script>

<style scoped>
.cart-list{

}
.content{
  height: 1500px;
}
</style>
