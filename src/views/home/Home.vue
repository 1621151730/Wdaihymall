<template>
  <div id="home">
    <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
<!--    直接再上面穿参-->
   <HomeSwiper :HSbanners="banners"></HomeSwiper>
    <HomeRecommendView :HRVrecommends="recommends"></HomeRecommendView>
  </div>
</template>

<script>

import NavBar from "../../components/common/navigationbar/NavBar";
import {getHomeMultidata} from "../../network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
export default {
  name: "Home",
  components: {
    NavBar,
  HomeSwiper, HomeRecommendView
  },
  data(){
    return{
      //result:null
       banners:[],
      recommends:[],
    }
  },
  //组件一创建好就发送网络请求
  created() {
    //1.请求多个数据 请求过来的数据保存一下
  //  this.result=getHomeMultidata();
    //这个可是不能打印的,因为上面请求数据属于异步操作,而下面的打印是及时的,大功率是空
    // console.log(this.result)
    getHomeMultidata().then((res)=>{
      this.banners=res.data.data.banner.list;
      this.recommends=res.data.data.recommend.list;
    })
  }

}


</script>

<style scoped>
.home-navbar{
  color:white;
  background-color: #ff8198;
}
</style>
