<template>
  <div class="home">

    <NavBar/>

    <img id="banner-img" src="../assets/img/banner.jpg" alt="Async">

    <div class="banner pl-2 pr-2">
      <!--        <h1>MAKING SOFTWARE A REALITY.</h1>-->
      <h1 class="mt-0 mb-3">Making Software A Reality</h1>
      <h2 class="mt-3">Discover possibilities with technology and uncover your future.</h2>
      <div class="hire-btn d-flex justify-content-center" style="margin: auto">
        <vs-button block square size="xl" @click="contact"><b style="font-size: 24px;">Hire us!</b></vs-button>
      </div>
    </div>

    <main class="d-flex flex-column align-items-center pb-5">
      <div class="wrapper">

        <div class="clients">
          <h2>Our clients</h2>
          <div class="client-list w-100 d-flex flex-wrap justify-content-center align-items-center pt-5 pb-5">
            <div style="cursor: pointer" class="clients-arrows">
              <i class='bx bx-chevron-left bx-md'></i>
            </div>

            <div class="client pt-3 pb-3">
              <a href="https://www.icg.ch/" target="_blank">
                <img src="/icg.png" alt="" width="200">
              </a>
            </div>

            <div class="client pt-3 pb-3">
              <a href="https://nativeops.ch/" target="_blank">
                <img src="/nativeops.svg" alt="" width="100">
              </a>
            </div>

            <div class="client pt-3 pb-3">
              <a href="https://www.shaw-systems.co.uk/" target="_blank">
                <img src="/shawsystems.png" alt="" width="350">
              </a>
            </div>

            <div class="ml-5 clients-arrows" style="cursor: pointer">
              <i class='bx bx-chevron-right bx-md'></i>
            </div>

          </div>
        </div>

        <div class="services w-100">
          <h2>Services</h2>
          <div class="w-100 d-flex flex-wrap justify-content-center">
            <ServiceCard title="Startup MVP development" img="mvp.png"/>
            <ServiceCard title="Custom software development" img="custom.png"/>
            <ServiceCard title="E-commerce development" img="ecom.png"/>
            <ServiceCard title="Mobile app development" img="app2.png"/>
            <ServiceCard title="ERP development" img="erp.jpg"/>
            <ServiceCard title="DevOps and cloud orchestration" img="devops.png"/>
          </div>
        </div>

        <div class="why-us">
          <h2>Why us</h2>

          <div class="d-flex justify-content-between mb-5 flex-wrap">
            <WhyUSCard img="code.jpg"/>
            <div class="text-left p-5 why-text" style="font-size: 20px">
              <h3>Technical expertise</h3>
              <div>We draw from the best tech talents, utilizing leading-edge technology as a
                standard. Our developers are industry veterans with high standards of quality and professionalism.
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between mt-5 pt-5 mb-5 flex-wrap flex-row-reverse">
            <WhyUSCard img="personal.jpg"/>
            <div class="text-left p-5 why-text" style="font-size: 20px">
              <h3>Personal approach</h3>
              <div>We apply a customer oriented approach, with a goal of advancing your business interest. We take care
                to peel away assumptions, and deliver impactful solutions that accurately solve your business
                problem.
              </div>
            </div>

          </div>

          <div class="d-flex justify-content-between mt-5 pt-5 mb-5 flex-wrap">
            <WhyUSCard img="relationship.jpg"/>
            <div class="text-left p-5 why-text" style="font-size: 20px">
              <h3>Long-term relationship</h3>
              <div>We aim to build long-term working relationships with all of our clients. We believe that by doing so,
                our mutual knowledge and understanding can compound into remarkable results.
              </div>
            </div>
          </div>
        </div>

        <div id="projects" class="projects w-100 pt-5 pb-5">
          <h2>Our projects</h2>
          <div class="d-flex flex-wrap justify-content-center">
            <ProjectCard
                img="ecom.jpg"
                title="Deepsel"
                text="E-commerce platform for growth"
                href="/projects/deepsel-ecommerce"
                color="rgb(235, 47, 91)"
            />
            <ProjectCard
                img="team-work.jpg"
                title="Cruise"
                text="Contract and project management made easy"
                href="/projects/cruise"
                color="rgb(25, 91, 255)"
            />
            <ProjectCard
                img="build.jpg"
                title="Zest"
                text="Build websites without coding"
                href="/projects/zest"
                color="rgb(66, 184, 131)"
            />
            <ProjectCard
                img="sharknews.jpg"
                title="SharkNews"
                text="Data-driven news app"
                href="/projects/sharknews"
                color="rgb(82, 96, 255)"
            />
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
import ProjectCard from "@/components/ProjectCard";

export default {
  name: 'Home',
  mixins: [scroll],
  components: {
    ProjectCard,
    ServiceCard,
    WhyUSCard,
    NavBar,
    Process,
    Contact,
    Footer
  },
  data() {
    return {
      budget: ''
    }
  }
}
</script>

<style scoped>

.client {
  margin-left: 3rem;
}

@media (max-width: 768px) {
  .clients-arrows {
    display: none;
  }

  .client {
    margin-left: 0;
  }

  .client-list {
    flex-direction: column;
  }
}


#banner-img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.banner h1 {
  /*font-size: 5rem;*/
  color: white;
  font-weight: bold;
  text-align: center;
}

.banner h2 {
  /*font-size: 2rem;*/
  color: white;
  font-weight: bold;
  text-align: center;
}

.banner {
  height: 100vh;
  /*padding-top: 32vh;*/
  background: rgba(0, 0, 0, 0.5);
}

h2 {
  font-size: 3rem;
  font-weight: bold;
  /*color: rgb(25, 91, 255);*/
}

.why-us .vs-card__text {
  display: none;
}


.a-card:hover {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 0px;
  transform: translate(0, 5px);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}


/*big screen*/
@media (min-width: 700px) {
  .hire-btn {
    width: 25vw !important;
  }

  .banner {
    padding-top: 32vh;
  }

  .banner h1 {
    font-size: 5rem;
  }

  .banner h2 {
    font-size: 2rem;
  }

  .why-text {
    width: 50% !important;
  }
}

/*small screen*/
@media (max-width: 700px) {
  .banner {
    padding-top: 17vh;
  }

  .banner h1 {
    font-size: 4rem;
  }

  .banner h2 {
    font-size: 1.5rem;
  }

  .timeline i {
    display: none;
  }
}

</style>