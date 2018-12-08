<template>
  <div class="estate-view">
    <mt-cell class="estate-illustration">
      <img alt="插画" src="@/assets/images/estate-view/illustration/illustration.png">
    </mt-cell>
    <mt-navbar class="estate-nav-bar" v-model="selected">
      <mt-tab-item id="物业服务">
        <img class="estate-nav-img" alt="物业服务" src="@/assets/images/estate-view/icons/service.png">
        <div>物业服务</div>
      </mt-tab-item>
      <mt-tab-item id="快递服务">
        <img class="estate-nav-img" alt="快递服务" src="@/assets/images/estate-view/icons/express.png">
        <div>快递服务</div>
      </mt-tab-item>
      <mt-tab-item id="透明物管">
        <img class="estate-nav-img" alt="透明物管" src="@/assets/images/estate-view/icons/figurative.png">
        <div>透明物管</div>
      </mt-tab-item>
      <mt-tab-item id="业委会">
        <img class="estate-nav-img" alt="业委会" src="@/assets/images/estate-view/icons/abbreviation.png">
        <div>业委会</div>
      </mt-tab-item>
    </mt-navbar>
    <grid :grid="grid" class="estate-grid"/>
    <dl class="estate-news">
      <dt>透明物管</dt>
      <dd v-for="(item, idx) in news"
        :key="idx"
        @click="toDetail(item)">
        <mt-cell>
          <p class="estate-news-title">{{ item.title }}</p>
        </mt-cell>
      </dd>
    </dl>
    <div class="load-more" v-if="loading">
      <div>
        <mt-spinner type="snake" :size="20" class="spinner"></mt-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from '@/components/grid'
export default {
  data() {
    return {
      selected: '物业服务',
      loading: false,
      grid: [
        {
          image: require('@/assets/images/estate-view/icons/hotline.png'),
          text: '服务热线'
        },
        {
          image: require('@/assets/images/estate-view/icons/repaire.png'),
          text: '家庭维修'
        },
        {
          image: require('@/assets/images/estate-view/icons/enquiry.png'),
          text: '物业费查询'
        },
        {
          image: require('@/assets/images/estate-view/icons/pay.png'),
          text: '物业缴费'
        },
        {
          image: require('@/assets/images/estate-view/icons/scrap.png'),
          text: '废品回收'
        },
        {
          image: require('@/assets/images/estate-view/icons/facility.png'),
          text: '设施保修'
        },
        {
          image: require('@/assets/images/estate-view/icons/suggest.png'),
          text: '投保建议'
        }
      ],
      news: [
        {
          title: '住宅物业服务标准'
        },
        {
          title: '住宅小区物业一级服务标准包括哪些项目和内容？'
        },
        {
          title: '普通住宅小区物业管理服务等级标准'
        },
        {
          title: '住宅物业服务标准'
        },
        {
          title: '物业一级服务标准包括哪些项目和内容？'
        },
        {
          title: '普通住宅小区物业管理服务等级标准'
        }
      ]
    }
  },
  components: {
    Grid
  },
  methods: {
    toDetail(it) {
      this.$router.push('/article')
    }
  }
}
</script>

<style>
.mint-cell.estate-illustration {
  position: relative;
  width: 100%;
  margin: 0;
}
.mint-cell.estate-illustration .mint-cell-wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: none;
}
.mint-cell.estate-illustration .mint-cell-wrapper .mint-cell-title {
  display: none;
}
.mint-cell.estate-illustration .mint-cell-wrapper .mint-cell-value {
  width: 100%;
}
.mint-cell.estate-illustration .mint-cell-wrapper .mint-cell-value > img {
  width: 100%;
}

.mint-navbar.estate-nav-bar {
  position: relative;
  z-index: 1;
  margin: -1rem 3% 0;
  padding: 1rem 0 0.5rem;
  width: 94%;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}
.mint-navbar.estate-nav-bar .mint-tab-item {
  padding: 0;
  padding-bottom: 10px;
  margin: 0;
  color: #111111;
  position: relative;
  border-bottom: 1px solid #f1f1f1;
}
.mint-navbar.estate-nav-bar .mint-tab-item.is-selected {
  border-bottom: 1px solid #74d797;
  color: #111111;
}
.mint-navbar.estate-nav-bar .mint-tab-item.is-selected::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-top:4px solid #74d797;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: auto;
}
.mint-navbar.estate-nav-bar .mint-tab-item > .mint-tab-item-label {
  font-size: 1.2rem;
}
.estate-nav-img {
  margin: 0 5%;
  max-width: 40%;
}

.grid.estate-grid {
  margin: 0 3%;
  width: 94%;
  background: #ffffff;
  padding-bottom: 1rem;
  border-bottom-left-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
}
.grid.estate-grid .grid-item{
  /* background: #e5e5e5; */
  border: 1px solid #ffffff;
}
.grid.estate-grid .grid-item:nth-child(4n+1){
  border-left: none;
}
.grid.estate-grid .grid-item:nth-child(4n){
  border-right: none;
}
.grid.estate-grid .grid-image {
  max-width: 40%;
  margin: 17.5% 0 5%;
  /* background: #ffffff; */
}
.grid.estate-grid .grid-text {
  height: 20%;
}


.estate-news {
  margin: 1rem 3% 0;
  width: 94%;
  background: #ffffff;
  position: relative;
}
.estate-news > dt {
  padding: 0.5rem 0;
  padding-left: 2rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
}
.estate-news > dt::before {
  content: '';
  width: 0.5rem;
  height: 2rem;
  background: #74d797;
  margin: 0.5rem 0;
  margin-left: -1rem;
  position: absolute;
}
.estate-news > dd {
  margin: 0;
  height: 3.2rem;
}
.estate-news > dd > .mint-cell {
  padding: 0.1rem 0;
  margin: 0 1rem;
  height: 3.2rem;
  border-bottom: 1px dashed #dcdcdc;
  background-image: none;
  min-height: 0;
}
/* .estate-news > dd:last-child > .mint-cell {
  border-bottom: none;
} */
.estate-news > dd > .mint-cell > .mint-cell-wrapper {
  height: 100%;
  padding: 0;
  background-image: none;
  line-height: 3rem;
}
.estate-news > dd > .mint-cell > .mint-cell-wrapper > .mint-cell-title {
  display: none;
}
.estate-news > dd > .mint-cell > .mint-cell-wrapper > .mint-cell-value {
  max-width: none;
  width: 100%;
  height: 100%;
  display: flex;
}
.estate-news-title {
  width: 100%;
  height: 3rem;
  color: #111111;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<style scoped>
.estate-view {
  /* background-color: #f1f1f1; */
  height: 100%;
  width: 100%;
  margin-bottom: 57px;
}
</style>
