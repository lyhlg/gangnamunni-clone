<template>
  <div class="card-wrapper">
    <div class="img"><img :src="imgSrc" alt="imgAlt" /></div>
    <h3>{{ hospitalName }}</h3>
    <div>
      <span>⭐️</span>
      <span>{{ rating }}</span>
      <span>&nbsp;|&nbsp;</span>
      <span>평가수 &nbsp;</span>
      <em>{{ reviewCount }} 개</em>
      <span v-if="availableJa">일본어가능</span>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
  name: 'HospitalCard',
  props: [
    'id',
    'imgSrc',
    'hospitalName',
    'rating',
    'reviewCount',
    'availableJa',
  ],
  methods: {
    fetchHospitalList() {
      console.log('hihi');
    },
    // onLoadHospitalDetail(id) {
    //   console.log('id', id);
    // },
  },
});
</script>

<style lang="scss" scoped>
.img {
  width: 360px;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 10px;

  img {
    width: 100%;
    transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;
    &:hover {
      transform: scale(1.1);
    }
  }
}
h3 {
  font-size: 1.6rem;
  margin: 0;
  color: rgb(0, 0, 0);
  font-weight: bold;
}
span,
em {
  font-size: 1.2rem;
  font-style: unset;
}
em {
  color: orange;
}
</style>
