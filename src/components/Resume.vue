<template>
  <div class="resume">
    <div class="left">
      <h2>Jack Wilburn</h2>
      <img id="headshot" src="../assets/JackWilburnHeadshot.jpg" alt="Headshot">
    </div>
    <div class="right">
      <!-- Jobs -->
      <div class="resume-card">
        <h2>Professional Experience</h2>
        <h3>Software Developer</h3>
        <h4>Scientific Computing and Imaging Insitute, University of Utah, Salt Lake City</h4>
        <ul>
            <li>Data mining, machine learning and web stack development with graph databases.
            <li>Work with faculty and students in designing and developing client-server applications in support of research projects.
            <li>Mentor students on software development best practices such as testing, CI/CD, and coding habits.
            <li>Independently develop user interfaces, APIs, and server components with state-of-the-art web frontend technologies like HTML5, SCSS, Vue, React, Typescript, D3.js, Vega, chart.js and back end technologies such as Flask, ArangoDB, PostgreSQL, MongoDB, Redis, and Elasticsearch.
            <li>Create and maintain build, testing, and deployment systems with Git, Github, Slack, Docker, AWS, Circle-CI, webpack, npm and many others.
            <li>Develop high quality and well documented code.
            <li>Aid in the specification of software requirements in coordination with faculty or team leads. Be responsible for a software package. Interface with collaboration partners. Mentor other Software Engineers.</li>
        </ul>
      
        <h3>Data Scientist</h3>
        <h4>Emperitas, Salt Lake City</h4>
        <ul>
            <li>Productionize nosql OrientDB server with 10+ million Ethereum transactions and 20000+ known users as an example of KYC/AML approach for Blockchain Training Alliance and FreeRan.ge bank.
            <li>Build, deploy, and maintain machine learning models for Veterans First bank to predict loan outcomes.
            <li>Build, deploy, and maintain CLV/ Journey Map models for clients and update their databases with pertinent information.
            <li>Scrape publicly available data using rvest (R) and beautiful soup (Python) to develop strategies for clients and internal processes.
            <li>Interface with APIs to reduce internal costs.
            <li>Implemented web scraper to download 2,800+ crypto white papers for a 90x speed improvement.</li>
        </ul>
      </div>

       <!-- Education -->
      <div class="resume-card">
        <h2>Education</h2>
        <h3>Bachelor of Science: Mathematics</h3>
        <h4>Westminster College, Salt Lake City</h4>
        <ul>
            <li>Engaged in math, data, and computer science classes to develop data manipulation, data visualization and coding skills. NCAA D2 soccer player.</li>
        </ul>
      </div>

      <!-- Articles -->
      <div class="resume-card">
        <h2>Articles</h2>
        <h3>TODO: REGISTRY PAPER TITLE</h3>
        <h4>TODO: JOURNAL NAME</h4>
        <ul>
            <li>Productionized website design that allowed for the storage and retrieval of deep brain stimulation (DBS) data.
            <li>Co-wrote and edited the final manuscript.</li>
        </ul>
      </div>

      <!-- Presentations -->
      <div class="resume-card">
        <h2>Presentations</h2>
        <h3>How To De-anonymize 20,000 Ethereum Users, The Easy Way</h3>
        <h4>Big Mountain Data and Dev, Eccles Theater, Salt Lake City</h4>
        <ul>
            <li>Used data from public sources to tie user account information to the anonymous blockchain as a proof of concept</li>
        </ul>
      </div>

      <!-- Miscellaneous -->
      <!-- <h2>Miscellaneous</h2>
      <h3>Software Developer</h3>
      <h4>Scientific Computing and Imaging Insitute, University of Utah, Salt Lake City</h4>
      <ul>
          <li>Responsibilities</li>
      </ul> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  props: {
  }
}
</script>

<style scoped>
.resume {
  display:table;
  text-align: center;
  height: 100vh;
  width: 100%;
}

.left {
  text-align: center;
  width: 40%;
  display:inline-grid;
  border-radius: 15px;
  text-align: center;
  min-width: 300px;
}

.right {
  text-align: left;
  width: 40%;
  display:inline-grid;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 15px;
  min-width: 300px;
}

#headshot {
  margin-left: 20%;
  padding: 0;
  width: 60%;
  border-radius: 400px;
}

h1 {
  margin: 0;
  margin-bottom: 50px;
  font-size: 3em;
}

.resume-card {
  background-color: white;
  border-radius: 15px;
  margin: 10px;
  padding: 15px;
}

h2 {
  margin-top: 0;
}

h3 {
  margin-bottom: 0;
}

h4 {
  margin-top: 0;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.5em;
}

ul, li {
  margin-top: 0px;
}
</style>
