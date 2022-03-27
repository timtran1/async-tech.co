<template>
  <div>
    <NavBar/>

    <main class="main p-2 ps-5 pe-5">
      <div class="wrapper pt-5">
        <h1 class="mt-5 mb-3">FAQ</h1>

        <Collapse>
          <template v-slot:title>What is Async?</template>
          <template v-slot:content>
            Async was founded in 2019 in Hanoi - Vietnam, with a mission to tap and grow
            the next generation of software
            developers and deliver excellence in software products. Initially building custom software for ecommerce
            businesses in Vietnam, Async discovered the growing need, as well as the shortage and high costs, of
            software engineering in developed
            countries. We sought to connect these needs with the growing pool of highly
            skilled technical talents in Vietnam.
          </template>
        </Collapse>

        <Collapse>
          <template v-slot:title>Are you a US company?</template>
          <template v-slot:content>
            Yes, Async Inc. is an US corporation incorporated in Delaware. Our primary development team is
            located in
            Hanoi, Vietnam.
          </template>
        </Collapse>

        <Collapse>
          <template v-slot:title>How will I communicate with the team?</template>
          <template v-slot:content>
            We expect to have regular text and face-to-face communications throughout the project, with much
            flexibility on the platform, such as Slack, emails, Zoom, etc.
          </template>
        </Collapse>

        <Collapse>
          <template v-slot:title>What are your payment terms?</template>
          <template v-slot:content>
            When billing for a fixed priced project, billing will be divided into milestones based on project
            completion. Some projects may require a deposit.

            If billing by the hour, we invoice weekly. Payment is due within 3 business days.

            All payments are invoiced in US dollars through Stripe, a trusted US payment processor.
          </template>
        </Collapse>

        <Collapse>
          <template v-slot:title>Will you sign my NDA?</template>
          <template v-slot:content>
            We can not sign an NDA before we have an initial description of your project and a budget figure to work
            with.
            We need to know if the requirements and budget are a suitable fit to move forward, and an
            NDA
            can only
            be signed if it's a mutual agreement.
          </template>
        </Collapse>

        <Collapse>
          <template v-slot:title>Who owns the code after it's done?</template>
          <template v-slot:content>
            You do. Before we begin, we’ll send over a software development agreement in place that will assign all
            ownership of all the work and assets to you, as long as we’re paid for the services we perform.
          </template>
        </Collapse>

        <Collapse>
          <template v-slot:title>How much will my project cost?</template>
          <template v-slot:content>
            This can only be answered after the requirements collection process. After learning about the problem you're
            trying to solve, your budget, users, market, ...etc.
            we can then propose a solution that solves the problem while staying in your budget. This is
            the software consulting part of the project, and we give 2 free consulting hours per project. The result
            will be
            a proposal with a cost estimation.
          </template>
        </Collapse>

        <Collapse>
          <template v-slot:title>Will you host my project after completion?</template>
          <template v-slot:content>
            Yes, we sure can. We can manage cloud servers globally through AWS, Google Cloud etc., ask us
            about our hosting packages.
          </template>
        </Collapse>

        <Collapse>
          <template v-slot:title>Do you write apps for iPhone and Android?</template>
          <template v-slot:content>
            Yes, we do.
          </template>
        </Collapse>

        <div class="p-4"></div>
        <Contact/>
        <div class="p-4"></div>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Collapse from "@/components/Collapse";
import Contact from "@/components/Contact";


export default {
  name: "FAQ",
  components: {
    NavBar,
    Footer,
    Collapse,
    Contact
  },
  mounted() {
    document.title = "Async Tech - FAQ";
  }
}
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>