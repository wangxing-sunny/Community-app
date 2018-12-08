<template>
  <div class="security-view">
    <mt-cell class="security-illustration">
      <img alt="插画" src="@/assets/images/security-view/illustration/illustration.png">
    </mt-cell>
    <div class="security-type">
      <grid :grid="types" class="type-grid" />
    </div>
    <div class="security-view-circle">
      <div class="circle-title">社区圈子</div>
      <div class="circle-chat">
        <div v-for="(item, idx) in chats"
          :key="idx"
          class="circle-chat-item">
          <div class="circle-info">
            <div class="circle-user">
              <img class="circle-file" :src="item.userImage">
              <p class="circle-name">{{ item.userName }}</p>
            </div>
            <p class="circle-date">{{ item.date }}</p>
          </div>
          <p class="circle-content">{{ item.content }}</p>
          <img class="circle-image" :src="item.image">
          <div class="circle-state">
            <p class="circle-place">{{ item.place }}</p>
            <a class="circle-reply">
              <img class="circle-reply-icon" src="@/assets/images/security-view/icons/reply.png">
              <p>{{ item.replyNumber }}</p>
            </a>
            <p class="circle-love" @click="item.loved = !item.loved">
              <img v-if="!item.loved" class="circle-loved-icon" src="@/assets/images/security-view/icons/love.png">
              <img v-if="item.loved" class="circle-loved-icon" src="@/assets/images/security-view/icons/loved.png">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Grid from '@/components/grid'
export default {
  data() {
    return {
      types: [
        {
          image: require('@/assets/images/security-view/icons/type1.png')
        },
        {
          image: require('@/assets/images/security-view/icons/type2.png')
        },
        {
          image: require('@/assets/images/security-view/icons/type3.png')
        },
        {
          image: require('@/assets/images/security-view/icons/type4.png')
        }
      ],
      chats: [
        {
          userImage: require('@/assets/images/security-view/icons/file.jpg'),
          userName: '地主家的傻儿子',
          date: '2018-12-01',
          content: '早上的空气真好，江边有很多抓青蟹的人，他们说每天都会来。热心的大叔还捉了好多小蟹让我回家养着玩儿。记得上一次养还是前年，不过被我室友那个坑货趁我不在的时候喂了龙虾，结果她的龙虾最后又被她的乌龟吃掉了。',
          image: require('@/assets/images/security-view/illustration/pei1.png'),
          place: '上海·世家名苑',
          replyNumber: 10,
          loved: true
        },
        {
          userImage: require('@/assets/images/security-view/icons/file.jpg'),
          userName: '王二小',
          date: '2018-12-01',
          content: '邻居张阿姨家的狗狗不慎走丢，麻烦各位如果看见了，请告知一下。下面是狗狗照片。',
          image: require('@/assets/images/security-view/illustration/pei2.png'),
          place: '上海·世家名苑',
          replyNumber: 30,
          loved: false
        }
      ]
    }
  },
  components: {
    Grid
  }
}
</script>

<style>
.mint-cell.security-illustration {
  position: relative;
  width: 100%;
  margin: 0;
}
.mint-cell.security-illustration .mint-cell-wrapper {
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: none;
}
.mint-cell.security-illustration .mint-cell-wrapper .mint-cell-title {
  display: none;
}
.mint-cell.security-illustration .mint-cell-wrapper .mint-cell-value {
  width: 100%;
}
.mint-cell.security-illustration .mint-cell-wrapper .mint-cell-value > img {
  width: 100%;
}
.security-type {
  position: relative;
  margin: -1.5rem 3% 1rem;
  width: 94%;
  background: #ffffff;
  border-radius: 1.25rem;
}

.grid.type-grid {
  position: relative;
  width: 94%;
  margin: 0 3% 1rem;
  padding: 1rem 0;
  display: flex;
  flex-flow: row wrap;
}
.grid.type-grid .grid-item {
  display: block;
  width: 50%;
  height: 0;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 32%;
  box-sizing: border-box;
  border: 1px solid #ffffff;
}
.grid.type-grid .grid-item:nth-child(2n+1){
  border-left: none;
}
.grid.type-grid .grid-item:nth-child(2n){
  border-right: none;
}
.grid.type-grid .grid-item-wrapper {
  width: 100%;
}
.grid.type-grid .grid-image {
  width: 100%;
}


.security-view-circle {
  position: relative;
  margin: 1rem 3%;
  width: 94%;
  padding-bottom: 1rem;
  background: #ffffff;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}
.circle-title {
  padding: 0.5rem 0;
  padding-left: 2rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.2rem;
}
.circle-title::before {
  content: '';
  width: 0.5rem;
  height: 2rem;
  background: #74d797;
  margin: 0.5rem 0;
  margin-left: -1rem;
  position: absolute;
}
.circle-chat {
  margin: 0 2%;
  position: relative;
  width: 96%;
}
.circle-chat-item {
  width: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed #d3d3d3;
}
.circle-chat-item:not(:first-child) {
  margin-top: 1.25rem;
}
.circle-chat-item p {
  margin: 0;
  padding: 0;
}
.circle-info {
  position: relative;
  margin: 0.25rem 0;
  padding: 0;
  height: 30px;
  line-height: 30px;
  color: #888888;
  display: flex;
  justify-content: space-between;
}
.circle-user {
  display: flex;
  font-size: 1.25rem;
}
.circle-file {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
p.circle-name {
  margin-left: 0.25rem;
  color: #000000;
}
p.circle-content {
  margin-top: 1.25rem;
  font-size: 1.5rem;
  text-indent: 2em;
}
.circle-image {
  width: 100%;
  margin-top: 1.25rem;
}
.circle-state {
  width: 100%;
  height: 20px;
  line-height: 20px;
  display: flex;
  position: relative;
  margin-top: 1.25rem;
  color: #888888;
}
.circle-place {
  width: 75%;
}
.circle-reply {
  display: flex;
  width: 15%;
}
.circle-love {
  width: 10%;
  text-align: right;
}
.circle-reply-icon,
.circle-loved-icon {
  width: 20px;
  height: 20px;
}
</style>
<style scoped>
.security-view {
  /* background-color: #f1f1f1; */
  height: 100%;
  width: 100%;
  margin-bottom: 57px;
}
</style>
