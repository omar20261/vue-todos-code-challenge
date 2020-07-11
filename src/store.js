import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TodoItems:[{title:'My First Todo Item',isDone:false}], // a vuex module for Todos list
    UpdateItem:null // a vuex module for update Todo item
  },
  mutations: {

  },
  actions: {

  }
})
