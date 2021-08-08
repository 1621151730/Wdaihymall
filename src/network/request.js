import axios from "axios";

export function request1(config) {

  const instance1=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000,
  })

  //2.aixos的拦截器
  instance1.interceptors.request.use(config=>{
  //  console.log('来到request拦截success中-请求成功拦截');
   // console.log(config);
    return config //config与err都能自定义的
  },err=>{
    //   console.log('来到request拦截failure中-请求失败拦截');
    //  console.log(err);
     return err
  })

  //服务器响应过了这边拿到是结果
  instance1.interceptors.response.use(result=>{
   // console.log('响应成功拦截');
   // console.log(result);
    return result //config与err都能自定义的
  },err=>{
   // console.log('响应失败拦截');
   // console.log(result);
     return err
  })
  return instance1(config)

}
