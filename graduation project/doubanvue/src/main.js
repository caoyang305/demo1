// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.use(Vuex)

Vue.config.productionTip = false


const store=new Vuex.Store({
	state:{
		username:'',
		taget:'',
		id:''
	},
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
