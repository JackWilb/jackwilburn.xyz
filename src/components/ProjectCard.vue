<template>
  <div class="mt-4 p-4 shadow-lg border-2 border-gray-50 dark:border-gray-800 rounded-none md:max-w-sm md:mx-auto">
    <div class="font-bold text-xl mb-2">
      {{ title }}
    </div>
    <p class="text-gray-500 text-base">
      {{ description }}
    </p>
    <div class="mt-6 grid grid-cols-4 place-items-center">
      <a />
      <a
        :href="github"
        :class="muted(github)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </a>
      <a
        :href="link"
        :class="muted(link)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </a>
      <a />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
  },

  methods: {
    muted(value) {
      return value === null ? 'text-gray-200 dark:text-gray-800' : 'dark:text-gray-500';
    },
  },
};
</script>

<style scoped>
</style>
