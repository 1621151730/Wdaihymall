<template>
  <div class="shop-item">
    <div class="item-selector">
      <CheckButton
        :is-checked="products.checked"
        @click.native="checkClick"
      ></CheckButton>
    </div>


    <div class="item-img">
      <img :src="products.image" alt="商品图片" />
    </div>

    <div class="item-info">
      <span class="item-title">{{ products.title }}</span>

      <div class="item-desc">{{ products.desc }}</div>

      <div class="info-bottom">
        <div class="item-price left">{{ products.price }}</div>
        <div class="item-count right">{{ products.count }}</div>
      </div>

    </div>

  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components:{
    CheckButton,
  },
  props:{
    products:{
      type:Object,
      default(){
        return {}
      }
    }
  },
methods:{
  checkClick(){
    this.products.checked = !this.products.checked
  }
}
}
</script>

<style scoped>
.shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 10px;
  border-bottom: 3px solid #ccc;
}
.item-selector {
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 10px;
}
.item-img img {
  width: 350px;
  height: 500px;

  display: block;
  border-radius: 10%;
}
.item-info {
  font-size: 60px;
  color: #333;
  padding: 10px 20px;
  width: 979px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 50px;
  color: #666;
  margin-top: 60px;
}
.info-bottom .item-price {
  color: orangered;
  padding-top: 200px;
}
.item-count{
  padding-top: 200px;
}
</style>
