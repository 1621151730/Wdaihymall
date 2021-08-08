<!--
这个是首页中间的控制栏
-->
<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles"
           class="tab-contorl-item"
           :class="{active: currencyIndex===index}" @click="btnclick(index)">
        <span>{{item}}</span>
<!--        <span :class="{tabitem:currencyIndex===index}">{{item}}</span>-->
      </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
    currencyIndex:0,
    }
  },
  methods:{
    btnclick(index){
      this.currencyIndex=index
      this.$emit('tabClick',index)
      /* tabClick发送的是这个事件，监听的也是这个事件*/
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  /*font-size: 15px;*/
  background-color: white;

  z-index: 2;
}
.tab-contorl-item{
  flex:1;
  height: 80px;
  line-height: 80px;
}
.active{
  color: #ff8198;
}

.active span{
  padding-bottom: 5px;
  border-bottom: 2px solid #ff8198;
}
/*.tabitem{*/
/*  padding-bottom: 5px;*/
/*  border-bottom: 2px solid #ff8198;*/
/*}*/
</style>
