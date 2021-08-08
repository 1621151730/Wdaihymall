<!--下面的框-->
<template>
  <div>
    <!-- 只有一个的时候用id,可能有多个的时候用class-->
    <div id="tab-bar" > <!--底部的导航栏可就一个啊-->
      <slot></slot>
    </div>
  </div>

</template>

<script>

export default {
  name: "TabBar"

}
</script>

<style scoped>
#tab-bar{
  display: flex;  /* 固定的*/
  background-color: aliceblue;

  position: fixed;

  right: 0;
  left: 0;
  bottom: 0;
  box-shadow: 0px -3px 0px rgba(10 10 10 .3);
  z-index: 10;

}
</style>
