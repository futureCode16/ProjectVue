<template>
 <div id="app" class="col-sm-8 col-md-4 col-12">
   <div class="elevation-12 v-card v-sheet theme--light">
     <div>
        <label for="Username">Username</label>
     <input name="HelloWorld" type="text">

     </div> 
   </div> 
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
