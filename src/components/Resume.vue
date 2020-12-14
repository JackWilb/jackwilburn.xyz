<template>
  <div id="resume">
    <h2 class="mt-10 text-3xl text-green-500">
      Resume
    </h2>

    <!-- Jobs -->
    <div class="text-left p-4 max-w-4xl mx-auto mb-48">
      <h3 class="mt-4 text-xl font-bold">
        Professional Experience
      </h3>
      <h4 class="mt-2 text-lg">
        Software Developer
      </h4>
      <p class="text-sm">
        Scientific Computing and Imaging Insitute, University of Utah, Salt Lake City
      </p>
      <p class="mb-2 text-xs text-gray-500">
        Aug 2019 - Present
      </p>
      <ul class="ml-8 list-disc text-base">
        <li>
          Lead software development efforts on over $3,000,000 of grant-funded research.
        </li>
        <li>
          Work with faculty and students in designing and developing client-server applications.
        </li>
        <li>
          Mentor students on software development best practices such as testing, CI/CD, and coding habits.
        </li>
        <li>
          Independently develop user interfaces, APIs, and server components using technologies like HTML5, Vue.js, Typescript, D3.js, Flask, ArangoDB, Git, GitHub, Docker, AWS, GitHub Actions, webpack, npm, bash, and others.
        </li>
      </ul>

      <h4 class="mt-6 text-lg">
        Lead Data Scientist
      </h4>
      <p class="text-sm">
        Emperitas, Salt Lake City
      </p>
      <p class="mb-2 text-xs text-gray-500">
        May 2018 - Aug 2019
      </p>
      <ul class="ml-8 list-disc">
        <li>
          Productionized nosql OrientDB server with 10+ million Ethereum transactions and 20000+ known users as an example of KYC/AML approach.
        </li>
        <li>
          Built, deployed, and maintained machine learning models for national bank to predict loan outcomes.
        </li>
        <li>
          Built, deployed, and maintained CLV/ Journey Map models for clients and update their databases with pertinent information.
        </li>
        <li>
          Scraped publicly available data using rvest (R) and beautiful soup (Python) to develop strategies for clients and internal processes.
        </li>
      </ul>

      <!-- Education -->
      <h2 class="mt-4 text-xl font-bold">
        Education
      </h2>
      <h4 class="mt-2 text-lg">
        Bachelor of Science: Mathematics
      </h4>
      <p class="text-sm">
        Westminster College, Salt Lake City
      </p>
      <p class="mb-2 text-xs text-gray-500">
        Aug 2015 - Dec 2018
      </p>
      <ul class="ml-8 list-disc">
        <li>Engaged in math, data, and computer science classes to develop data manipulation, data visualization and coding skills. NCAA D2 soccer player.</li>
      </ul>

      <!-- Articles -->
      <h2 class="mt-4 text-xl font-bold">
        Articles
      </h2>

      <h4 class="mt-2 text-lg">
        <a
          href="http://sci.utah.edu/~vdl/papers/2020_vahc_sanguine.pdf"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline align-middle pb-1 w-4 text-green-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </a>
        Sanguine: Visual Analysis for Patient Blood Management
      </h4>
      <p class="text-sm">
        Visual Analytics In Healthcare
      </p>
      <p class="mb-2 text-xs text-gray-500">
        2020
      </p>
      <ul class="ml-8 list-disc">
        <li>
          Developed API to support patient blood management dashboard.
        </li>
        <li>
          Co-wrote and edited the final manuscript.
        </li>
      </ul>

      <h4 class="mt-6 text-lg">
        <a
          href="https://www.frontiersin.org/articles/10.3389/fninf.2020.00036/full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline align-middle pb-1 w-4 text-green-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </a>
        The International Neuromodulation Registry: An Informatics Framework Supporting Cohort Discovery and Analysis
      </h4>
      <p class="text-sm">
        Frontiers in Neuroinformatics
      </p>
      <p class="mb-2 text-xs text-gray-500">
        2020
      </p>
      <ul class="ml-8 list-disc">
        <li>
          Productionized website design that allowed for the storage and retrieval of deep brain stimulation (DBS) data.
        </li>
        <li>
          Co-wrote and edited the final manuscript.
        </li>
      </ul>

      <!-- Presentations -->
      <h2 class="mt-4 text-xl font-bold">
        Presentations
      </h2>
      <h4 class="mt-2 text-lg">
        How To De-anonymize 20,000 Ethereum Users, The Easy Way
      </h4>
      <p class="text-sm">
        Big Mountain Data and Dev, Salt Lake City
      </p>
      <p class="mb-2 text-xs text-gray-500">
        2019
      </p>
      <ul class="ml-8 list-disc">
        <li>Used data from public sources to tie user account information to the anonymous blockchain as a KYC proof of concept</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
};
</script>

<style scoped>
</style>
