<!--下面框里的一个一个组件的-->
<template>
  <div class="tar-bar-item" @click="click">

    <div v-if="!isActive"><slot name="bar-icon"></slot></div>
    <div v-else><slot name="bar-icon-active"></slot></div>
    <div v-bind:style="isActiveStyle"><slot name="bar-text"></slot></div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    isActiveColor:{
      type:String,
      default:'#ff8198'
    }
  },
  data(){
    return{
   // isActive:false,
    }
  },
  computed:{
    isActive() {
      //$route.path是拿到活跃的path，判断this.path在不在这个活跃的里面
      //没有找到这个情况 ==-1，找到了 !==-1
      return  this.$route.path.indexOf(this.path) !==-1
    },
    isActiveStyle(){
      //个人界面活跃，你传进来数据了就是你的，你不传那就是默认
      //切记isActive不要带 ()
     return this.isActive? {color:this.isActiveColor}:{}
    }
  },
  methods:{
    click(){
      //点击转移页面
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>

.tar-bar-item{
  margin: 0;
  flex: 1;
  text-align: center;
}
.tar-bar-item img{
  height: 80px;
  width: 80px;
}
</style>
