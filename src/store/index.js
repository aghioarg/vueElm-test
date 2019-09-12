import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    testData: null,
    indexTest2: ''
  },
  mutations: {
    testDataUpdate(state, payload) {
      state.testData = payload
    },
    test2Update(state, payload) {
      state.indexTest2 = payload
    }
  }

})

export default store
