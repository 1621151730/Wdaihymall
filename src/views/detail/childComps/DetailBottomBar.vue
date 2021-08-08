<template>
<div class="bottom-bar">
  <div class="icon_bar">
    <div class="kefu">
      <img src="../../../assets/img/detailbottombar/kefu.png">
      <div>客服</div>
    </div>
    <div class="dianpu">
      <img src="../../../assets/img/detailbottombar/dianpu.png">
      <div>店铺</div>
    </div>

    <div class="shoucang">
      <img src="../../../assets/img/detailbottombar/shoucang.png">
      <div>收藏</div>
    </div>
  </div>

<div class="bottom_font">
  <div class="addCart">
    <div>加入购物车</div>
  </div>
  <div class="buy_now">
    <div>立即购买</div>
  </div>
</div>




</div>
</template>
<script>
export default {
  name: "DetailBottomBar"
}
</script>

<style scoped>
.bottom-bar{
  height: 140px;
  background-color:#ffffff;
 position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex: 1;
  font-size: 42px;
  /*justify-content: space-evenly;*/
}
.icon_bar{
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
  font-size: 38px;
}
.bottom_font{
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}
.kefu img{
  width: 65px;
  height: 65px;

  }
.dianpu img{
  width: 65px;
  height: 65px;
}
.shoucang img{
  width: 65px;
  height: 65px;
}


.addCart{
  background-color: #ffff03;
  line-height: 140px;
  width: 50%;
  text-align: center;
  padding: 0 10px;

}
.buy_now{
  background-color: #ff8198;
  line-height: 140px;
  text-align: center;
  width: 50%;
}
</style>
