
export  default {
    addCart(context,payload){
 return new Promise((resolve, reject)=>{
     // //payload添加新的商品
     // let oldProduct = null
     // for(let i of state.cartList){
     //   if(item.iid === payload.iid){
     //     oldProduct = item
     //   }
     // }
     //查找之前函数是否有该商品
     let oldProduct = context.state.cartList.find(item=>item.iid === payload.iid )

     if(oldProduct){
       // oldProduct.count+=1 //有就加1
       context.commit('addCounter',oldProduct)
       resolve('该商品数量+1')
     }else{
       //有创建了应该count对象，切赋值为1，压入栈中
       // payload.count=1
       // state.cartList.push(payload);
       context.commit('addToCart',payload)
       resolve('新商品数量+1')

     }
   })
 }

}

