import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { CHANGE_KEYWORD, FETCH_RESULT, CLEAR_RESULT} from './mutation-types'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
     keyword: '',
     result: [],
     loading: false
  },
   getters: {
   keyword : state =>{
     return state.keyword
   }
  },
  mutations: {
    [CHANGE_KEYWORD] : (state, {value}) => {
      state.keyword = value
    },
    [FETCH_RESULT] : (state) => {
      let keyword = state.keyword
      // console.log(keyword)
      axios.get('/repositories',{
        baseURL: 'https://api.github.com/search/',
        params: {
          q: keyword
        },
        transformRequest: [data => {
          state.loading = true
          return data
        }],
        transformResponse: [ data => {
          state.loading = false
          return data
        }],
         responseType: 'json',
      })
      .then(response => {
        console.log(response.data)
        state.result = response.data.items
      })
    },
    [CLEAR_RESULT] : (state) => {
      state.result = []
    } 
  },
  actions: {
    CHANGE_KEYWORD: ({commit}, {value}) => {
      value.value == '' ? commit(CLEAR_RESULT) : commit('CHANGE_KEYWORD', {value})
    },
    FETCH_RESULT: ({commit}) => {
      commit('FETCH_RESULT')
    },
    CLEAR_RESULT: ({commit}) => {
      commit('CLEAR_RESULT')
    }
  }
})