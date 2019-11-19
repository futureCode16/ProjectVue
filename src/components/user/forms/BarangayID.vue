<template>
  <v-app>
     <v-flex justify-center>
    <v-content>
      <div id="app">
        <NavBar/>
        <v-card max-width="900" class="col-sm-7 border mx-auto" color="white darken-3" light>
            <br>
            <h1 class="text-center">Barangay ID</h1>
            <h2 class="text-center">Office of the Punong Barangay</h2>
            <h2 class="text-center">Required under RA 7160 Sec. 125 Par.(c)</h2>
            <div class="flex-grow-1"></div>
            <br>
            <v-row>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="name" label="Name" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="sex" label="Sex" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="address" label="Address" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="dateOfBirth" label="Date of Birth" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="dateIssued" label="Date Issued" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="personInCharged" label="Person in Charged Signature" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-card-title>Upload 2x2 ID picture here</v-card-title>
              <img class="uploading-image" />
              <input type="file" accept="image/jpeg">
            </v-col>
            </v-row>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="white" fab large @click="isEditing = !isEditing">Preview</v-btn>
          </v-card-actions>
        </v-card>     
    <Footer/>
      </div>
    </v-content>
     </v-flex>
  </v-app>
</template>
<script>
import NavBar from "../../modules/NavBar.vue";
import Footer from "../../modules/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  },
  data: function() {
    return {
      name: this.name,
      sex: this.sex,
      address: this.address,
      dateOfBirth: this.dateOfBirth,
      dateIssued: this.dateIssued,
      personInCharged: this.personInCharged
    }
  }
};


</script>
