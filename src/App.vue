<template>
  <div
    id="app"
    class="text-center bg-white dark:bg-black"
  >
    <LandingPage />
    <ProjectPage />
    <ResumePage />
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import LandingPage from './components/LandingPage.vue';
import ProjectPage from './components/ProjectPage.vue';
import ResumePage from './components/ResumePage.vue';
import ContactForm from './components/ContactForm.vue';
</script>

<style>
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
