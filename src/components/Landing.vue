<template>
  <div class="landing">
    <div class="text">
      <h1>Jack Wilburn</h1>
      <p>Full Stack Developer, Linux Enthusiast, Web Designer</p>
      <a :href="`mailto:${email}`">Email me!</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
  },
  data() {
    const email = 'jackwilburn@tutanota.com'
    return {email}
  }
}
</script>

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
  font-size: 500%;
}

p {
  font-size: 1.5em;
}

a,
a:hover {
  color: inherit;
}

</style>
