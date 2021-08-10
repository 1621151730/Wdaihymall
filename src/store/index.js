import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';
import getters from "./getters";
Vue.use(Vuex)

const state={
  //放对象
  cartList:[]
}

//2.创建Store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {

  }
})

//3.挂载Vue实例
export default store

