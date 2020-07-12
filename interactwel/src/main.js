import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import userPlugin from "./components/common/UserPlugin.js"
import StarRating from 'vue-star-rating'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import store from "./store";
import App from './App.vue'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('star-rating', StarRating);

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(userPlugin);

new Vue({
    store,
    router,
  render: h => h(App),
}).$mount('#app')
