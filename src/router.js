import Vue from "vue";
import Router from "vue-router";
import Home from "./components/user/home/Home.vue";
import BusinessClearance from "./components/user/forms/BusinessClearance.vue";
import BarangayClearance from "./components/user/forms/BarangayClearance.vue";
import BarangayIndigency from "./components/user/forms/BarangayIndigency.vue";
import BarangayID from "./components/user/forms/BarangayID.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {
                name: "Home",
                component: Home
            }
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        },
        {
            path: "/business-clearance",
            name: "business-clearance",
            component: BusinessClearance
        },
        {
            path: "/barangay-id",
            name: "barangay-id",
            component: BarangayID
        },
        {
            path: "/barangay-clearance",
            name: "barangay-clearance",
            component: BarangayClearance
        },
        {
            path: "/barangay-indigency",
            name: "barangay-indigency",
            component: BarangayIndigency
        }
    ]
});