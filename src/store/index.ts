import { createStore } from 'vuex'

export default createStore({
  // 定义需要的状态
  state: {
    'list': [],
    'name': 'andy'
  },
  // 同步修改状态
  mutations: {
    // 添加
    add(state, payload){
      state.list.push(payload)
    }
    //删除

    // 清除
  },
  // 异步提交mutation
  actions: {
  },
  // 模块化
  modules: {
  }
})
