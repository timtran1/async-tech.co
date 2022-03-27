<template>
  <main>
    <NavBar/>
    <div class="wrapper p-4 mt-5">

      <h1 class="pt-4 pb-4">SharkNews</h1>
      <h2>Offbeat news app with a data-driven approach</h2>
      <p class="pb-5">SharkNews is a modern news app that combines traditional news aggreators functionality with smart
        content suggestion, through the use of machine learning. SharkNews also includes native social features to boost engagement and
        discussion, further enhancing the news reading experience.</p>


      <h3 class="mt-5 mb-5 text-center"><b>News feed</b></h3>
      <div class="d-flex flex-wrap justify-content-around">
        <img class="img" :src="require(`@/assets/img/sn-feed3.png`)">
        <img class="img" :src="require(`@/assets/img/sn-feed1.png`)">
        <img class="img" :src="require(`@/assets/img/sn-feed2.png`)">
      </div>


      <h3 class="mt-5 mb-5 text-center"><b>Posting and comments</b></h3>
      <div class="d-flex flex-wrap justify-content-around">
        <img class="img" :src="require(`@/assets/img/sn-new.png`)">
        <img class="img" :src="require(`@/assets/img/sn-cmt.png`)">
        <img class="img" :src="require(`@/assets/img/sn-add-cmt.png`)">
      </div>


      <h3 class="mt-5 mb-5 text-center"><b>Authentication</b></h3>
      <div class="d-flex flex-wrap justify-content-around">
        <img class="img" :src="require(`@/assets/img/sn-auth.png`)">
        <img class="img" :src="require(`@/assets/img/sn-signup.png`)">
      </div>


      <h3 class="mt-5 mb-5 text-center"><b>Account management</b></h3>
      <div class="d-flex flex-wrap justify-content-around">
        <img class="img" :src="require(`@/assets/img/sn-liked.png`)">
        <img class="img" :src="require(`@/assets/img/sn-logout.png`)">
      </div>

      <h3 class="mt-5 mb-5 text-center"><b>Compliance</b></h3>
      <div class="d-flex flex-wrap justify-content-around">
        <img class="img" :src="require(`@/assets/img/sn-info.png`)">
        <img class="img" :src="require(`@/assets/img/sn-contact.png`)">
        <img class="img" :src="require(`@/assets/img/sn-privacy.png`)">
      </div>


    </div>
    <Footer/>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import '../assets/css/All.css'

export default {
  name: "SharkNews",
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>
h1 {
  color: rgb(82, 96, 255);
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


.img {
  max-width: 300px;
  border: 12px solid #2c3e50;
  border-radius: 40px;
  margin-bottom: 1rem;
}
</style>