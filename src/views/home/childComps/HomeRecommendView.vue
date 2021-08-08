<template>
<div class="recommend">
  <div v-for="item in HRVrecommends" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>

</template>

<script>

export default {
  name: "HomeRecommendView",
  props:{
    HRVrecommends: {
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex; /*变成了一行*/
    width: 100%;
     text-align: center;
     /*font-size: 14px;*/
    padding: 15px 0 20px;/* 上 左右 下 */
    /* 画杠杠*/
    border-bottom: 10px solid #dcdada;
    background: white;
  }
  .recommend-item{
    flex: 1;

  }
  .recommend img{ /* 设置recommend下面的img*/
    width: 200px;
    height: 200px;
   /*把图片下面留点距离*/
    margin-bottom: 6px;
  }
</style>
