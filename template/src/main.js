import Vue from 'vue'
import VueRouter from 'vue-router'

import configRouter from './scripts/router'
import { date } from './scripts/filter'

import app from './views/app.vue'

require('es6-promise').polyfill()

Vue.filter('date', date)

Vue.use(VueRouter)

var router = new VueRouter()

configRouter(router)

router.start(app, "app")