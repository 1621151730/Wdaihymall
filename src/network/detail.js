import {request1} from "./request";

export function GetDetail(iid) {
  //运算的数据穿给reques1
  return request1({
    url:'/detail',
    params:{
     iid
    }

  }).then((res)=>{
    // console.log(res)
    //记得的返回
    return res
  })
}
//设计成对象
export class Goods {
  //让所有对象面向一个对象开发   export就是可以导出
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export  class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam{
  constructor(info,rule) {
    //image可能没有值（某些商品有，某些没有）
    this.image = info.image ? info.image[0]: '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}


export function getRecommend(){
  return request1({
    url:'/recommend'
  })
}
