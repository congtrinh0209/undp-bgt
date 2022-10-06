<template>
  <v-container
    id="dashboard-page"
    class="px-0 pt-0"
    fluid
    tag="section"
  >
    <v-layout class="wrap-dashboard" wrap>
      
    </v-layout>
  </v-container>
</template>

<script>
  import toastr from 'toastr'

  toastr.options = {
    'closeButton': true,
    'timeOut': '5000',
    "positionClass": "toast-top-center"
  }
  export default {
    name: 'Dashboard',
    components: {
    },
    data: () => ({
    }),
    created () {
      let vm = this
    },
    computed: {
      breakpointName () {
        return this.$store.getters.getBreakpointName
      },
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
      }
    },
    methods: {
    }
  }
</script>

<style lang="sass">
  $image-login: $public-path + '/images/bg-login.png?t=39123'
  .wrap-dashboard
    max-width: 1500px
    margin: 0 auto
    justify-content: space-around
    padding-top: 100px
  #dashboard-page
    background: url($image-login) no-repeat
    background-size: cover
    height: calc(100vh - 49px)
    width: 100%
    position: relative
  .columns-dashboard
    max-width: 320px !important
    text-align: center
    color: #fff
  .columns-dashboard-content
    padding-top: 15px
    padding-bottom: 15px
    background: rgba(0, 61, 26, 0.82)
    border-radius: 8px
  .text-title-dashboard
    font-weight: 600
    font-size: 14px
  .number-statistic
    font-weight: 700
    font-size: 36px
    color: #fff
    margin-top: 20px
    line-height: 42px
  .text-content
    font-weight: 400
    font-size: 14px
  .sub-column-2
    margin-top: 10px
    height: 230px

  @media screen and (max-width: 768px) 
    #dashboard-page
      background-repeat-y: repeat
      background-size: contain
      height: auto
      padding: 8px 0
    .wrap-dashboard
      padding-top: 50px
</style>
