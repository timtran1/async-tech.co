<template>
  <footer class="d-flex justify-content-center flex-wrap pt-4">
    <div class="w-100 theme pb-4 pt-4 d-flex justify-content-start" style="font-size: 2rem; max-width: 1200px;"><b><a
        href="/">Async</a></b></div>
    <div class="w-100 pt-4 pb-4 d-flex" style="  max-width: 1200px;">
      <div class="w-50 d-flex flex-column align-items-start">
        <div class="mb-2"><b>Async</b> is a brand by Deepsel Inc.</div>
        <div class="mb-2"><i class='bx bxs-home mr-1'></i>2261 Market Street #4441</div>
        <div class="mb-2"><i class='bx bxs-buildings mr-1'></i>San Francisco CA, 94114</div>
        <div class="mb-2"><i class='bx bxs-envelope mr-1'></i><a
            href="mailto:tim@async-tech.com">contact@async-tech.com</a>
        </div>
        <div class="mb-2"><i class='bx bxs-phone mr-1'></i>+1 (415) 655 1009</div>
      </div>

      <div class="w-50 d-flex flex-column align-items-start">
        <div class="mb-2"><i class='bx bx-chevron-right'></i><a href="/"><b>Home</b></a></div>
        <div class="mb-2"><i class='bx bx-chevron-right'></i><a href="#process"><b>How we work</b></a></div>
        <div class="mb-2"><i class='bx bx-chevron-right'></i>
          <router-link to="faq"><b>FAQ</b></router-link>
        </div>
        <div class="mb-2" @click="contact"><i class='bx bx-chevron-right'></i><a href="#"><b>Contact us</b></a></div>
      </div>
    </div>

    <div class="w-100 text-left pb-3 pt-3" style="  max-width: 1200px; border-top: 1px solid #cccc">
      2022 Deepsel Inc., All rights reserved
    </div>

  </footer>
</template>

<script>
import scroll from "@/components/scroll";

export default {
  name: "Footer",
  mixins: [scroll],
}
</script>

<style scoped>
footer {
  background-color: #E7EBF0;
  text-align: center;

}

.theme {
  color: rgb(25, 91, 255);
}

a {
  text-decoration: none;
}
</style>