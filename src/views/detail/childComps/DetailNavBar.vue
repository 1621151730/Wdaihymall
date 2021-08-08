<template>
<nav-bar class="navBar">
  <div slot="left" class="back" @click="backClick">
      <img src="../../../assets/img/detial/jiantou.png" alt="">
  </div>
  <div slot="center" class="title" >
  <div v-for="(item,index) in titles" class="title-item"
          :class="{active:index===currencyIndex}" @click="titleClick(index)">{{item}}</div>
  </div>
</nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navigationbar/NavBar";
export default {
  name: "DetailNavBae",
  components:{
    NavBar,
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currencyIndex:0
    }
  },
  methods:{
    titleClick(index){
      //发送给了Detail
      this.$emit('titleIndex',index)
      console.log(index)
      return this.currencyIndex=index

    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
/*.navBar{*/
/*  position: absolute;*/
/*  position: fixed;*/
/*}*/

.back img{
  width: 100px;
  height: 100px;
  margin-top: 20px;
}

.title{
  display: flex;
  justify-content: space-evenly;
  color: #000000;
}
.title-item{
  font-size: 40px;
}
.active{
  color: #ff8198;
}
</style>
