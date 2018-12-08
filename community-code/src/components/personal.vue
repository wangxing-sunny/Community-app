<template>
  <div class="personal-view">
    <mt-cell class="personal-illustration">
      <img alt="插画" src="@/assets/images/personal-view/illustration/illustration.png">
    </mt-cell>
    <div v-if="login" class="personal-info">
      <div class="personal-file">
        <img :src="file">
      </div>
      <div class="personal-name">{{ name }}</div>
    </div>
    <div v-if="!login" class="personal-login-register">

    </div>
    <div class="personal-purchase">
      <div class="mine">我的订单</div>
      <mt-navbar class="personal-nav-bar">
        <mt-tab-item id="待付款">
          <img class="personal-nav-img" alt="待付款" src="@/assets/images/estate-view/icons/service.png">
          <div>待付款</div>
        </mt-tab-item>
        <mt-tab-item id="待收货">
          <img class="personal-nav-img" alt="待收货" src="@/assets/images/estate-view/icons/express.png">
          <div>待收货</div>
        </mt-tab-item>
        <mt-tab-item id="待评价">
          <img class="personal-nav-img" alt="待评价" src="@/assets/images/estate-view/icons/figurative.png">
          <div>待评价</div>
        </mt-tab-item>
        <mt-tab-item id="退款/售后">
          <img class="personal-nav-img" alt="退款/售后" src="@/assets/images/estate-view/icons/abbreviation.png">
          <div>退款/售后</div>
        </mt-tab-item>
      </mt-navbar>
    </div>
    <div class="personal-cell-group">
      <mt-cell title="我的好友">
        <img slot="icon" src="@/assets/images/personal-view/icons/friend.png" width="36" height="36">
      </mt-cell>
      <mt-cell title="我的收藏">
        <img slot="icon" src="@/assets/images/personal-view/icons/collect.png" width="36" height="36">
      </mt-cell>
    </div>
    <div class="personal-cell-group">
      <mt-cell title="版本信息">
        <img slot="icon" src="@/assets/images/personal-view/icons/version.png" width="36" height="36">
      </mt-cell>
      <mt-cell title="下载更新">
        <img slot="icon" src="@/assets/images/personal-view/icons/download.png" width="36" height="36">
      </mt-cell>
      <mt-cell title="设置">
        <img slot="icon" src="@/assets/images/personal-view/icons/setting.png" width="36" height="36">
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: true,
      file: require('@/assets/images/security-view/icons/file.jpg'),
      name: '地主家的傻小子'
    }
  }
}
</script>

<style>
.mint-cell.personal-illustration {
  position: relative;
  width: 100%;
  margin: 0;
}
.mint-cell.personal-illustration .mint-cell-wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: none;
}
.mint-cell.personal-illustration .mint-cell-wrapper .mint-cell-title {
  display: none;
}
.mint-cell.personal-illustration .mint-cell-wrapper .mint-cell-value {
  width: 100%;
}
.mint-cell.personal-illustration .mint-cell-wrapper .mint-cell-value > img {
  width: 100%;
}

.personal-info {
  position: relative;
  margin-top: -13rem;
  text-align: center;
}
.personal-file {
  position: relative;
  width: 20%;
  margin: 0 40%;
}
.personal-file img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 6px 25px #06b953;
}
.personal-name {
  position: relative;
  width: 100%;
  font-size: 1.75rem;
  height: 2rem;
  line-height: 2rem;
  margin: 1.5rem 0 1rem;
  color: #ffffff;
}

.personal-purchase {
  position: relative;
  margin: 1rem 3% 0;
  width: 94%;
  background-color: #ffffff;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}
.mine {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  line-height: 2rem;
  font-size: 1.5rem;
}

.mint-navbar.personal-nav-bar {
  position: relative;
  z-index: 1;
  width: 100%;
}
.mint-navbar.personal-nav-bar .mint-tab-item {
  padding: 0;
  padding-bottom: 10px;
  margin: 0;
  color: #111111;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
}
.mint-navbar.personal-nav-bar .mint-tab-item > .mint-tab-item-label {
  font-size: 1.2rem;
}
.personal-nav-img {
  margin: 0 5%;
  max-width: 40%;
}

.personal-cell-group {
  position: relative;
  margin: 1rem 3%;
  width: 94%;
  padding: 0.5rem 0;
  background-color: #ffffff;
  border-radius: 1rem;
}
.personal-cell-group .mint-cell {
  width: 100%;
  background-color: transparent;
}
.personal-cell-group .mint-cell:not(:last-child) {
  border-bottom: 1px solid #ededed;
}
.personal-cell-group .mint-cell:last-child {
  background-image: none;
}
.personal-cell-group .mint-cell .mint-cell-wrapper {
  background-image: none;
}
.personal-cell-group .mint-cell .mint-cell-wrapper .mint-cell-title{
  width: 100%;
  font-size: 1.5rem;
}
.personal-cell-group .mint-cell .mint-cell-wrapper .mint-cell-title img {
  margin-right: 1rem;
}
</style>
<style scoped>
.personal-view {
  /* background-color: #f1f1f1; */
  height: 100%;
  width: 100%;
  margin-bottom: 57px;
}
</style>
