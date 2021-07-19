<template lang="pug">
table.container__table
  tr.container__table_row
    th.container__table_head Continent
    td.container__table_data {{ data.continent }}

  tr.container__table_row
    th.container__table_head Country
    td.container__table_data {{ data.country }}

  br
  tr.container__table_row
    th.container__table_head Region
    td.container__table_data {{ data.regionName }}

  tr.container__table_row
    th.container__table_head City
    td.container__table_data {{ data.city }}

  tr.container__table_row
    th.container__table_head ZIP Code
    td.container__table_data {{ data.zip }}

  br
  tr.container__table_row
    th.container__table_head Latitude
    td.container__table_data {{ data.lat }}

  tr.container__table_row
    th.container__table_head Longitude
    td.container__table_data {{ data.lon }}

  br
  tr.container__table_row
    th.container__table_head Timezone
    td.container__table_data {{ data.timezone }}

  br
  tr.container__table_row
    th.container__table_head Internet Service Provider
    td.container__table_data {{ data.isp }}

  tr.container__table_row
    th.container__table_head Organization
    td.container__table_data {{ data.org }}

  tr.container__table_row
    th.container__table_head ASN
    td.container__table_data {{ data.as }}

  br
  tr.container__table_row
    th.container__table_head Using Proxy
    td.container__table_data {{ data.proxy }}

  tr.container__table_row
    th.container__table_head Using Mobile Data
    td.container__table_data {{ data.mobile }}
</template>

<script>
export default {
  name: "IPDetails",
  props: {
    data: Object,
  },
};
</script>

<style lang="stylus" scoped>
.container__table
  cursor: default

  .container__table_row
    .container__table_head, .container__table_data
      border-bottom-width: 2.5px

    .container__table_data
      transition: 200ms

    .container__table_data:hover
      font-size: 2rem
</style>