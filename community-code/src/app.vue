<template>
  <div id="app">
    <!-- <transition> -->
      <keep-alive>
        <router-view/>
      </keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
