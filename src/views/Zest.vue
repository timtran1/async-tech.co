<template>
  <main>
    <NavBar/>
    <div class="wrapper p-4 mt-5">

      <h1 class="pt-4 pb-4">Zest</h1>
      <h2>Website building for everyone</h2>
      <p class="pb-5">Zest is a drag-and-drop website builder, designed with ease of use and productivity in mind.
        Zest offers a simple and intuitive way to edit your website, while maintaining a rich feature set that is ready for your
        evolving needs.</p>


      <h3 class="mt-5 mb-3"><b>Drag & drop, resizing elements</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/zest-dragdrop.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Rich text editor</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/zest-text.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Image gallery with uploads and stock photos</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/zest-gallery.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Styling elements</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/zest-style.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Animation settings</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/zest-animation.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Event trigger settings</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/zest-events.png`)">
      </div>


    </div>
    <Footer/>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "Zest",
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>
h1 {
  color: rgb(66, 184, 131);
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