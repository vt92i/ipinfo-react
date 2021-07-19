<template>
  <div class="container">
    <footer class="container__footer">
      <iframe id="twitter-widget-0" scrolling="no" allowtransparency="true" allowfullscreen="true" class="twitter-follow-button twitter-follow-button-rendered" style="position: static; visibility: visible; width: 109px; height: 20px" title="Twitter Follow Button" src="https://platform.twitter.com/widgets/follow_button.06c6ee58c3810956b7509218508c7b56.en.html#dnt=true&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=wtsrz4&amp;show_count=false&amp;show_screen_name=true&amp;size=m&amp;time=1626637781241" data-screen-name="wtsrz4" frameborder="0"></iframe>
      <iframe id="github-follow-button-0" scrolling="0" width="170" height="20" title="GitHub" src="https://ghbtns.com/github-btn.html?user=vt92i&type=follow&count=true" frameborder="0"></iframe>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.container__footer {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.container__footer iframe {
  margin-left: 1.25rem;
}
</style>