<template>
  <div id="app">
    <Biography />
    <Projects />
    <Resume />
  </div>
</template>

<script>
import Biography from './components/Biography.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';

export default {
  name: 'App',
  components: {
    Biography,
    Projects,
    Resume,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  background-image: linear-gradient(180deg, #84fab0 0%, #8fd3f4 100%);
}
</style>
