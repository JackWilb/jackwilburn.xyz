<template>
  <div class="landing relative overflow-hidden xl:max-w-screen-2xl xl:mx-auto">
    <div class="mx-auto">
      <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:h-screen lg:pb-28 xl:pb-32">
        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="../assets/logo.svg"
                  >
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <button
                    id="main-menu"
                    type="button"
                    class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                    aria-haspopup="true"
                    @click="open = true;"
                  >
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: menu -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <a
                href="#"
                class="font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                Biography
              </a>

              <a
                href="#projects"
                class="font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                Projects
              </a>

              <a
                href="#resume"
                class="font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                Resume
              </a>

              <a
                href="#contact"
                class="font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div
            v-if="open"
            class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden dark:bg-black"
          >
            <div class="px-2 sm:px-4 pt-4 flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto sm:h-10"
                  src="../assets/logo.svg"
                  alt=""
                >
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                  @click="open = false;"
                >
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: x -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div
                class="px-2 pt-2 pb-3 space-y-1"
                role="none"
              >
                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50"
                  role="menuitem"
                >
                  Biography
                </a>
                <a
                  href="#projects"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50"
                  role="menuitem"
                >
                  Projects
                </a>

                <a
                  href="#resume"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50"
                  role="menuitem"
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50"
                  role="menuitem"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        <main class="mt-10 mx-auto max-w-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 xl:ml-24">
          <div class="sm:text-center lg:text-left ">
            <h1 class="text-4xl tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl">
              Jack Wilburn
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-md sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I'm a software developer based in Salt Lake City, Utah.
              I'm currently making data visualizations for the
              <a
                class="text-green-500 underline"
                href="https://vdl.sci.utah.edu"
              >
                Visualization Design Lab</a> at the University of Utah.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#contact"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-screen">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="../assets/dunes-edit-upscale.webp"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',

  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
</style>
