<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/dynamicComponent">Dynamic component</router-link> |
      <router-link to="/reservation">Reservation component</router-link> |
      <router-link to="/lazyLoadComponent">Lazy load component</router-link> |
      <router-link to="/namespacedComponents"
        >Namespaced components</router-link
      >
      | <router-link to="/about">Dashboard</router-link> |
      <router-link to="/steps">Steps</router-link>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
