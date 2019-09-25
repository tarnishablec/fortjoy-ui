import "./pwa"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import _ from 'lodash'

import '@/style/index.scss'

Vue.config.productionTip = false;

Vue.prototype.$loda = _;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
