<template>
  <div class="d-flex justify-content-between navbar w-100" :class="{dark: scrolled || !home,}">
    <div style="cursor:pointer;" class="pl-4 pr-4 d-flex align-items-center" :class="{'pt-4': home && !scrolled}">
      <div style="color: white; font-size: 2rem; ">
        <router-link to="/"><b>Async</b></router-link>
      </div>
    </div>
    <div class="pl-4 pr-4" :class="{'pt-4': home && !scrolled}">
      <div class="menu d-flex w-100 justify-content-end align-items-center text-left">
        <div class="ml-5">
          <router-link to="/">Home</router-link>
        </div>
        <div class="ml-5" @click="scroll">
          <router-link to="/#projects">Projects</router-link>
        </div>
        <div class="ml-5" @click="scroll">
          <router-link to="/#process">How we work</router-link>
        </div>
        <div class="ml-5">
          <router-link to="/faq">FAQ</router-link>
        </div>
        <div class="ml-5">
          <vs-button size="xl" :dark="home && !scrolled" @click="contact">
            <b>Contact us</b>
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from "@/components/scroll";


function debounce(method, delay) {
  clearTimeout(method._tId);
  method._tId = setTimeout(method, delay);
}


export default {
  name: "NavBar",
  mixins: [scroll],
  data() {
    return {
      scrolled: false,
      home: false
    };
  },
  mounted() {
    if (this.$route.path === "/") {
      this.home = true;
      window.addEventListener('scroll', () => {
        debounce(() => {
          let scroll = Math.abs(document.body.getBoundingClientRect().top)

          if (scroll > window.innerHeight) {
            // console.log('scrolled')
            if (!this.scrolled) this.scrolled = true
          } else {
            // console.log('unscrolled')
            if (this.scrolled) this.scrolled = false
          }
        }, 200)
      });
    }
  },
}

</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.navbar {
  position: fixed;
  top: 0;
  z-index: 999;
}

.dark {
  background: rgba(0, 0, 0, 0.5);
}


.menu {
  font-size: 20px;
  font-weight: bold;
}

</style>