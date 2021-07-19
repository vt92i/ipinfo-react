<template lang="pug">
main.container__content(v-if="Object.keys(data).length == 0")
  transition(appear-active-class="animate__animated animate__fadeIn", appear)
    section.container__section
      h5.container__message Fetching data in progress.

main.container__content(v-else-if="data.error_message")
  transition(appear-active-class="animate__animated animate__fadeIn", appear)
    section.container__section
      h5.container__message Oops, there was a problem during the request. Please try again by clicking button below.
      transition(appear-active-class="animate__animated animate__fadeIn delay", appear)
        button.button-primary(@click="fetchData") Try Again

main.container__content(v-else)
  transition(appear-active-class="animate__animated animate__fadeIn", appear)
    section.container__section
      h5.container__ip Your IP is {{ data.query }}
      img.container__country(:src="'https://flagcdn.com/' + data.countryCode.toLowerCase() + '.svg'", width="48", :alt="data.country")
      transition(appear-active-class="animate__animated animate__fadeIn delay", appear)
        IPDetails(:data="data")
</template>

<script>
import IPDetails from "../components/IPDetails.vue";

export default {
  name: "Home",
  components: { IPDetails },
  data: function () {
    return {
      data: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        this.data = [];
        const response = await fetch("https://rizze-api-server.herokuapp.com/json");
        const data = await response.json();
        this.data = data;
        for (let i = 0; i < Object.keys(this.data).length; i++) {
          if (!this.data[Object.keys(this.data)[i]]) {
            this.data[Object.keys(this.data)[i]] = "N/A";
          }
        }
      } catch (error) {
        this.data = {
          error_message: error,
        };
      }
    },
  },
  created: function () {
    document.title = "Home | ipinfo";
    this.fetchData();
  },
};
</script>

<style lang="stylus" scoped>
.delay
  animation-delay: 0.3s

.container__section
  display: flex
  flex-direction: column
  align-items: center

  .container__country
    border-radius: 4px
</style>