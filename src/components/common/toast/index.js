import Toast from './Toast'
const obj = {}

  obj.install = function (Vue) {
    // Vue.extend(Toast);
    // document.body.appendChild(Toast.$el);

    //1、创建组件构造器         创建一个vue
    const toastConstructor = Vue.extend(Toast);

    //2、new的方式，根据组件构造器，可以创建出来一个组件对象 import
    const toast = new toastConstructor();

    //3、将组件对象，手动挂载到某一个元素上    components
    toast.$mount(document.createElement('div'))

    //4、toast.$el对应的就是div      挂载在template上使用
    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast;

  }

  export default obj

