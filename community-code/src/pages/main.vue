<template>
  <transition name="slide-left">
    <div class="main">
      <div class="view">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
      <mt-tabbar fixed v-model="selected">
        <mt-tab-item v-for="(item, idx) in tabs"
          :key="idx"
          :id="item.id">
          <img class="tab-not-select" slot="icon" :src="item.img">
          <img class="tab-select" slot="icon" :src="item.imgf">
          {{ item.text }}
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      selected: 'community',
      tabs: [
        {
          id: 'community',
          text: '社区',
          to: '',
          img: require('@/assets/images/tabs/tab1.png'),
          imgf: require('@/assets/images/tabs/tab1f.png')
        },
        {
          id: 'estate',
          text: '物业',
          to: 'estate',
          img: require('@/assets/images/tabs/tab2.png'),
          imgf: require('@/assets/images/tabs/tab2f.png')
        },
        {
          id: 'care',
          text: '养老',
          to: 'care',
          img: require('@/assets/images/tabs/tab3.png'),
          imgf: require('@/assets/images/tabs/tab3f.png')
        },
        {
          id: 'shopping',
          text: '购物',
          to: 'shopping',
          img: require('@/assets/images/tabs/tab4.png'),
          imgf: require('@/assets/images/tabs/tab4f.png')
        },
        {
          id: 'security',
          text: '安防',
          to: 'security',
          img: require('@/assets/images/tabs/tab5.png'),
          imgf: require('@/assets/images/tabs/tab5f.png')
        },
        {
          id: 'personal',
          text: '我的',
          to: 'personal',
          img: require('@/assets/images/tabs/tab6.png'),
          imgf: require('@/assets/images/tabs/tab6f.png')
        }
      ]
    }
  },
  computed: {
    route() {
      return this.tabs.filter(it => it.id===this.selected)[0].to
    }
  },
  watch: {
    route: {
      immediate: true,
      handler() {
        this.$router.push({ path: `/main/${this.route}` })
      }
    }
  },
};
</script>

<style scope>
.main {
  position: absolute;
  width: 100%;
}
.view {
  position: relative;
  height: 100%;
}
.mint-tabbar {
  background-color: #ffffff;
}
.mint-tabbar > .mint-tab-item {
  color: #b3b3b3;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background: transparent;
  color: #6cd086;
}
.mint-tabbar > .mint-tab-item.is-selected > .mint-tab-item-icon > .tab-not-select {
  display: none;
}
.mint-tabbar > .mint-tab-item.is-selected > .mint-tab-item-icon > .tab-select {
  display: block;
}
.mint-tabbar > .mint-tab-item > .mint-tab-item-icon > .tab-not-select {
  display: block;
}
.mint-tabbar > .mint-tab-item > .mint-tab-item-icon > .tab-select {
  display: none;
}
.mint-tabbar > .mint-tab-item > .mint-tab-item-label {
  font-size: 1rem;
}

.slide-left-enter-active{
  animation: slide-left 0.25s linear;
}
.slide-left-leave-active{
  animation: slide-left 0.25s linear reverse;
}
@keyframes slide-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
