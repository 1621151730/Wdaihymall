<template>
<div>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/'

export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
 created() {
  console.log(this.topImages)
  }
}
</script>

<style scoped>

.detail-swiper{
  height: 1000px;
  /*!* 指示器也会被隐藏*!*/
  /*overflow: hidden;*/
}
</style>
