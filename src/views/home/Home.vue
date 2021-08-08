<template>
  <div id="home">
    <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
<!--    偷天换日-->
    <TabControl  v-show="isTabFixed" class="tab-control"
                  ref="tabControl1"
                  v-bind:titles="['流行','精品','新选']"
                  v-on:tabClick="tabClick"/>
  <!-- 驼峰一杠分割      不是v-bind是传的字符串-->
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true"
            @scroll_position="contentScroll_position" @scroll_pullingUp="contentScroll_pullingUp">
      <HomeSwiper :HSbanners="banners" @imageload="swiperImageLoad"/>
      <HomeRecommendView :HRVrecommends="recommends"/>
      <HomeFeatureView/>
      <TabControl v-show="!isTabFixed"
                  ref="tabControl2"
                  v-bind:titles="['流行','精品','新选']"
                  v-on:tabClick="tabClick"/>
      <GoodsList :GLgoods="showGoods"/>
    </scroll>

  <BackTop @click.native="backTopClick" v-show="isShowBackTop"></BackTop>

  </div>

</template>

<script>
import {getHomeMultidata,getHomeGoods} from "../../network/home";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import NavBar from "../../components/common/navigationbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/common/backTop/BackTop";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
      //result:null
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',/* 当前的*/
      scroll:null,
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  computed:{
    showGoods(){
      /* 准备展示的goods*/
      console.log(this.goods[this.currentType].list);
      return this.goods[this.currentType].list

    }
  },

  //组件一创建好就发送网络请求
  created() {
    //1.请求多个数据 请求过来的数据保存一下
  //  this.result=getHomeMultidata();
    // console.log(this.result)
    //这个可是不能打印的,因为上面请求数据属于异步操作,而下面的打印是及时的,大功率是空
     this.getHomeMultidata();

  //2.请求商品的数据
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('sell');



  },

  mounted() {
    //this.$refs.scroll.refresh 传入的是函数，this.$refs.scroll.refresh()传入了放返回方法
    const refresh = this.debounce(this.$refs.scroll.refresh,200)
  //上面的是防抖动的
    //监听最好在mounted里写监听，不然写在create中，数据scroll还没有挂载好，你就先监听了


    //3.监听item中图片的加载完成
    this.$bus.$on('itemImageLoad',()=>{
      console.log('homede-----');
      refresh()
      // this.$refs.scroll.refresh()
    })

  },

  destroyed() {
    console.log('任务销毁了');
  },
  activated() {
    //页面进入前
    //这个函数是在Toback返回顶部的时候，设计的，
    this.$refs.scroll.scrollTop(0,this.saveY,200)
    //不刷新可能出现滑不能，因为画布的长度没有值或者过于小了
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //页面离开前
    this.saveY=this.$refs.scroll.getScrollY();

  },


  //给creat包装一层方法
  methods:{
    /**
     * 事件监听
     */
    //第一次 进来 等500ms准备运行
    //第二次 进来 第一次还没有等到500ms，就取消了第一次的运行 开始自己等待500ms 准备运行
    //第三次 进来 第二次还没有等到500ms，就取消了第二次的运行 开始自己等待500ms 准备运行
    //.....
    // 只到最后一次，才能正常加载。
    //设置的delay时间，
    // 越短 防抖动效果越好，但是
    debounce(func,delay){
      let timer = null
      return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },


    tabClick(index){ /* 就算上面没有传入，但是又不影响到他输出 */
      switch (index) {
        case 0:this.currentType='pop';break;
         case 1:this.currentType='new';break;
         case 2:this.currentType='sell';break;
      }
    //  if(this.$refs.tabControl2 !==undefined){
        this.$refs.tabControl1.currencyIndex =index;
        this.$refs.tabControl2.currencyIndex =index;
    //  }
      //最新点击的保持一致

    },
    /**
     * 下面都是网络请求
     */
    getHomeMultidata( ){
      getHomeMultidata().then((res)=>{
        this.banners=res.data.data.banner.list;
        this.recommends=res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      /* 就可以实现了，页面的变化累加  ，这边请求到了数据，数据就改变上面的page*/
      const page=this.goods[type].page+1;

      getHomeGoods(type,page).then((res)=>{
       // console.log(res)
        /*数据不能直接赋值于接收的数据，要是来了第二页的数据不就把第一页的给覆盖掉了*/
        /* 要使用push*/
        /* 一个一个的铺设进来，不过语法太繁琐，有更加简单的*/
        // for (let n of res.data.data.list){
        //   this.goods[type].list.push(n)
        // }

        this.goods[type].list.push(...res.data.data.list)
        /*相当于 push(10,20,30,40,60,等等)*/

        this.goods[type].page+=1;
        this.$refs.scroll.finishPullUp()
      })
    },

    //父子组件传递消息
    backTopClick(){
       // this.$refs.scroll 拿来了组件
      this.$refs.scroll.scrollTop(0,0,500)
    },

    contentScroll_position(position){
      //判断是否显示BackTop
     this.isShowBackTop = (-position.y)>1000
    //  console.log(position)
      //判断tabControl是否吸顶（position：fixed）
      this.isTabFixed = ((-position.y)>this.tabOffsetTop)
    },

    contentScroll_pullingUp(){
      console.log('上拉加载更多');
      this.getHomeGoods(this.currentType)
     // this.$refs.scroll.scroll.refresh() //如果卡着来回刷不动，就搞好了在计算刷新一下，具体高度

    },

    swiperImageLoad(){
      //console.log(this.$refs.tabControl.$el.offsetTop);
      //获取组件的顶部信息
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
      //console.log(this.tabOffsetTop);

    },

  },

}



</script>

<style scoped>
#home{
  /* 给顶部一个高度不然swiper的轮播图少量半截*/
  padding-top: 135px;
  /* 给home一个高度 */
  height: 100vh;
  /*position: relative;*/
}

.home-navbar{
  color:white;
  background-color: #ff8198;
  /* 使用原生滚动时的处理*/
  /*position:fixed;    !* 固定不希望上面二点navbar跟随移动*!*/
  /*left: 0;*/
  /*right:0;*/
  /*top: 0;*/
  /*z-index: 9; !* 给出层级优先数*!*/
}
.tab-control{
  position: relative;
  z-index: 9;
}


/* 没有使用better-scroll的用法*/
/*.tab-control{*/
/*  !*使页面停留的代码*!*/
/*  position: sticky;*/
/*  !*padding-top: 139px;*!*/

/*  top:139px;*/
/*}*/

.content{
  height: 1500px;
  /*position: absolute;*/
}

</style>
