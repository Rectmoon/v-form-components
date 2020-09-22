<template lang='pug'>
  div#app   
  
    keep-alive
      router-view(v-if="$route.meta.isKeepAlive", class='view')

    router-view(v-if="!$route.meta.isKeepAlive", class='view')

    footer
      nav 
        router-link(v-for = 'r in routes', :key="r.name", :to='r.path') {{r.name}}
      
</template>
 
<script>
export default {
  name: "App",

  data() {
    return {
      routes: [
        {
          path: "/a",
          name: "a"
        },

        {
          path: "/b",
          name: "b"
        },

        {
          path: "/c",
          name: "c"
        },

        {
          path: "/d",
          name: "d"
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.view {
  position: absolute;
  width: 100%;
  top: 40px;
  left: 0;
  bottom: 44px;
  overflow-y: scroll;
}

footer {
  height: 44px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

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
