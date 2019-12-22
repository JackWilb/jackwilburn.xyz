<template>
  <div class="card">
    <div class="text">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display:inline-block;
  margin: 2%;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 100%;
  width: 25%;
  background-color: white;
  border-radius: 15px;
  text-align: center;
}

h3 {
  margin: 0;
  margin-top: 10%;
  font-size: 2em;
}

p {
  margin: 0;
  padding: 5%;
  font-size: 1em;
}
</style>
