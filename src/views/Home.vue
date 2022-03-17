<template>
  <div class="home">

    <NavBar/>

    <img id="background-video" src="../assets/img/banner.jpg" alt="" class="w-100">

    <div class="banner">
      <!--        <h1>MAKING SOFTWARE A REALITY.</h1>-->
      <h1 class="mt-0 mb-3">Making Software A Reality</h1>
      <h2 class="mt-3">Discover possibilities with technology and uncover your future.</h2>
      <div class="w-25 d-flex justify-content-center" style="margin: auto">
        <vs-button block square size="xl" @click="contact"><b style="font-size: 24px;">Hire us!</b></vs-button>
      </div>
    </div>

    <main class="d-flex flex-column align-items-center pb-5">
      <div class="wrapper">

        <div class="services">
          <h2>Our services</h2>
          <div>
            <div class="w-100 d-flex flex-wrap justify-content-center">
              <ServiceCard title="Custom software development" img="custom2.png"/>
              <ServiceCard title="E-commerce development" img="ecom.png"/>
              <ServiceCard title="Mobile app development" img="app.png"/>
              <ServiceCard title="AI and Machine Learning development" img="ai.png"/>
              <ServiceCard title="Offshore software development" img="offshore.png"/>
              <ServiceCard title="DevOps and cloud orchestration services" img="devops.png"/>
            </div>
          </div>
        </div>

        <div class="why-us">
          <h2>Why us</h2>

          <div class="d-flex justify-content-between mb-5">
            <WhyUSCard img="code.jpg"/>
            <div class="text-left p-5" style="font-size: 20px">
              <h3>Technical expertise</h3>
              <div>We draw from one of the best tech talent pools in Asia, utilizing leading-edge technology as a
                standard.
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between mt-5 pt-5 mb-5">
            <div class="text-left p-5" style="font-size: 20px">
              <h3>Personal approach</h3>
              <div>We apply a customer oriented approach, with a goal of advancing your business interest. We take care
                to peel away assumptions, and deliver hard-hitting solutions that accurately solve your business
                problem.
              </div>
            </div>
            <WhyUSCard img="code.jpg"/>
          </div>

          <div class="d-flex justify-content-between mt-5 pt-5 mb-5">
            <WhyUSCard img="code.jpg"/>
            <div class="text-left p-5" style="font-size: 20px">
              <h3>Long-term relationship</h3>
              <div>We aim to build long-term working relationships with all of our clients. We believe that by doing so,
                our mutual knowledge and understanding can compound into remarkable results.
              </div>
            </div>
          </div>
        </div>

        <div id="process" class="process w-100 pt-5 pb-5">
          <h2>Software Development Process</h2>
          <Process/>
        </div>

        <Contact/>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import WhyUSCard from "@/components/WhyUSCard";
import ServiceCard from "@/components/ServiceCard";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import scroll from "@/components/scroll";
import Contact from "@/components/Contact";
import '../assets/css/Home.css'

export default {
  name: 'Home',
  mixins: [scroll],
  components: {
    ServiceCard,
    WhyUSCard,
    NavBar,
    Process,
    Contact,
    Footer
  },
  mounted() {
    if (this.$route.hash === '#contact') {
      this.contact()
    }
  },
  data() {
    return {
      budget: ''
    }
  }
}
</script>