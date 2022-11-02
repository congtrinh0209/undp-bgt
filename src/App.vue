<template>
  <v-app v-resize="onResize">
    <confirm-dialog></confirm-dialog>
    <router-view></router-view>
  </v-app>
</template>

<script>
import i18n from '@/plugins/i18n'
import VueConfirmDialog from './views/ConfirmDialog.vue'
export default {
  name: 'App',

  components: {
    'confirm-dialog': VueConfirmDialog
  },

  data: () => ({
    //
  }),
  created () {
    try {
      let i18nLocal = localStorage.getItem('i18nLocal')
      i18n.locale = i18nLocal
      vm.$store.commit('SET_ACTIVECHANGELANG', !vm.activeChangeLang)
    } catch (error) {
    }
    if (this.$cookies.get('Token')) {
    } else {
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
  },
  methods: {
    onResize: function () {
      let breakpointName = this.$vuetify.breakpoint.name
      this.$store.commit('SET_BREAKPOINTNAME', breakpointName)
    }
  }
};
</script>
