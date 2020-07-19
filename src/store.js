import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Todo from "@/models/todo";

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Todo)

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  state: {
    UpdateItem:null // a vuex module for update Todo item
  },
  mutations: {

  },
  actions: {

  },
  plugins: [VuexORM.install(database)]
})

export default store
