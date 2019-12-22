<template>
  <div id="app">
    <Landing/>
    <Projects/>
  </div>
</template>

<script>
import Landing from './components/Landing.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'app',
  components: {
    Landing,
    Projects
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
</style>
