import Vue from 'vue'
import Router from 'vue-router'
import Scene1 from '@/views/Scene1.vue'
import Scene2 from '@/views/Scene2.vue'
import Scene3 from '@/views/Scene3'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Scene1',
            component: Scene1
        },
        {
            path: '/scene2/:query',
            name: 'Scene2',
            component: Scene2
        },
        {
            path: '/scene3',
            name: 'Scene3',
            component: Scene3
        }
    ]
})
