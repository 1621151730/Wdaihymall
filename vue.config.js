//这里的这些配置会和公共的进行合拼的
module.exports={
 configureWebpack:{//配置webpack的config
    resolve:{
     // extensions:[] //这个不用配置了，系统默认配好了.js .vue .css
      extensions:[],
      alias:{
        //'@':'src',//这个是默认的别名@对应的就是src
        'assets':'@/assets',
        'common':'@/assets',
        'acomponents':'@/assets',
        'network':'@/assets',
      //  'router':'@/router',  就引用了少量的不需要给他配
        'views':'@/assets',
      }
    }
 }
}
