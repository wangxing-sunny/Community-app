<template>
  <div class="shopping-view">
    <div class="shopping-view-header">
      <img class="header-bg" src="@/assets/images/shopping-view/icons/header.png">
      <div class="header-action">
        <a class="scan" href="">
          <img src="@/assets/images/shopping-view/icons/scan.png">
        </a>
        <div class="search">
          <img class="search-icon" src="@/assets/images/shopping-view/icons/search.png">
          <input class="search-input" v-model="searchText" type="text" placeholder="搜索">
          <!-- <input class="search-input" type="file" accept="image" placeholder="搜索"> -->
        </div>
      </div>
    </div>
    <mt-swipe class="shopping-view-swipe" :auto="6000" :show-indicators="false">
      <mt-swipe-item v-for="(item, idx) in slides"
        :key="idx">
        <img class="swipe-img" :alt="item.name" :src="item.image">
      </mt-swipe-item>
    </mt-swipe>
    <div class="shopping-view-onsale">
      <div class="onsale-title">今日特价</div>
      <grid :grid="sale" class="onsale-grid"/>
    </div>
    <div class="shopping-view-shops">
      <div class="shops-title">社区商城</div>
      <div class="shops-type">
        <p v-for="(item, idx) in types"
          :key="idx"
          class="shop-type-item"
          :class="{'is-selected': selected === idx}"
          @click="setIndex(idx)">
            <span>{{ item.type }}</span>
        </p>
      </div>
      <grid :grid="shops" class="shops-grid"/>
    </div>
  </div>
</template>

<script>
import Grid from '@/components/grid'
export default {
  data() {
    return {
      selected: 0,
      searchText: '',
      slides: [
        {
          name: '',
          image: require('@/assets/images/shopping-view/mock/slide1.png')
        },
        {
          name: '',
          image: require('@/assets/images/shopping-view/mock/slide2.png')
        },
        {
          name: '',
          image: require('@/assets/images/shopping-view/mock/slide3.png')
        }
      ],
      sale: [
        {
          image: require('@/assets/images/shopping-view/mock/sale1.png')
        },
        {
          image: require('@/assets/images/shopping-view/mock/sale2.png')
        },
        {
          image: require('@/assets/images/shopping-view/mock/sale3.png')
        },
        {
          image: require('@/assets/images/shopping-view/mock/sale4.png')
        }
      ],
      types: [
        {
          type: '精选'
        },
        {
          type: '服装鞋靴'
        },
        {
          type: '家居装饰'
        },
        {
          type: '生活用品'
        },
        {
          type: '娱乐休闲'
        }
      ],
      shops: [
        {
          image: require('@/assets/images/shopping-view/mock/goods1.png')
        },
        {
          image: require('@/assets/images/shopping-view/mock/goods2.png')
        }
      ]
    }
  },
  components: {
    Grid
  },
  methods: {
    setIndex(idx) {
      this.selected = idx
    }
  }
}
</script>

<style>
.shopping-view-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  z-index: 1;
}
.header-bg {
  position: absolute;
  width: 100%;
  height: 100%;
}
.header-action {
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 30px;
  margin: 20px 10% 0;
  vertical-align: middle;
}
.scan {
  display: block;
  width: 10%;
  height: 100%;
  min-width: 20px;
  margin: 0;
  padding: 0;
}
.scan img {
  position: relative;
  top: 5px;
  width: 20px;
}
.search {
  width: 85%;
  height: 100%;
  margin-left: 5%;
  padding: 0 5%;
  background: #ffffff;
  border-radius: 15px;
  box-sizing: border-box;
}
.search-icon {
  position: relative;
  top: 5px;
  width: 20px;
  margin-right: 5px;
}
.search-input {
  position: absolute;
  width: 60%;
  height: 30px;
  border: none;
  padding: 0;
  font-size: 1.5rem;
  outline: none;
}

.mint-swipe.shopping-view-swipe {
  margin: 0 3% 1rem;
  width: 94%;
  height: 0;
  padding-top: 65px;
  padding-bottom: 45%;
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
}

.mint-swipe.shopping-view-swipe .mint-swipe-items-wrap {
  height: 0;
  padding-bottom: 48%;
  border-radius: 1rem;
}

.mint-swipe.shopping-view-swipe .swipe-img {
  position: relative;
  width: 100%;
}

.shopping-view-onsale,
.shopping-view-shops {
  position: relative;
  margin: 1rem 3%;
  width: 94%;
  background: #ffffff;
}
.shopping-view-onsale{
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}
.shopping-view-onsale .onsale-title,
.shopping-view-shops .shops-title {
  padding: 0.5rem 0;
  padding-left: 2rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.2rem;
}
.shopping-view-onsale .onsale-title::before,
.shopping-view-shops .shops-title::before {
  content: '';
  width: 0.5rem;
  height: 2rem;
  background: #74d797;
  margin: 0.5rem 0;
  margin-left: -1rem;
  position: absolute;
}


.grid.onsale-grid {
  position: relative;
  width: 94%;
  margin: 0 3% 1rem;
  padding: 0;
  padding-bottom: 1rem;
  display: flex;
  flex-flow: row wrap;
}
.grid.onsale-grid .grid-item {
  display: block;
  width: 50%;
  height: 0;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 33%;
  box-sizing: border-box;
  border: 1px solid #ffffff;
}
.grid.onsale-grid .grid-item:nth-child(2n+1){
  border-left: none;
}
.grid.onsale-grid .grid-item:nth-child(2n){
  border-right: none;
}
.grid.onsale-grid .grid-item-wrapper {
  width: 100%;
}
.grid.onsale-grid .grid-image {
  width: 100%;
}

.shopping-view-shops {
  overflow: hidden;
}
.shopping-view-shops .shops-type {
  position: relative;
  width: 100%;
  overflow: scroll;
  white-space: nowrap;
  padding-bottom: 1rem;
}
.shopping-view-shops .shops-type .shop-type-item {
  margin: 0;
  padding: 0 1rem 0.2rem;
  font-size: 1.2rem;
  display: inline;
}
.shopping-view-shops .shops-type .shop-type-item.is-selected {
  border-bottom: 2px solid #6cd086
}


.grid.shops-grid {
  position: relative;
  width: 94%;
  margin: 0 3% 1rem;
  padding: 0;
  padding-bottom: 1rem;
  display: flex;
  flex-flow: row wrap;
}
.grid.shops-grid .grid-item {
  display: block;
  width: 50%;
  height: 0;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 67%;
  box-sizing: border-box;
  border: 1px solid #ffffff;
}
.grid.shops-grid .grid-item:nth-child(2n+1){
  border-left: none;
}
.grid.shops-grid .grid-item:nth-child(2n){
  border-right: none;
}
.grid.shops-grid .grid-item-wrapper {
  width: 100%;
}
.grid.shops-grid .grid-image {
  width: 100%;
}
</style>
<style scoped>
.shopping-view {
  /* background-color: #f1f1f1; */
  height: 100%;
  width: 100%;
  margin-bottom: 57px;
}
</style>
