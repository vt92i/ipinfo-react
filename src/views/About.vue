<template lang="pug">
transition(appear-active-class="animate__animated animate__fadeIn", appear)
  main.container__content
    h5 About
    p This website will help you to know everything about your IP Address. But it's still under development, means it has some bugs, errors and etc. I will try to fix the bugs and add some features to make better Experience for Users.
    p This website is free and open source. That means you don't need to pay anything to use this website and you can even download this website source code on Github and host your own website.
    ul #[strong Some features that I will add later to improve website UI and UX:]
      li Add mobile responsive
      li Create privacy policy page
      li Create articles about IP Address
      li Redesign website
</template>>

<script>
export default {
  created() {
    document.title = "About | ipinfo";
  },
};
</script>

<style lang="stylus" scoped>
.container__content
  display: flex
  flex-direction: column
  align-items: center

  p
    text-align: justify

  ul
    text-align: center

    li
      text-align: left
</style>