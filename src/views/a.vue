<template lang='pug'>
  .page
    div.container 11

    button(@click="$router.push('/detail/1')") detail
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.container {
  height: 98vh;
}
</style>
