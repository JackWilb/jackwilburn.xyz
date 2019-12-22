<template>
  <div class="landing">
    <div class="text">
      <h1>Jack Wilburn</h1>
      <p>Full Stack Developer, Linux Enthusiast, Web Designer</p>
    </div>
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
  display:table;
  text-align: center;
  height: 100vh;
  width: 100%;
}

.text {
  display: table-cell;
  vertical-align: middle;
}

h1 {
  margin: 0;
  font-size: 8em;
}

p {
  font-size: 1.5em;
}
</style>
