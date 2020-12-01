<template>
  <div>
    <div class="header-container horizen-bar">
      <header class="inner-wrapper">
        <div class="logo">
          <BrandLogo />
        </div>
        <div class="contents">
          <div class="navigation">
            <ul>
              <li>
                <router-link to="/hospitals">병원</router-link>
              </li>
              <li>
                <router-link to="/events">이벤트</router-link>
              </li>
              <li>
                <router-link to="/more">더보기</router-link>
              </li>
            </ul>
          </div>
          <div class="download-app">
            <button>앱 다운로드하기</button>
          </div>
        </div>
      </header>
    </div>
    <div class="sub-header-container">
      <div class="sub-header-inner inner-wrapper">병원목록 (1473)</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BrandLogo from '../assets/logo-kr.svg';
import { sayHello } from '../mixin/hello';

export default Vue.extend({
  name: 'header',
  components: {
    BrandLogo,
  },
  mixins: [sayHello],
});
</script>

<style lang="scss">
.header-container {
  position: fixed;
  z-index: 10;
  background-color: white;
  top: 0;
}
.sub-header-container {
  margin-top: 50px;
  height: 57px;
  font-size: 1.2rem;
  border-bottom: 1px solid rgb(205, 205, 205);
}
.sub-header-inner {
  font-weight: 600;
}
.horizen-bar {
  border-bottom: 1px solid rgb(219, 219, 219);
  width: 100%;
}
.inner-wrapper {
  max-width: 768px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: calc(var(--unit) * 8) calc(var(--unit) * 16);
  box-sizing: border-box;
}
header {
  height: 50px;

  & > div {
    flex: 1;
  }
}

.logo,
.contents {
  display: flex;
}

.contents {
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  padding-inline-start: 0;
  display: flex;

  li:not(:last-of-type) {
    margin-right: 32px;
  }
}

.download-app {
  border-radius: 4px;
  font-size: 14px;
  background-color: rgb(255, 84, 15);
  color: rgb(255, 255, 255);
  line-height: 20px;
  button {
    padding: 8px 20px;
    color: white;
    line-height: 20px;
    font-size: calc(var(--unit) * 14) px;
    font-weight: 600;
  }
}

@media only screen and (max-width: 770px) {
  .contents {
    visibility: hidden;
  }
}
</style>
