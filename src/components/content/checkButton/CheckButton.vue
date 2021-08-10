<template>
<div class="check-button"  :class="{check:isChecked}">
  <img src="../../../assets/img/cart/dui_white.png">
</div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  border: 2px solid #aaa;
}

.check{
  border-right: #7f7c7c;
  background-color: #ff8198;
}
.check-button img{
  width: 80px;
  height: 80px;
}

</style>
