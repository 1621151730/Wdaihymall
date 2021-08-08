<template>

  <div class="goods-item" @click="itemClick">
    <img :src=showImage alt="" @load="iamgeLoad">
<!--  p是另开一行了-->
    <div class="goods-info ">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}} </span>
    <!-- 星星的收藏图片-->

      <span class="collect">{{goodsItem.cfav}}</span>

    </div>
  </div>

</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    //直接对应的小组件里的object，保存的都是object数据
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
      showImage(){
        return  this.goodsItem.image||this.goodsItem.show.img
      }
  },
  methods:{
    iamgeLoad(){
      //在Home里 105行
      //由于与Detail复用了，点击还是会调用了home里的刷新，使用判断一下，不在home里就不要刷新
      if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('itemImageLaod')
      }else if(this.$route.path.indexOf('/detial')){
        this.$bus.$emit('detailitemImageLaod')
      }

      //console.log('-----');
    },
    itemClick(){
      console.log('跳转到详情页');
      this.$router.push("/detail/"+this.goodsItem.iid)

    }
  }
}
</script>

<style scoped>

.goods-item {
  padding-bottom: 15%;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.goods-info {
  /*font-size: 12px;*/
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20%;
}
.goods-info .collect {
  position: relative;
  overflow: hidden;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -70px;
  top: -5%;
  width: 60px;
  height: 60px;
  background: url(../../../assets/img/common/collect.svg) 0 0/60px 60px ;
}
</style>
