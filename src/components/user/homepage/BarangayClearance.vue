<template>
  <v-app>
    <v-flex justify-center>
      <v-content>
        <div id="app">
          <NavBar />
          <v-card max-width="900" class="col-sm-7 border mx-auto" color="white darken-3" light>
            <br /> <br/>  
            <h1 class="text-center">Barangay Clearance</h1>
            <p class="text-center font-italic headline">Office of the Punong Barangay</p>
            <h2 class="text-center">Local Government Code of 1991</h2>
            <div class="flex-grow-1"></div>
            <br />
            <v-card-text>
              <br/>
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
                  <v-text-field v-model="citizenship" label="Citizenship" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="age" type="number" label="Age" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="sex" label="Sex" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="status" label="Civil Status" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="address" label="Address/Street" filled></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <ModalBarangay
                :name="name"
                :status="status"
                :citizenship="citizenship"
                :age="age"
                :sex="sex"
                :address="address"
              />
            </v-card-actions>
          </v-card>
          <Footer />
        </div>
      </v-content>
    </v-flex>
  </v-app>
</template>
<script>
import NavBar from "../../modules/NavBar.vue";
import Footer from "../../modules/Footer.vue";
import ModalBarangay from "./ModalBarangay.vue";
export default {
  components: {
    NavBar,
    Footer,
    ModalBarangay
  },
  data: function() {
    return {
      name:{
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: ""
      },
      citizenship: "",
      age: "",
      sex: "",
      status: "",
      address: ""
    };
  }
};
</script>
