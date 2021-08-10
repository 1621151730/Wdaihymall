export default {

    //mutations 唯一的目的是修改state的状态
    //mutation中某一个方法做的方法要比较单一，要么加一，要么是添加值，，不然被追踪的时候，addCart就不知道你是做了加一还是添加了值
    //判断逻辑于异步操作，最好放到action里
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      payload.count=1
      payload.checked=true
      state.cartList.push(payload);
  }
}
