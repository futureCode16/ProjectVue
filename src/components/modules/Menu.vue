<template>
    <v-navigation-drawer v-model="drawer" absolute temporary style="z-index:2">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title text-center">Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>           
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
import Vue from "vue";
export default {
  data: () => ({
    items: [
      { title: "Barangay Clearance", icon: "mdi-home", link:'/barangay-clearance'},
      { title: "Barangay Indigency", icon: "mdi-home", link:'/barangay-indigency'},
      { title: "Business Clearance", icon: "mdi-home", link:'/business-clearance'},
      { title: "Home", icon: "mdi-home", link:'/home'}
    ],
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
