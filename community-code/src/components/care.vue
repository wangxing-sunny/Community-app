<template>
  <div class="care-view">
    <mt-cell class="care-illustration">
      <img alt="插画" src="@/assets/images/care-view/illustration/illustration.png">
    </mt-cell>
    <mt-navbar class="care-button-bar">
      <mt-tab-item id="一键签到">
        <img class="care-button-img" alt="一键签到" src="@/assets/images/care-view/icons/sign.png">
      </mt-tab-item>
      <mt-tab-item id="紧急求助">
        <img class="care-button-img" alt="紧急求助" src="@/assets/images/care-view/icons/help.png">
      </mt-tab-item>
    </mt-navbar>
    <ul class="care-tabs">
      <li>
        <mt-cell class="care-column-selection">
          <img class="care-column-image" alt="家政保洁" src="@/assets/images/care-view/icons/clean.jpg">
        </mt-cell>
      </li>
      <li>
        <mt-cell class="care-column-selection">
          <img class="care-column-image" alt="社会福利" src="@/assets/images/care-view/icons/welfare.jpg">
        </mt-cell>
      </li>
      <li>
        <mt-cell class="care-column-selection">
          <img class="care-column-image" alt="家庭报修" src="@/assets/images/care-view/icons/repaire.jpg">
        </mt-cell>
      </li>
      <li>
        <mt-cell class="care-column-selection">
          <img class="care-column-image" alt="社会医疗" src="@/assets/images/care-view/icons/medical.jpg">
        </mt-cell>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mint-cell.care-illustration {
  position: relative;
  width: 100%;
  margin: 0;
}
.mint-cell.care-illustration .mint-cell-wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: none;
}
.mint-cell.care-illustration .mint-cell-wrapper .mint-cell-title {
  display: none;
}
.mint-cell.care-illustration .mint-cell-wrapper .mint-cell-value {
  width: 100%;
}
.mint-cell.care-illustration .mint-cell-wrapper .mint-cell-value > img {
  width: 100%;
}


.mint-navbar.care-button-bar {
  position: relative;
  z-index: 1;
  margin: -6rem 3% 0;
  padding: 1rem 0 0;
  width: 94%;
  background: transparent;
}
.mint-navbar.care-button-bar .mint-tab-item {
  padding: 0;
  padding-bottom: 10px;
  position: relative;
  box-sizing: border-box;
  max-width: 50%;
}
.care-button-img {
  margin: 0 5%;
  max-width: 80%;
}


.care-tabs {
  list-style: none;
  margin: 0 3%;
  padding: 1rem 0 0.5rem;
  width: 94%;
  background: #ffffff;
  position: relative;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}
.care-tabs li {
  margin-bottom: 0.5rem;
}
.care-tabs li .mint-cell.care-column-selection {
  background-image: none;
}
.care-tabs li .mint-cell.care-column-selection .mint-cell-wrapper{
  background-image: none;
}
.care-tabs li .mint-cell.care-column-selection .mint-cell-wrapper .mint-cell-value{
  width: 100%;
}
.care-tabs li .mint-cell.care-column-selection .mint-cell-wrapper .mint-cell-value img{
  width: 100%;
  border-radius: 0.5rem;
}
</style>
<style scoped>
.care-view {
  /* background-color: #f1f1f1; */
  height: 100%;
  width: 100%;
  margin-bottom: 57px;
}
</style>
