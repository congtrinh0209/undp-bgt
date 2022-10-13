import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'en': {
        welcomeMsg1: 'Monitoring and evaluation system for climate change adaptation activities',
        welcomeMsg2: 'Ministry of Transport',
    },
    'vi': {
        welcomeMsg1: 'HỆ THỐNG GIÁM SÁT VÀ ĐÁNH GIÁ THÍCH ỨNG BIẾN ĐỔI KHÍ HẬU',
        welcomeMsg2: 'BỘ GIAO THÔNG VẬN TẢI',
    }
}

const i18n = new VueI18n({
    locale: 'vi', // set locale
    fallbackLocale: 'vi', // set fallback locale
    messages, // set locale messages
})

export default i18n
