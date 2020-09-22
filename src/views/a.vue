<template lang='pug'>
.page
  .container 11

  button(@click='$router.push("/detail/1")') detail
</template>

<script>
export default {}
</script>

<style lang='scss'>
.container {
  height: 98vh;
}
</style>
