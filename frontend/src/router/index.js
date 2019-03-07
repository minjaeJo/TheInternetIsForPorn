import Vue from 'vue'
import Router from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import SearchResultView from '@/views/SearchResultView.vue'
import DetailView from '@/views/DetailView'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'SearchView',
            component: SearchView
        },
        {
            path: '/search/:query',
            name: 'SearchResultView',
            component: SearchResultView
        },
        {
            path: '/detail',
            name: 'DetailView',
            component: DetailView
        }
    ]
})
