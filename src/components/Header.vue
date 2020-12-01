<template>
  <div>
    <div class="header-container horizen-bar">
      <header>
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
    <div class="sub-header-container">hi</div>
  </div>
</template>

<script>
import Vue from 'vue';
import BrandLogo from '../assets/logo-kr.svg';

export default Vue.extend({
  name: 'header',
  components: {
    BrandLogo,
  },
});
</script>

<style lang="scss">
.header-container {
  position: sticky;
  top: 0;
}
.horizen-bar {
  border-bottom: 1px solid rgb(219, 219, 219);
  width: 100%;
}
header {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: calc(var(--unit) * 8) calc(var(--unit) * 16);
  box-sizing: border-box;

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
