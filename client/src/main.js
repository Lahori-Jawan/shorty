import Vue from 'vue';
import App from './App.vue';

import store from './store';
import router from './router';
import Dropdown from './components/Dropdown';
import NewUrlButton from '@/components/NewUrlButton';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;
Vue.component('drop-down', Dropdown);
Vue.component('NewUrlButton', NewUrlButton);

store.dispatch('GetUser').then((error) => {
  if (error) console.log('err @main GetUser', error);
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
