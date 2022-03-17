<template>
  <div class="d-flex justify-content-between navbar w-100" :class="{dark: scrolled}">
    <div style="cursor:pointer;" class="pl-4 pr-4 d-flex align-items-center" :class="{'pt-4': !scrolled}">
      <div style="color: white; font-size: 2rem; "><a href="/"><b>Async</b></a></div>
    </div>
    <div class="pl-4 pr-4" :class="{'pt-4': !scrolled}">
      <div class="menu d-flex w-100 justify-content-end align-items-center text-left">
        <div class="ml-5"><a href="#">Home</a></div>
        <div class="ml-5"><a href="#process">How we work</a></div>
        <div class="ml-5">
          <router-link to="/faq">FAQ</router-link>
        </div>
        <div class="ml-5">
          <vs-button size="xl" :dark="!scrolled"><a href="#contact"><b>Contact us</b></a></vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scroll = Math.abs(document.body.getBoundingClientRect().top)

      if (scroll > window.innerHeight) {
        // console.log('scrolled')
        if (!this.scrolled) this.scrolled = true
      } else {
        // console.log('unscrolled')
        if (this.scrolled) this.scrolled = false
      }
    });
  },
}

</script>

<style scoped>

a {
  color: white;
  text-decoration: none;
}

/*.dark a {*/
/*  color: inherit;*/
/*}*/

.navbar {
  position: fixed;
  top: 0;
  z-index: 999;
}

.dark {
background: rgba(0, 0, 0, 0.5);
}
</style>