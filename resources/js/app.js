require('./bootstrap');

import {createApp} from 'vue';
import Toaster from "@incuca/vue3-toaster";
import App from "./components/App.vue";
import Header from './components/Header.vue';
import router from './router';

//Vue.component('app-header', require('./components/Header.vue').default);

var toasterConfig={
    position:"top-right",
    duration:1500,
    type:'success',
    dismissible:true,    
}

createApp(App).use(Toaster,toasterConfig).use(router).mount("#app");
createApp(Header).use(router).mount("#header");


 


// const app = new Vue({
//     el: '#app',
// });
