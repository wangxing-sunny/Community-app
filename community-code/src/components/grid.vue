<template>
  <div class="grid">
    <a v-for="(item, idx) in grid"
      :key="idx"
      class="grid-item">
      <div class="grid-item-wrapper">
        <img v-if="item.image" class="grid-image" :src="item.image" :alt="item.text">
        <div v-if="item.text" class="grid-text">{{ item.text }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: [
    'grid'
  ]
}
</script>

<style scoped>
.grid {
  position: relative;
  width: 100%;
  margin: 1rem 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
}
.grid-item {
  display: block;
  width: 25%;
  height: 0;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 25%;
  box-sizing: border-box;
}
.grid-item-wrapper {
  width: 100%;
}
.grid-text {
  font-size: 1rem
}
</style>
