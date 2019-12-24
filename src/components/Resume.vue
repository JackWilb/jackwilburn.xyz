<template>
  <div class="resume">
    <div class="left">
      <h2>Jack Wilburn</h2>
      <img id="headshot" src="../assets/JackWilburnHeadshot.jpg" alt="Headshot">
    </div>
    <div class="right">
      <!-- Jobs -->
      <h2>Professional Experience</h2>
      <h3>Software Developer</h3>
      <h4>Scientific Computing and Imaging Insitute, University of Utah, Salt Lake City</h4>
      <ul>
          <li>Responsibilities</li>
      </ul>

      <h3>Data Scientist</h3>
      <h4>Emperitas, Salt Lake City</h4>
      <ul>
          <li>Responsibilities</li>
      </ul>

      <!-- Education -->
      <h2>Education</h2>
      <h3>Bachelor of Science: Mathematics</h3>
      <h4>Westminster College, Salt Lake City</h4>
      <ul>
          <li>Responsibilities</li>
      </ul>

      <!-- Articles -->
      <h2>Articles</h2>
      <h3>Software Developer</h3>
      <h4>Scientific Computing and Imaging Insitute, University of Utah, Salt Lake City</h4>
      <ul>
          <li>Responsibilities</li>
      </ul>

      <!-- Presentations -->
      <h2>Presentations</h2>
      <h3>How To De-anonymize 20,000 Ethereum Users, The Easy Way</h3>
      <h4>Big Mountain Data and Dev, Eccles Theater, Salt Lake City</h4>
      <ul>
          <li>Responsibilities</li>
      </ul>

      <!-- Miscellaneous -->
      <h2>Miscellaneous</h2>
      <h3>Software Developer</h3>
      <h4>Scientific Computing and Imaging Insitute, University of Utah, Salt Lake City</h4>
      <ul>
          <li>Responsibilities</li>
      </ul>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  display:table;
  height: 100vh;
  width: 100%;
}

.left {
  padding: 4%;
  display: table-cell;
  text-align: center;
  width: 25%;
}

.right {
  padding: 10%;
  display: table-cell;
  text-align: left;
  width: 50%;
}

#headshot {
  padding: 0;
  width: 100%;
  border-radius: 400px;
}

h1 {
  margin: 0;
  margin-bottom: 50px;
  font-size: 3em;
}

p {
  font-size: 1.5em;
}
</style>
