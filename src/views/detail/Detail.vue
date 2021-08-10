<template>

<div id="detail" >
  <detail-nav-bar @titleIndex="titleIndex" ref="nav"></detail-nav-bar>

  <scroll class="content" ref="scroll" :probe-type="3"
                @scroll_position="detailScroll_position">

  <detail-swiper :topImages="topImages"></detail-swiper>
  <detail-base-info :goods="goods"></detail-base-info>
  <detail-shop-info :shops="shops"></detail-shop-info>
  <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" ref="goods-info"></detail-goods-info>
  <detail-param-info :paramInfo="paramInfo"  ref="params"></detail-param-info>
  <detail-comment-info :comment-info="commmentInfo" ref="comment" ></detail-comment-info>
   <goods-list  :g-lgoods="Recommend" ref="recommend"></goods-list>
  </scroll>
  <BackTop @click.native="backTopClick" v-show="detialisShow"></BackTop>
  <detail-bottom-bar @addToCart="detail_addToCart"></detail-bottom-bar>
</div>

</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailShopInfo from "./childComps/DetailShopInfo";
import {GetDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail.js";

import {itemisListerMinin} from "../../common/minin";
import {debounce} from "../../common/utils";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import Scroll from "../../components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/common/backTop/BackTop";
import DetailBottomBar from "./childComps/DetailBottomBar"


export default {
  name: "Datail",
  components:{
    Scroll,
    DetailShopInfo,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailBottomBar,
  },
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shops: {},
      detailInfo:{},
      paramInfo:{},
      commmentInfo:{},
      Recommend:[],
      detialisShow:false,
      themetopYs:[] //动态获取
    }
  },
methods:{

  imageLoad(){
      //console.log('-----');
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
  //父子组件传递消息
  backTopClick(){
    // this.$refs.scroll 拿来了组件
    this.$refs.scroll.scrollTop(0,0,500)
  },

  detailScroll_position(position){
    const positionY=(-position.y)+141
    // console.log(positionY)
    //在什么什么之间得到index是什么，index是DetailNavBar调试上面四个的参数
   const themetopY=this.themetopYs
  // console.log(themetopY)
    const length=this.themetopYs.length
//获取最大值 Number.MAX_VALUE
//利用符号进行比较，应该不会越界把
    for(let i=0;i<=length-1;i++){
      if(this.currentIndex!==i && positionY>themetopY[i] && positionY<themetopY[i+1] ){
        this.currentIndex=i
        console.log(i+'-------------------------');
        this.$refs.nav.currencyIndex= this.currentIndex

      }
    }

    this.detialisShow=(-position.y)>1000
  },
  titleIndex(index){

    // this.$refs.scroll.scrollTop(0,-this.themetopYs[index]+140,200)
    this.$refs.scroll.scrollTop(0,-this.themetopYs[index]+140,200)
    console.log(this.themetopYs)
  },

  detail_addToCart(){
    console.log('点击了加入购物车');
    const product={}
    product.image=this.topImages[0];
    product.title=this. goods.title;
    product.desc=this. goods.desc;
    product.price=this.goods.realPrice;
    product.iid=this.iid;
    console.log(product)
    //装载到Vuex中
    //this.$store.commit('addCart',product)
    this.$store.dispatch('addCart',product).then(res=>{
      console.log(res)
      this.$toast.show(res , 2000)
    })

  }

},

  /**
   *生命周期
   * */


  created() {
    //1.获取idd
    this.iid=this.$route.params.iid
    console.log(this.$route.params.iid)

    //2.获取res数据
    GetDetail(this.iid).then((res)=>{
      //获取轮播图数据
      this.topImages=res.data.result.itemInfo.topImages

      const data=res.data.result
      //获取商品信息 原本和上面一样的是this.data.itemInfo的获取对象
      this.goods=new Goods(data.itemInfo,data.columns, data.shopInfo.services)
      //店铺的信息
      this.shops=new Shop(data.shopInfo)
      //获取商品详细信息
      this.detailInfo =data.detailInfo
      //获取参数的信息
      this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //取出评论信息 ,有的商品没有评论信息 ,服务器就一条消息
      if(data.rate.cRate !==0){
        this.commmentInfo=data.rate.list[0]
      }
     // console.log( this.commmentInfo)
    })
    //推荐数据的获取
    getRecommend().then((res)=>{
      this.Recommend=res.data.data.list
      console.log(this.Recommend);
    })

    this.getThemeTopY = debounce(()=> {
      this.themetopYs = []

      console.log('--------++++------');

      this.themetopYs.push(0)
      this.themetopYs.push(this.$refs.params.$el.offsetTop)
      this.themetopYs.push(this.$refs.comment.$el.offsetTop)
      this.themetopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themetopYs.push(Number.MAX_VALUE)
     // this.themetopYs.push(this.$refs.recommend.$el.offsetBommon)

      console.log(this.$refs.recommend);
    } )
    //3.关闭tabbar
    this.$bus.$emit("isShowHide")
  },

  beforeDestroy() {
    //打开tabbar
    this.$bus.$emit("isShowApper")
  },
  minins:[itemisListerMinin],
  //替代了下面的函数
  // mounted() {
  //   let newRefresh =debounce(this.$refs.scroll.refresh,1000)
  // this.$bus.$on('detailitemImageLaod',()=>{
  //    newRefresh()
  // })
  //   },
mounted() {

}


}
</script>

<style scoped>
#detail{
  /*没有这一类型这个，用不了z-index*/
  position: relative;
  background-color: white;
  z-index:12;
}
.content{
  /*先固定高度了，有机会了在适配*/
  height: 1600px;
}
</style>
