<template>
  <div
    id="projects"
    class="projects"
  >
    <div class="text">
      <h2 class="my-10 text-3xl text-green-500">
        Current Projects
      </h2>
      <div class="md:grid md:grid-cols-3 md:px-4 max-w-7xl m-auto">
        <ProjectCard
          title="MultiNet"
          description="A multivariate network visualization toolbox that allows researchers to use state of the art visualization tools to interact with their data."
          github="https://github.com/multinet-app"
          link="https://multinet.app/"
        />
        <ProjectCard
          title="Neuromodulation Registry"
          description="A registry for DBS and TMS neuro-surgical data. Allows researchers to interact with neuromodulation data to generate and test hypotheses."
          link="https://neuromodulationregistry.org"
        />
        <ProjectCard
          title="AQ&U"
          description="A central location for Utah air quality sensor data. This site and the associated sensor stations track air quality and relay that information to researchers."
          github="https://github.com/aqandu"
          link="https://www.aqandu.org/"
        />
      </div>
      <h2 class="my-10 text-3xl text-green-500">
        Past Projects
      </h2>
      <div class="md:grid md:grid-cols-3 md:px-4 max-w-7xl m-auto">
        <ProjectCard
          title="Loan Outcome Prediction"
          description="Used client data to predict outcomes for each step of the loan process from first call to underwriting and funding."
        />
        <ProjectCard
          title="Meme Generator"
          description="A python django web application that takes user input and applies the input as text on top of traditional meme templates."
          github="https://github.com/JackWilb/DBProject"
        />
        <ProjectCard
          title="Wiki Comment Classifier"
          description="A machine learning model, using Kaggle data, that predicts whether or not a Wikipedia comment is suitable for the platform."
          github="https://github.com/JackWilb/Toxic-Comment-Classifier"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
</script>

<style scoped>
</style>
