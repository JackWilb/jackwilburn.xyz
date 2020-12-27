<template>
  <div
    id="app"
    class="text-center"
  >
    <Biography />
    <Projects />
    <Resume />
    <ContactForm />
  </div>
</template>

<script>
import Biography from './components/Biography.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';
import ContactForm from './components/ContactForm.vue';

export default {
  name: 'App',
  components: {
    Biography,
    Projects,
    Resume,
    ContactForm,
  },
};
</script>

<style>
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
