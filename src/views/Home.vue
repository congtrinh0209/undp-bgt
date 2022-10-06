<template>
  <v-app>
    <Drawer></Drawer>
    <AppBar></AppBar>
    <v-main>
      <div class="container">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </v-main>
    
  </v-app>
</template>

<script>
import Drawer from '../containerComponents/Drawer'
import AppBar from '../containerComponents/AppBar'
import Footer from '../containerComponents/Footer'
export default {
  name: 'Home',

  components: {
    Drawer,
    AppBar,
    Footer
  },

  data: () => ({
    //
  }),
  created () {
    // let router = this.$router.history.current
    // if (router.path === '/') {
    //   this.$router.push({ path: '/login' })
    // }
  }
};
</script>
<style lang="sass">
  main.v-main
    padding-top: 54px !important
</style>
