<template>
  <div>
    <NavBar/>

    <main class="main p-2 ps-5 pe-5">
      vcxv
    </main>

    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from "@/components/Footer"

export default {
  name: "Projects",
  components: {
    NavBar,
    Footer
  },
  mounted() {
    document.title = "Async Tech - Projects";
  }
}
</script>

<style scoped>

</style>