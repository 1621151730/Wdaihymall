<template>
<div class="bottom-bar">
  <div class="check-content" @click="checkClick">
    <check-button :is-checked="isSelectAll" class="check-button"></check-button>
    <span>全选</span>
  </div>
  <div class="total">
    合计:{{totalPrice}}
  </div>
  <div class="caculate">
    去结算:{{totalLength}}
  </div>
</div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components:{
    CheckButton,
  },
  computed:{
    totalPrice(){
      return '￥'+this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return item.price * item.count+preValue
      },0)
    },
    totalLength(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked
      }).length
    },
    isSelectAll(){
      if(this.$store.state.cartList === 0){
        return false
      }else{
        return !this.$store.state.cartList.find(item=>!item.checked)
      }

    },
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        //全选 取消
        this.$store.state.cartList.forEach(item=>item.checked = false)
      }else{
        //全选  全部选中
        this.$store.state.cartList.forEach(item=>item.checked = true)
      }
    }
  }

}
</script>

<style scoped>
.bottom-bar{
  height: 140px;
  line-height: 140px;
  background-color: #cdcbcb;

  position: relative; /* 相对于navbar*/
  /*top: 200%;*/
  position:fixed;
  display: flex;  /* 固定的*/
  left: 0;
  right:0;
  /*top: 0;*/
  bottom: 150px;
}
.check-content{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.check-button{
  line-height: 100%;
}
.total{
  width: 35%;
padding-left: 60px;
  align-items: center;
}
.caculate{

  width:35%;
  padding-left: 60px;
  background-color: #ff8198;
  padding: 10px 30px;
  text-align: center;

}
</style>
