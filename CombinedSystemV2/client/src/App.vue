<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
.padTop {
  padding-top: 3.2em;
}

.padBottom {
  padding-bottom: 2em;
}

.error {
  color: red;
}

.success {
  color: green;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515151;
  min-height: 100vh;
  height: auto;
  background-color: #EBD77D;
}
</style>
