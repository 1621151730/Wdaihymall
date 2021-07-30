<template>
  <!-- 只有一个的时候用id,可能有多个的时候用class-->
  <div class="nav-bar">
    <!-- 给插槽布局需要多写一个div包起来-->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar{
  display: flex;  /* 固定的*/
  height: 44px;
  text-align: center;
  /*不加这一行,center居中只在上部分,加上了限高就在中间了*/
  line-height: 44px;  /*限高44px的,如果没有内容就撑不起来*/
  box-shadow: 0 1px 8px rgba(100,100,100,.1);
}
.left,.right{
  width: 60px;

}
.center{
  flex: 1;



}

</style>
