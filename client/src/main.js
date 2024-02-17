import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import Vue from 'vue';

Vue.use(createAuth0, {
    domain: 'dev-zhc58liek0bbll7u.us.auth0.com',
    clientId: 'DXSqe3FL74J6ORpuWPqKF3qadywf7hZv',
    redirectUri: window.location.origin
  });




createApp(App).mount('#app')
