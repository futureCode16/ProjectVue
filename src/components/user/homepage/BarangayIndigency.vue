<template>
  <v-app>
    <v-flex justify-center>
      <v-content>
        <div id="app">
          <NavBar />
          <v-card max-width="900" class="col-sm-7 border mx-auto" color="white darken-3" light>
            <br />
            <br />
            <h1 class="text-center">Barangay Indigency</h1>
            <h2 class="text-center">Office of the Punong Barangay</h2>
            <h2 class="text-center">Required under RA 7160 Sec. 152</h2>
            <div class="flex-grow-1"></div>
            <br />
            <v-card-text>
              <br />
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="name.firstName" label="First Name" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="name.middleName" label="Middle Name" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="name.lastName" label="Last Name" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="name.suffix" label="Suffix" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="age" label="Age" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="sex" label="Sex" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="address" label="Address/Street" filled></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <ModalIndigency :name="name" :address="address" :age="age" :sex="sex" />
            </v-card-actions>
          </v-card>
          <Footer />
        </div>
      </v-content>
    </v-flex>
  </v-app>
</template>
<script>
import ModalIndigency from "./ModalIndigency.vue";
import NavBar from "../../modules/NavBar.vue";
import Footer from "../../modules/Footer.vue";
import { isNull } from "util";
export default {
  components: {
    NavBar,
    Footer,
    ModalIndigency
  },
  data() {
    return {
      name: {
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: ""
      },
      age: "",
      sex: "",
      address: ""
    };
  }
};
</script>
