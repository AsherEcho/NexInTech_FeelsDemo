import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list:[]
  },
  getters: {
    showNums(state) {
      return "当前最新的Count值为:" + state.count;
    },
  },
  //只有mutations定义的函数才有资格修改state中的数据
  mutations: {
    //不要在mutations中执行异步操作
    add(state) {
      state.count++;
    },
    reduce(state) {
      state.count--;
    },
    initList(state,list){
      state.list = list
    }
  },
  actions: {
    //不能直接在actions中修改state中的数据
    //通过context.commit() 触发某个mutations才行
    addAsync(context) {
      setTimeout(() => {
        context.commit("add");
      }, 1000);
    },
    //
    getList(context){
      axios.get('/list.json').then(({data})=>{
        console.log(data)
        context.commit('initList',data)
      })
    }
  },
  modules: {},
});
