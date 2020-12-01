<template>
  <div>
    <div class="sub-header-container">
      <div class="sub-header-inner inner-container inner-wrapper">
        병원목록 (1473)
      </div>
    </div>
    <ul class="inner-container">
      <li
        v-for="item in hospitalList"
        :key="item.id"
        @click="onLoadHospitalDetail(item.id)"
      >
        <HospitalCard
          :id="item.id"
          :imgSrc="item.mainImage"
          :rating="item.rating"
          :hospitalName="item.name"
          :reviewCount="item.reviewCount"
          :availableJa="isAvailableJapanese(item)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { findIndex } from 'lodash';
// import { router } from 'vue-router';
import HospitalCard from '../components/HospitalCard.vue';
import HospitalData from '../response/hospitalList.json';

// interface IHospitalItem {
//   id: number;
//   name: string;
//   rating: number;
//   reviewCount: number;
//   pageCount: number;
//   profileImage: string;
//   photos: string[];
//   updateTime: number;
//   mainImage: string;
//   supportingLangList: string[];
// }

// interface IData {
//   hospitalList: IHospitalItem[];
// }

export default Vue.extend({
  data: function () {
    return {
      hospitalList: [],
    };
  },
  components: {
    HospitalCard,
  },
  mounted() {
    this.hospitalList = HospitalData.data;
  },
  methods: {
    isAvailableJapanese(item) {
      return findIndex(item.supportingLangList, 'ja') > 0 || false;
    },
    onLoadHospitalDetail(id) {
      if (id) {
        this.$router.push(`/hospitals/${id}`);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.sub-header-container {
  margin-top: 50px;
  height: 47px;
  font-size: 1.2rem;
  border-bottom: 1px solid rgb(205, 205, 205);
}
.sub-header-inner {
  height: 100%;
  font-weight: 600;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: calc(var(--unit) * 24) calc(var(--unit) * 16);

  li {
    padding-bottom: 20px;
    cursor: pointer;
    &:nth-child(2n - 1) {
      margin-right: 15px;
    }
    /* & > div {
      pointer-events: none;
    } */
  }
}

@media only screen and (max-width: 770px) {
  ul {
    li {
      width: calc(50vw - 30px);
    }
  }
}
</style>
