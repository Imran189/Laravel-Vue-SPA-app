require('./bootstrap');

import {createApp} from 'vue';
import Toaster from "@incuca/vue3-toaster";
import App from "./components/App.vue";
import Header from './components/Header.vue';
import router from './router';
import store from './store/index.js';

//Vue.component('app-header', require('./components/Header.vue').default);

var toasterConfig={
    position:"top-right",
    duration:1500,
    type:'success',
    dismissible:true,    
}
let auth = localStorage.getItem("auth");

if(auth){
    store.dispatch('authUser').then(()=>{
        createApp(Header).use(Toaster,toasterConfig).use(store).use(router).mount("#header");
    });
}else{
    createApp(Header).use(Toaster,toasterConfig).use(store).use(router).mount("#header");
}
createApp(App).use(Toaster,toasterConfig).use(store).use(router).mount("#app");



 


// const app = new Vue({
//     el: '#app',
// });
