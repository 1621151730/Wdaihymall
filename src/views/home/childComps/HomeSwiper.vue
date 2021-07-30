<template>
  <Swiper>
    <SwiperItem v-for="item in HSbanners">
      <a v-bind:href="item.link">
        <img v-bind:src="item.image" alt="">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "../../../components/common/swiper"
export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
    HSbanners:{
     type:Array,
      default(){
       return []
      }
   },
  },
    data(){
      return{

      }
  },




}
</script>

<style scoped>

</style>
