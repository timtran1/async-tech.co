<template>
  <main>
    <NavBar/>
    <div class="wrapper p-4 mt-5">

      <h1 class="pt-4 pb-4">cruise</h1>
      <h2>Software contracting made easy</h2>
      <p class="pb-5">Cruise is a contract management platform for software service providers. Cruise enables easy
        requirement collection with integrated messaging and easy tracking of all files and
        message artifacts relating to client's requirements. Payment and milestone management offers a headache-free
        experience
        from contract signing, milestone adjustments, to acceptance and payment.</p>


      <h3 class="mt-5 mb-3"><b>Messaging</b></h3>
      <div class="img-card mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/cr-msg.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Requirements definition</b></h3>
      <div class="img-card mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/cr-req.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Milestones and payment</b></h3>
      <div class="img-card mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/cr-milestone.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Events tracking</b></h3>
      <div class="img-card mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/cr-events.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Login screen</b></h3>
      <div class="img-card mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/cr-login.png`)">
      </div>


    </div>
    <Footer/>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "Cruise",
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>
h1 {
  color: var(--color-primary);
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
}

h2 {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 1.25rem;
}

main {
  margin: 0;
  padding: 0;
  width: 100vw;
  /*background-color: rgba(26, 92, 255, 0.15);*/
  text-align: left;
}

.img-card {
  border: 1px solid rgba(26, 92, 255, 0.15);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  border-radius: 20px;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
}

.img-card:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  transform: translate(0, 5px);
}

.img {
  max-width: 100%;
}
</style>