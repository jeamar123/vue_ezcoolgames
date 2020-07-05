import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import VueSweetalert2 from 'vue-sweetalert2';
import VueMoment from 'vue-moment';
import VCalendar from 'v-calendar';
// import _ from 'lodash';

import 'sweetalert2/dist/sweetalert2.min.css';

import $ from 'jquery'; 

import App from './App.vue';
import router from './router';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(vClickOutside);
Vue.use(VueSweetalert2,options);
Vue.use(VueMoment);
Vue.use(VCalendar);
Vue.config.productionTip = false;

// const $ = require('jquery');
window.$ = $; 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
