<template lang='pug'>
.detail
  .container detail
  button(@click='handleClick') back
</template>

<script>
export default {
  mounted() {},

  methods: {
    handleClick() {
      this.$router.go(-1)
    },
  },
}
</script>

<style>
</style>
