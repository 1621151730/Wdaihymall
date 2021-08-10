<template>
  <div class="toast" v-show="isShow">
    <div class="message"  >{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return{
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message='默认toast',duration=2){
      console.log('------------')
      this.isShow=true;
      this.message = message;

      setTimeout(()=>{
        this.isShow = false;
        this.message = ' ';
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  width: 50%;
  height: 10%;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  color:#ffffff;
  background-color: rgba(0,0,0,0.55);
  border-radius: 8%;
  flex: 1;
  z-index: 20;
}
.message{
  font-size: 60px;
  display: flex;
  justify-content: center;
  padding-top: 10%;
}
</style>
