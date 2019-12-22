<template>
  <div class="landing">
    <h1>Jack Wilburn</h1>
    <p>Full Stack Developer, Linux Enthusiast, Web Designer</p>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing {
  text-align: center;
  vertical-align: middle;
  height: 100vh;
  width: 100vw;
}

h1 {
  font-size: 8em;
}

p {
  font-size: 1em;
}
</style>
