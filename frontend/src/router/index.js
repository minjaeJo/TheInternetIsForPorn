import Vue from 'vue'
import Router from 'vue-router'
import SearchView from '@/views/SearchView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'SearchView',
        component: SearchView
        }
    ]
})
