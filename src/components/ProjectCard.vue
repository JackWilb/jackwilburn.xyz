<template>
  <div class="card">
    <div class="text">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a v-if=github :href=github><img src="../assets/GitHub-Mark-120px-plus.png"></a>
      <a v-if=link :href=link><img src="../assets/_ionicons_svg_ios-link.svg"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    github: String,
    link: String
  }
}
</script>

<style scoped>
.card {
  display:inline-grid;
  margin: 2%;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 25%;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  min-width: 300px;
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

a {
  display: inline;
  margin-left: 10px;
  margin-right: 10px;
}

img {
  width: 30px;
  height: 30px;
}
</style>
