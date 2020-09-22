<template lang='pug'>
#app 
  keep-alive
    router-view.view(v-if='$route.meta.isKeepAlive')

  router-view.view(v-if='!$route.meta.isKeepAlive')

  footer
    nav 
      router-link(v-for='r in routes', :key='r.name', :to='r.path') {{ r.name }}
</template>
 
<script>
export default {
  name: 'App',

  data() {
    return {
      routes: [
        {
          path: '/a',
          name: 'a',
        },

        {
          path: '/b',
          name: 'b',
        },

        {
          path: '/c',
          name: 'c',
        },

        {
          path: '/d',
          name: 'd',
        },
      ],
    }
  },
}
</script>

<style lang='scss'>
@import './scss/common.scss';

body {
  height: 100%;
}

.view {
  height: 110vh;
}

footer {
  height: 44px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;

  nav {
    height: 100%;
    display: flex;

    a {
      flex: 1;
      line-height: 44px;
      text-align: center;
    }
  }
}
</style>
