<template>
  <v-app>
     <v-flex justify-center>
    <v-content>
      <div id="app">
        <NavBar/>
        <v-card max-width="900" class="col-sm-7 border mx-auto" color="white darken-3" light>
            <br>
            <h1 class="text-center">Business Clearance</h1>
            <h2 class="text-center">Office of the Punong Barangay</h2>
            <h2 class="text-center">Required under RA 7160 Sec. 125</h2>
            <div class="flex-grow-1"></div>
            <br>
          <v-card-text>
            <v-row>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="name" label="Name" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="kindOfBusiness" label="Kind Of Business" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="dateStarted" label="Date Started" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="businessAddress" label="Business Address" filled></v-text-field>
            </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <Modal :kindOfBusiness="kindOfBusiness" :name="name" :occupation="occupation" :businessAddress="businessAddress" :contactNumber="contactNumber" :dateStarted="dateStarted"/>
          </v-card-actions>
        </v-card>     
    <Footer/>
      </div>
    </v-content>
     </v-flex>
  </v-app>
</template>
<script>
import Modal from "./Modal.vue";
import NavBar from "../../modules/NavBar.vue";
import Footer from "../../modules/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
    Modal
  },
  data: function() {
    return {
      kindOfBusiness: "",
      name: "",
      occupation: "",
      businessAddress: "",
      contactNumber: "",
      dateStarted: ""
      //image: require("@/assets/logo.jfif")
      // validations: {
      //   kindOfBusiness: {required},
      // name: {required},
      // occupation: {required},
      // businessAddress: {required},
      // contactNumber: {required},
      // dateStarted: {required}
      // }
    }
  }
};


</script>
