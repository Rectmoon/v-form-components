<template lang='pug'>
  div.detail
    button(@click="handleClick") back
</template>

<script>
export default {
  mounted() {},

  methods: {
    handleClick() {
      alert();
      this.$router.go(-1);
      // this.$router.push("/a");
    }
  }
};
</script>

<style>
</style>
