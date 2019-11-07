<template>
  <v-app>
    <v-flex justify-center>
      <v-content>
        <div id="app">
          <NavBar />
          <v-card max-width="900" class="col-sm-7 border mx-auto" color="white darken-3" light>
            <br />
            <h1 class="text-center">Barangay Indigency</h1>
            <h2 class="text-center">Office of the Punong Barangay</h2>
            <h2 class="text-center">Required under RA 7160 Sec. 152</h2>
            <div class="flex-grow-1"></div>
<<<<<<< HEAD
            <br>
          <v-card-text>
            <v-row>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="name" label="Name" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="age" label="Age" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="sex" label="Sex" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="address" label="Address" filled></v-text-field>
            </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <ModalIndigency :name="name" :address="address" :age="age" :sex="sex"/>
          </v-card-actions>
        </v-card>  
    <Footer/>
      </div>
    </v-content>
     </v-flex>
  </v-app>
</template>
<script>
import ModalIndigency from "./ModalIndigency.vue";
=======
            <br />
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="name" label="Name" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="age" label="Age" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="sex" label="Sex" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="address" label="Address" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="dateIssued" label="Date Issued" filled></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="personInCharged"
                    label="Person in Charged Signature"
                    filled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="white" fab large @click="submit">Preview</v-btn>
            </v-card-actions>
          </v-card>
          <Footer />
        </div>
      </v-content>
    </v-flex>
  </v-app>
</template>
<script>
// import axios from "axios";
>>>>>>> a53f62838eba324484e8d989b2cfcc2ab8c81ded
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
      name: "",
      age: "",
      sex: "",
<<<<<<< HEAD
      address: ""
=======
      address: "",
      dateIssued: "",
      personInCharged: ""
    };
  },
  methods: {
    submit() {
      this.$axios
        .post("http://localhost:8080/barangay-indigency", {
          name: this.name,
          age: this.age,
          sex: this.sex,
          address: this.address
        })
        .then(function(response) {
          currentObj.output = response.data;
        })
        .catch(function(error) {
          currentObj.output = error;
        });
>>>>>>> a53f62838eba324484e8d989b2cfcc2ab8c81ded
    }
  }
};
</script>
