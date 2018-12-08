<template>
  <div class="community-view">
    <mt-swipe class="community-view-swipe" :auto="5000">
      <mt-swipe-item>
        <img class="swipe-img" alt="轮播图1" src="@/assets/images/community-view/swipe/swipe1.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="swipe-img" alt="轮播图2" src="@/assets/images/community-view/swipe/swipe2.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="swipe-img" alt="轮播图3" src="@/assets/images/community-view/swipe/swipe3.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img class="swipe-img" alt="轮播图4" src="@/assets/images/community-view/swipe/swipe4.png">
      </mt-swipe-item>
    </mt-swipe>
    <mt-navbar class="community-nav-bar">
      <mt-tab-item id="社区介绍">
        <img class="community-column-img" alt="社区介绍" src="@/assets/images/community-view/columns/col1.png">
        <div class="community-column-img">社区介绍</div>
      </mt-tab-item>
      <mt-tab-item id="社区新闻">
        <img class="community-column-img" alt="社区新闻" src="@/assets/images/community-view/columns/col2.png">
        <div class="community-column-img">社区新闻</div>
      </mt-tab-item>
      <mt-tab-item id="社区活动">
        <img class="community-column-img" alt="社区活动" src="@/assets/images/community-view/columns/col3.png">
        <div class="community-column-img">社区活动</div>
      </mt-tab-item>
      <mt-tab-item id="社区通知">
        <img class="community-column-img" alt="社区通知" src="@/assets/images/community-view/columns/col4.png">
        <div class="community-column-img">社区通知</div>
      </mt-tab-item>
    </mt-navbar>
    <mt-cell class="community-notice-cell">
      <img slot="icon" src="@/assets/images/community-view/icons/notice.png" width="24" height="24">
      <div class="notice-text">{{ notice }}</div>
      <span class="notice-detail">点击查看>></span>
    </mt-cell>
    <dl class="community-news">
      <dt>社区新闻</dt>
      <dd v-for="(item, idx) in news"
        :key="idx"
        @click="toDetail(item)">
        <mt-cell>
          <img class="news-image" :src="item.image" :alt="item.title">
          <div class="news-text">
            <p class="news-title">{{ item.title }}</p>
            <p class="news-date">{{ item.date }}
              <span>
                <img src="@/assets/images/community-view/icons/share.png">
              </span>
            </p>
          </div>
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
import cms from '@/api/cms'
export default {
  data() {
    return {
      notice: "小区将于11月30号00:00停水整修管道，预计4点恢复。",
      loading: false,
      news: [
        {
          image: require('@/assets/images/community-view/swipe/swipe2.png'),
          title: '饭后百步走真的有益健康？看完这篇恐怕你要改观了',
          date: '2018-11-30'
        },
        {
          image: require('@/assets/images/community-view/swipe/swipe3.png'),
          title: '感觉耳朵痒？别用力掏!但你可以这样做',
          date: '2018-11-29'
        },
        {
          image: require('@/assets/images/community-view/swipe/swipe4.png'),
          title: '身心疲惫？来看看放松小技巧',
          date: '2018-11-28'
        },
        {
          image: require('@/assets/images/community-view/swipe/swipe2.png'),
          title: '饭后百步走真的有益健康？看完这篇恐怕你要改观了',
          date: '2018-11-30'
        },
        {
          image: require('@/assets/images/community-view/swipe/swipe3.png'),
          title: '感觉耳朵痒？别用力掏!但你可以这样做',
          date: '2018-11-29'
        },
        {
          image: require('@/assets/images/community-view/swipe/swipe4.png'),
          title: '身心疲惫？来看看放松小技巧',
          date: '2018-11-28'
        },
        {
          image: require('@/assets/images/community-view/swipe/swipe2.png'),
          title: '饭后百步走真的有益健康？看完这篇恐怕你要改观了',
          date: '2018-11-30'
        },
        {
          image: require('@/assets/images/community-view/swipe/swipe3.png'),
          title: '感觉耳朵痒？别用力掏!但你可以这样做',
          date: '2018-11-29'
        },
        {
          image: require('@/assets/images/community-view/swipe/swipe4.png'),
          title: '身心疲惫？来看看放松小技巧',
          date: '2018-11-28'
        }
      ]
    }
  },
  methods: {
    toDetail(it) {
      this.$router.push('/article')
    }
  },
  mounted() {
    cms.getSiteInfo('cultrue-countryside').then(function(response) {
      console.log("**", response.data)
    })
  },
}
</script>

