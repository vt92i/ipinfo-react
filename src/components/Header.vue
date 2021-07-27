<template lang="pug">
.container__top_corner
  .container__top_left
    .container__bg_left
    a(href="https://github.com/vt92i", target="_blank", rel="noopener noreferrer")
      img.container__logo_github(src="@/assets/images/github.png", alt="Github")

  .container__top_right
    .container__bg_right
    a(href="https://twitter.com/wtsrz4", target="_blank", rel="noopener noreferrer")
      img.container__logo_twitter(src="@/assets/images/twitter.png", alt="Twitter")

header.container__header
  h4.logo ipinfo
  nav.container__nav
    ul.container__nav_list
      router-link(to="/", v-slot="{ navigate, isActive }", custom)
        li.container__nav_item(role="link", :class="{ active: isActive }") 
          a(href="/", @click="navigate") Home
      router-link(to="/ip-lookup", v-slot="{ navigate, isActive }", custom)
        li.container__nav_item(role="link", :class="{ active: isActive }") 
          a(href="/ip-lookup", @click="navigate") IP Lookup
      router-link(to="/about", v-slot="{ navigate, isActive }", custom)
        li.container__nav_item(role="link", :class="{ active: isActive }") 
          a(href="/about", @click="navigate") About
  footer
    span Built with VueJS
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="stylus" scoped>
bg_base()
  background-color: #222
  top: -75px
  position: fixed
  width: 150px
  height: 150px

logo_base()
  position: fixed
  top: 10px
  transition: all ease-in-out 100ms

.container__top_corner
  .container__top_left
    .container__bg_left
      bg_base()
      left: -75px
      transform: rotate(45deg)

    .container__logo_github
      logo_base()
      left: 10px
      width: 44px
      height: 44px

    .container__logo_github:hover
      transform: scale(1.2)

  .container__top_right
    .container__bg_right
      bg_base()
      right: -75px
      transform: rotate(-45deg)

    .container__logo_twitter
      logo_base()
      right: 10px
      width: 38px
      height: 38px

    .container__logo_twitter:hover
      transform: scale(1.2)

.container__header
  background-color: #222
  display: flex
  justify-content: space-between
  align-items: center
  transition: 200ms

  .logo
    color: #d4d4d4
    font-size: 2.4rem
    padding-left: 2rem
    letter-spacing: 4px

    &:hover
      color: #eee

  footer
    padding-right: 1rem

    span
      color: #d4d4d4

      &:hover
        color: #eee

  .container__nav
    .container__nav_list
      list-style-type: none

      .container__nav_item
        display: inline-block
        padding: 0.25rem 1rem
        transition: background-color 0.25s

      .container__nav_item a
        color: #d4d4d4
        font-size: 2rem
        text-decoration: none

      .container__nav_item:hover, .active
        background-color: #111
</style>
