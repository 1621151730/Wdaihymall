<template>
<div class="wrapper" ref="wrapper" >
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props:{
    probeType:{  //这个开启监听的属性
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {

    this.scroll=new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,     //这个值不要写死了，不然影响性能，优化能一大堆的放回数据
      pullUpLoad:this.pullUpLoad,
      observeDOM:true, //新版要启动这个
      observeImage:true,
      click:true,  //无法点击的启动一下
      taps:true,
      mouseWheel: true,//开启鼠标滚轮
      disableMouse: false,//启用鼠标拖动
      disableTouch: false,//启用手指触摸

    })

    this.scroll.on('scroll',(position)=>{
     // console.log(this.probeType)
      this.$emit('scroll_position',position)

    })

    this.scroll.on('pullingUp', ()=>{
      // console.log('上拉加载更多');
      //发送网路请求，请求更多的数据
      this.$emit('scroll_pullingUp')
      //等数据请求结束，并且将新数据展示出来之后
    })

  },
  methods:{
    scrollTop(x,y,time=300){ //这个就是time默认为300，外面访问scrollTo就不用穿两次scroll.scroll...
     this.scroll&&this.scroll.scrollTo(x,y,time)
    //  怕数据来的太快scroll还没有实例化，外部就调用了这个函数，铁定是无值的，所有使用了，&&判断，前面null后面就不用判断了不执行的


    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll&& this.scroll.refresh();
    },
    getScrollY(){
      //三项式
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

.wrapper{
  height: 500px;
  /*z-index:12;*/
  position: absolute;
  left: 0;
   background-color: white;
}
/*.content{*/
/*  height: 1000000px;*/
/*  background-color: #ff8198;*/
/*}*/

</style>
