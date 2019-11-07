import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "@/plugins/axios";

Vue.config.productionTip = false;
Vue.use(axios)
new Vue({
    router,
    vuetify,
    axios,
    Router,
    render: h => h(App)
}).$mount("#app");