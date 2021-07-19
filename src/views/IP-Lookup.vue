<template lang="pug">
transition(appear-active-class="animate__animated animate__fadeIn", appear)
  main.container__content
    h5 IP Lookup Page
    .container__header
      input.ip-address(type="text", placeholder="Lookup any IPv4 or IPv6 Address", maxlength="46", v-model="ip")
      button.button-primary(@click="fetchData(ip)") Lookup
    transition(enter-active-class="animate__animated animate__fadeIn", leave-active-class="animate__animated animate__fadeOut")
      .container__details(v-if="show")
        h5.container__ip {{ data.query }}
        img.container__country(:src="'https://flagcdn.com/' + data.countryCode.toLowerCase() + '.svg'", width="48", :alt="data.country")
        IPDetails(:data="data")
</template>

<script>
import IPDetails from "../components/IPDetails.vue";
import validator from "validator";

export default {
  components: { IPDetails },
  data: function () {
    return {
      ip: [],
      data: [],
      show: false,
    };
  },
  methods: {
    async fetchData(ip) {
      try {
        if (ip.length != 0) {
          if (validator.isIP(ip)) {
            (this.ip = []), (this.show = false);
            const response = await fetch(`https://rizze-api-server.herokuapp.com/json/${ip}`);
            const data = await response.json();
            this.data = data;
            if (this.data.status != "fail") {
              for (let i = 0; i < Object.keys(this.data).length; i++) {
                if (!this.data[Object.keys(this.data)[i]]) {
                  this.data[Object.keys(this.data)[i]] = "N/A";
                }
              }
              this.show = true;
            }
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
    document.title = "IP Lookup | ipinfo";
  },
};
</script>

<style lang="stylus" scoped>
base()
  height: 32px
  margin: 0
  margin-right: 4px

flex_center(direction)
  display: flex
  flex-direction: direction
  align-items: center

.container__content
  flex_center(column)

  .container__header
    flex_center(row)
    justify-content: center

    .ip-address
      base()
      font-size: 16px
      text-align: center
      width: 412px

    .button-primary
      base()
      line-height: 0
      transition: all 0.1s

    .button-primary:focus
      background-color: #33c3f0
      border-color: #33c3f0

  .container__details
    flex_center(column)

    .container__country
      border-radius: 10%
</style>