//不直接再home里使用axios
//多封装一层,这里都是为首页请求的数据

import {request1} from "./request";

export function getHomeMultidata() {
  //Home里面调用,返回的数据给Home
  //运算的数据穿给reques1
  return request1({
    url:'/home/multidata'
  }).then((res)=>{
   // console.log(res)
    //记得的返回
     return res
  })
}
export function getHomeGoods(type,page){
  return request1({
    url:'/home/data',
    params:{
      type,
      page
  }
  })


}
