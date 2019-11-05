<template >
  <v-container  fluid>
   
    <!-- <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Express</span>
        <span class="font-weight-light">_docx</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="#">
        <span class="mr-2">Beta Version</span>
      </v-btn>
    </v-app-bar> -->

    <v-card  fluid flat id="head">
      <v-card-text>
        <span>Express</span>
      </v-card-text>
    </v-card>
    <!-- <br>
    <v-item-group>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title text-center">FORM CATEGORIES</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link">
        <v-row>
          <v-col>
            <div class="float-right"><v-card class="white--text text-center headline font-weight-light">
            <v-img
            height="300"
            width="930"
            src= "https://i.pinimg.com/originals/d1/43/9a/d1439a2280071aebb2205a9785dac718.jpg"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            
          >REQUIREMENTS: <pre>{{ item.requirement }}</pre></v-img>
              </v-card>
            </div>
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                :color="active ? 'light-blue darken-1' : '#ffffff'"
                class="d-flex align-center rounded-card"
                light
                height="300"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    v-if="active ? 'Barangay Indigency' : '#ffffff'"
                    class="display-1 flex-grow-1 text-center font-weight-light"
                  >{{ item.title}}</div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-list-item>
    </v-item-group> -->
    <!-- <Footer/> -->
  </v-container>
</template>
<style scoped>
  body, html{
    height: 100%;
    margin: 0;
  }
  #head{
    background-image: url("~@/assets/headerbackground.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
</style>
<script>
import Footer from "../../modules/Footer.vue";
export default {
  components: {
    Footer
  },
  data: () => ({
    color: {
      header: "#0D47A1",
      text: "white"
    },
    items: [
      {
        title: "Barangay Clearance",
        requirement:"1. Application Form\n2. Application Fee (Usually varies around less than P100)\n3. Recent Community Tax Certificate or Cedula.",
        icon: "mdi-home",
        link: "/barangay-clearance"
      },
      {
        title: "Barangay Indigency",
        requirement:"1. Application Form\n2. Application Fee (Usually varies around less than P100)\n3. Recent Community Tax Certificate or Cedula",
        icon: "mdi-home",
        link: "/barangay-indigency"
      },
      {
        title: "Business Clearance",
        requirement:"1. Latest Community Tax Certificate (Cedula)\n2. DTI Business Name Registration\n3. Barangay Business Permit Fee.",
        icon: "mdi-home",
        link: "/business-clearance"
      }
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