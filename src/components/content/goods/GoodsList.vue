<template>
<div class="goods">
  <GoodsListItem v-for="item in GLgoods" v-bind:goodsItem="item"></GoodsListItem>
</div>
</template>

<script>

import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components:{
    GoodsListItem,
  },

  props:{
    GLgoods:{
    type:Array,
      default(){
      return []
      }
    }
  },

}
</script>

<style scoped>

.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}

</style>
