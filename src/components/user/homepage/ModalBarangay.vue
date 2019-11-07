<template>
  <div>
    <v-dialog
      width="950"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="white" fab large>Preview</v-btn>
      </template>
      <v-card max-width="900" class="col-sm-7 border mx-auto">
        <br><center>
            <img
              height="200"
              width="200"
              :src="require('@/assets/logo.jpg')"
                />
            </center>
            <h1 class="text-center">Barangay Clearance</h1>
            <h2 class="text-center font-italic headline">Office of the Punong Barangay</h2>
            <h2 class="text-center">{{address}} City</h2>
            <h2 class="text-center headline">Local Government Code of 1991</h2>
            <br><br> <br> <br>

            <h2 class="headline mx-12">
                TO WHOM IT MAY CONCERN:<br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that {{name}}, legal age, {{status}}, Filipino Citizen is a bonifide resident of {{address}}, he/she is known to me with a Good Moral character, law abiding citizen in the community. He/She has NO CRIMINAL RECORD found in our Barangay Records.<br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This certification is issued in accordance to the implementation of the provision of the NEW LOCAL GOVERNMENT CODE  of 1991 and for whatever legal purpose it may serve best.
            </h2>
            <br><br> <br> <br>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" fab large>Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
    props: {
        citizenship: String,
        name: String,
        age: String,
        status: String,
        sex: String,
        address: String
    }
}
</script>
