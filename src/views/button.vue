<template lang='pug'>
  .page
    v-button(type="primary")
      span Click me    

    v-button(type="success", :disabled="true")
      span Click me    
       
    v-button(type="warning")
      span Click me    
      
    v-button(type="danger")
      span Click me   

    v-button(:disabled="true")
      span Click me  
</template>

<script>
import VButton from "../components/button/button";

export default {
  name: "VButtonPage",

  components: { VButton }
};
</script>

<style>
</style>