<style>
.mint-swipe.community-view-swipe {
  height: 220px;
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
}
.mint-swipe.community-view-swipe .swipe-img {
  position: relative;
  width: 100%;
  height: 100%;
}
.mint-swipe.community-view-swipe .mint-swipe-indicators {
  bottom: 25px;
}
.mint-swipe.community-view-swipe .mint-swipe-indicator {
  background-color: #bbbbbb;
  opacity: 0.5;
  width: 8px;
  border-radius: 4px;
}
.mint-swipe.community-view-swipe .mint-swipe-indicator.is-active {
  background-color: #ffffff;
  opacity: 1;
  width: 12px;
}

.mint-navbar.community-nav-bar {
  position: relative;
  z-index: 1;
  margin: -1rem 3% 0;
  width: 94%;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}
.mint-navbar.community-nav-bar .mint-tab-item {
  padding: 10px 0;
  margin: 0 2.5px;
}
.mint-navbar.community-nav-bar .mint-tab-item > .mint-tab-item-label {
  font-size: 1.2rem;
}
.community-column-img {
  margin: 0 5%;
  max-width: 90%;
}
.mint-cell.community-notice-cell {
  position: relative;
  margin: 1rem 3% 0;
  width: 94%;
}
.mint-cell.community-notice-cell,
.mint-cell.community-notice-cell:last-child {
  background-image: none;
}
.mint-cell.community-notice-cell .mint-cell-wrapper {
  padding: 0 5px;
  background-image: none;
}
.mint-cell.community-notice-cell .mint-cell-value {
  max-width: 90%;
  display: flex;
}
.notice-text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 75%;
  font-size: 1.5rem;
  color: #222222;
}
.notice-detail {
  color:#e75651;
  font-size: 1rem;
  text-align: right;
}

.community-news {
  margin: 1rem 3% 0;
  width: 94%;
  background: #ffffff;
  position: relative;
}
.community-news > dt {
  padding: 0.5rem 0;
  padding-left: 2rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.5rem;
}
.community-news > dt::before {
  content: '';
  width: 0.5rem;
  height: 2rem;
  background: #74d797;
  margin: 0.5rem 0;
  margin-left: -1rem;
  position: absolute;
}
.community-news > dd {
  margin: 0;
  height: 9rem;
}
.community-news > dd > .mint-cell {
  padding: 0.5rem 0;
  margin: 0 1rem;
  height: 100%;
  border-bottom: 1px solid #d3d3d3;
  background-image: none;
}
/* .community-news > dd:last-child > .mint-cell {
  border-bottom: none;
} */
.community-news > dd > .mint-cell > .mint-cell-wrapper {
  height: 100%;
  padding: 0;
  background-image: none;
}
.community-news > dd > .mint-cell > .mint-cell-wrapper > .mint-cell-title {
  display: none;
}
.community-news > dd > .mint-cell > .mint-cell-wrapper > .mint-cell-value {
  max-width: none;
  width: 100%;
  height: 100%;
  display: flex;
}
.news-image {
  width: 34%;
  height: auto;
  margin-right: 2%;
}
.news-text > p {
  margin: 0;
  padding: 0;
  line-height: 2rem;
}
.news-title {
  height: 6rem;
  color: #222222;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news-date {
  height: 2rem;
  font-size: 1rem;
}
.news-date > span > img {
  height: 100%;
  float: right;
}
.load-more {
  margin: 0 3%;
  width: 94%;
  text-align: center;
  background: #ffffff;
}
.load-more > div {
  position: relative;
  width: 28px;
  height: 28px;
  left: 50%;
  transform: translateX(-50%);
}
.spinner {
  width: 28px;
  height: 28px;
}
</style>

<style scoped>
.community-view {
  /* background-color: #f1f1f1; */
  height: 100%;
  width: 100%;
  margin-bottom: 57px;
}
</style>
