// store.js
import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    getCounter: function (state) {
      return state.counter;
    },
  },
  mutations: {
    addCounter: function (state) {
      state.counter++;
      // state.counter = payload ? payload : state.counter + 1
    },
    increment: (state, payload) => {
      console.log(payload);
      state.counter += payload;
    },
    subStractCounter: function (state) {
      state.counter--;
      // state.counter = payload ? payload : state.counter + 1
    },
  },
  // actions: {
  // }
  actions: {
    // getServerData: function (context) {
    //   return axios.get("sample.json").then(function() {
    //     // ...
    //   });
    // },
    addCounter: function (context) {
      console.log('??', context);
      // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
      return context.commit('addCounter');
    },
    delayFewMinutes: function (context) {
      console.log(context);
      return setTimeout(function () {
        context.commit('addCounter');
      }, 1000);
    },
    asyncIncrement: function (context, payload) {
      return setTimeout(function () {
        context.commit('increment', payload.by);
      }, payload.duration);
    },
    fetchHospitalList: async function (context, payload) {
      console.log(context, payload);
      const res = await Axios.get('https://gangnamunni.com/api/hospitals');
      console.log(res);
    },
  },
});
