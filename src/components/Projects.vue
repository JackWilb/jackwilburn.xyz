<template>
  <div class="projects">
    <div class="text">
      <h2>My Current Projects</h2>
      <ProjectCard title="Multinet" description="A multivariate network visualization toolbox that allows researchers to use state of the art visualization tools to interact with their data." github="https://github.com/multinet-app" link="https://multinet.app/"/>
      <ProjectCard title="Neuromodulation Registry" description="A registry for DBS and TMS neuro-surgical data. Allows researchers to interact with neuromodulation data to generate and test hypotheses." link="https://neuromodulationregistry.org"/>
      <ProjectCard title="AQ&U" description="A central location for Utah air quality sensor data. This site and the associated sensor stations track air quality and relay that information to researchers." github="https://github.com/aqandu" link="https://www.aqandu.org/"/>
      <br/>
      <br/>
      <br/>
      <h2>My Past Projects</h2>
      <ProjectCard title="Multinet" description="A multivariate network visualization toolbox that allows researchers to use state of the art visualization tools to interact with their data."/>
      <ProjectCard title="Neuromodulation Registry" description="A registry for DBS and TMS neuro-surgical data. Allows researchers to interact with neuromodulation data to generate and test hypotheses."/>
      <ProjectCard title="AQ&U" description="A central location for Utah air quality sensor data. This site and the associated sensor stations track air quality and relay that information to researchers."/>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'


export default {
  name: 'Projects',
  props: {
  },
  components: {
    ProjectCard
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

h2 {
  margin: 0;
  font-size: 2.5em;
}

p {
  font-size: 1.5em;
}
</style>
