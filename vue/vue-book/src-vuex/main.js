// npm install vuex
import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  count:0
}; // data:{} 和组件中的数据 功能是一样的
const mutations = { //就是组件中的方法
  increment(state,val){ //state代表的是,是默认参数
    state.count += val;
  },
  decrement(state,val){
    state.count -= val;
  }
};
const getters = { //组件中的computed
  type:(state)=>state.count%2?'奇数':'偶数'
};
let store = new Vuex.Store({ //创建store
  state,
  mutations,
  getters,
  strict: true //开启严格模式 只能通过mutation来改变，否则会出错
});
new Vue({
  el:'#app',
  store, // this.$store 每个组件都会拥有一个$store属性
  ...App // render / template+component
});
