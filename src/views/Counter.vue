<template>
  <div>
    <span>{{ counter }}</span>
    <Counter :onClickButton="addCounter" />
    <Counter :onClickButton="subStractCounter" />
    <!-- by 와 duration 등의 여러 인자 값을 넘길 경우, 객체안에 key - value 형태로 여러 값을 넘길 수 있다 -->
    <button @click="asyncIncrement({ by: 50, duration: 500 })">
      Increment
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Counter from '../components/Counter.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

// interface IData {
//   count: number;
// }

export default Vue.extend({
  components: {
    Counter,
  },
  // data(): IData {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   changeCount(action) {
  //     return action === 'up' ? this.$store.state.counter++ : this.$store.state.counter--
  //   },
  //   addCounter() {
  //     console.log(this.$store);
  //     this.$store.commit('addCounter', 10);
  //   },
  // },
  // computed: {
  //   counter() {
  //     return this.$store.getters.getCounter
  //   }
  // },
  computed: mapGetters({
    counter: 'getCounter',
  }),
  methods: {
    ...mapMutations({
      addCounter: 'addCounter',
      subStractCounter: 'subStractCounter',
    }),
    ...mapActions({
      asyncIncrement: 'asyncIncrement',
    }),
    addCounter() {
      this.$store.dispatch('addCounter');
    },
  },
});
</script>

<style></style>
