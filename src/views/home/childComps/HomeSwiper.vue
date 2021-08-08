<template>
  <Swiper>
    <SwiperItem v-for="item in HSbanners" >
      <a v-bind:href="item.link">
        <img v-bind:src="item.image" alt="" @load="imageload">
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
          isLoad:false
      }
  },
  methods:{
    imageload(){
      if(!this.isLoad){
        console.log('******');
        this.$emit('imageload')
        this.isLoad=true
      }

    }
  }
}
</script>

<style scoped>

</style>
