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
      <ProjectCard title="Loan Outcome Prediction" description="Used client data to predict outcomes for each step of the loan process from first call to underwriting and funding."/>
      <ProjectCard title="Meme Generator" description="Developed a django application that took user input and applied the input as text on top of traditional memes." github="https://github.com/JackWilb/DBProject"/>
      <ProjectCard title="Wiki Comment Classifier" description="A machine learning model, using Kaggle data, that predicts whether or not a comment on Wikipedia is suitable for the platform." github="https://github.com/JackWilb/Toxic-Comment-Classifier"/>
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

<style scoped>
.projects {
  display:table;
  text-align: center;
  height: 100vh;
  width: 100%;
}

h2 {
  margin: 0;
  font-size: 2.5em;
}

p {
  font-size: 1.5em;
}
</style>
