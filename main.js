import Vue from 'vue'
import App from "./App";

const vue = new Vue({
    el: '#app',
    render: h => h(App)
});

vue.$mount('#app');