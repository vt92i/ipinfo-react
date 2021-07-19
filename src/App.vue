<template lang="pug">
.container
  Header
  router-view
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: { Header },
};
</script>

<style lang="stylus">
*
  box-sizing: border-box
  user-select: none

body
  background-color: #d4d4d4

h1, h2, h3, h4, h5, h6, ul, li
  margin: 0
</style>
