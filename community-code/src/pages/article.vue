<template>
  <transition name="slide-right">
    <div class="article">
      <mt-header fixed>
        <mt-button icon="back" @click="back" slot="left">返回</mt-button>
        <img
          class="share"
          @click="share"
          slot="right"
          src="@/assets/images/community-view/icons/share.png"
        >
      </mt-header>
      <div class="article-content">
        <h1>饭后百步走真的有益健康？看完这篇恐怕你要改观了</h1>
        <div>
          有人说：「饭后坐着，胃会痛。」有人说：「饭后站着，胃会下垂」。有人说：「饭后躺下，影响消化。」
          饭后站着、坐着、躺着都不行，那么，看来只能选择不吃饭了？别急，今天就来讨论饭后究竟站还是坐。
          坐着还是站着，更利于饭后消化？
          先公布答案，站着比较好。饭后最好站半小时，利于消化。
          1、站着
          饭后站着消化，偶尔走动一小步，只要不是剧烈运动，就不会对胃产生负面影响，反而可以促进消化。
          如果是采取靠墙站立的办法，还可以消耗热量，减少脂肪堆积，起到控制体重的效用。
          刚开始靠墙站的时候，可能坚持不了多久，可循序渐进，从5分钟逐渐增加到半小时。
          对于上班族而言，是预防小肚腩的一个办法。
          觉得太辛苦？就站着就好，虽然消耗不了多少热量，但预防脂肪堆积的作用是一样的。
          2、坐着
          坐着消化，其实就一个问题，容易堆积脂肪。
          上班族的小肚腩怎么来的？跟久坐不动脱不了干系。
          趁难得的吃饭+午休时间动起来，让胃好好消化，避开最容易产生脂肪的时刻。
          3、躺着
          饭后立即躺下，是最最不可取的方式。
          吃完饭就躺下，不利于消化，也容易囤积脂肪。
          而且饭后倒头就睡，会使肠胃里的食物停留时间过长，影响消化功能。
          另外饭后人体会增加胃肠的血流量。大脑的血容量就会减少，血压也随之下降，这时睡觉容易脑供血不足，形成血栓、中风等严重后果。
          消化半小时后，感觉胃里食物已经消化一些，才可以躺下来好好休息了。午休20~30分钟，下午的精力更好。
          饭后散步是否利于健康？
          「饭后走一走，活到九十九」是我们常听到的一句俗语。
          散步的确有益身心健康，但要注意，「饭后百步走」，并不是指吃完饭立马就去散步。
          那样不利于消化，如果走得过快，甚至可能对健康带来不利影响，轻则腹痛腹胀，重则导致胃下垂。
          饭后半小时内，只适合小范围、小幅度的活动，不适合剧烈运动。
          正确的散步方式，是休息半小时后，再慢慢散步一个小时，既促进消化，又锻炼身体。
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
    share() {}
  }
};
</script>

<style>
.article {
  position: absolute;
  width: 100%;
}
.article .mint-header {
  height: 5rem;
  font-size: 1.5rem;
  background-color: #6cd086;
  line-height: 6rem;
}
.share {
  width: 35px;
  height: 35px;
}
.article-content {
  padding: 5rem 2rem 1rem;
  background: #ffffff;
}
.article-content h1 {
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
}
.article-content div {
  font-size: 1.5rem;
  line-height: 2rem;
  text-indent: 2em;
}

.slide-right-enter-active {
  animation: slide-right 0.25s linear;
}
.slide-right-leave-active {
  animation: slide-right 0.25s linear reverse;
}
@keyframes slide-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
