<template>
  <div class="mt-4 p-4 shadow-lg border-2 border-gray-50 dark:border-gray-800 rounded-md md:max-w-sm md:mx-auto bg-white dark:bg-gray-900">
    <div class="font-bold text-xl mb-2 dark:text-gray-300">
      {{ title }}
    </div>
    <p class="text-gray-500 text-base">
      {{ description }}
    </p>
    <div class="mt-6 grid grid-cols-4 place-items-center">
      <div />
      <a
        :href="github"
        :class="muted(github)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        GitHub
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
        App
      </a>
      <div />
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

withDefaults(defineProps<{
  title: string,
  description: string,
  github?: string,
  link?: string,
}>(), {
  github: undefined,
  link: undefined,
});

function muted(value: string | undefined) {
  return value === undefined ? 'text-gray-200 dark:text-gray-800' : 'text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-300';
}
</script>

<style scoped>
</style>
