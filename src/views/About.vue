<template lang="pug">
transition(appear-active-class="animate__animated animate__fadeIn", appear)
  main.container__content
    h5 This is about page
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab earum saepe at reiciendis voluptates ullam veritatis dignissimos itaque. Id molestiae tenetur maiores dicta, eligendi delectus distinctio cupiditate adipisci sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, culpa! Nesciunt nihil eum aspernatur doloribus? Hic voluptate magni corporis quae veniam. Fugiat labore cupiditate aliquam repellat rem magnam, aperiam molestiae.
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestiae dolor temporibus soluta odit. Laudantium temporibus et incidunt? Eligendi quia, consectetur repellendus beatae quaerat sequi expedita dolorum odio commodi. Facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem maxime autem voluptates voluptatum ea animi vel iusto ratione repellat, temporibus eligendi magnam reprehenderit optio accusamus, molestiae a maiores non adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci inventore mollitia quod sit reiciendis? Aperiam aspernatur temporibus iste porro distinctio eaque molestias aliquid, rerum impedit explicabo debitis ea at!
    p Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet culpa quibusdam consectetur voluptate, illo nostrum earum odit. Culpa, inventore ab, aliquid nam praesentium nihil, commodi odio aliquam ipsam assumenda error.
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
</style>