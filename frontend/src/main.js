// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueP5 from 'vue-p5'
import MarqueeText from 'vue-marquee-text-component'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import vmodal from 'vue-js-modal'
Vue.use(vmodal)
Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

var keycode = require('keycode');
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 91 || e.keyCode == 17) {
        e.preventDefault()
    }
})
