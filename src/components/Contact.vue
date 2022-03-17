<template>
      <div id="contact" class="contact w-100 pt-5 pb-5" style="background-color: #2c3e50">
          <h2 class="text-white">Tell us about your project</h2>

          <div class="w-100 d-flex justify-content-center pb-5">
            <vs-card>
              <template #text>
                <form class="p-5" name="contact" method="POST" data-netlify="true">
                  <div class="d-flex justify-content-center pb-2">

                    <div class="d-flex flex-column align-items-start">
                      <b>Your name</b>
                      <vs-input name="name" class="mt-1" required/>
                    </div>

                    <div class="d-flex flex-column align-items-start ml-2">
                      <b>Email</b>
                      <vs-input name="email" type="email" class="mt-1" required/>
                    </div>

                    <div class="d-flex flex-column align-items-start ml-2">
                      <b>Budget</b>
                      <vs-select class="mt-1" v-model="budget" name="budget">
                        <vs-option label="$0 - $1,000" value="1k">
                          $0 - $1,000
                        </vs-option>
                        <vs-option label="$1,000 - $5,000" value="1k-5k">
                          $1,000 - $5,000
                        </vs-option>
                        <vs-option label="$5,000 - $25,000" value="5k-25k">
                          $5,000 - $25,000
                        </vs-option>
                        <vs-option label="$25,000 - $100,000" value="25k-100k">
                          $25,000 - $100,000
                        </vs-option>
                        <vs-option label="$100,000+" value="100k">
                          $100,000+
                        </vs-option>
                      </vs-select>
                    </div>


                  </div>
                  <div class="d-flex flex-column align-items-start pb-2">
                    <b>Message</b>
                    <textarea
                        name="message"
                        style="border-radius: 20px; padding:5px; background-color: rgb(244, 247, 248);    border: 2px solid transparent;color: rgb(44, 62, 80)"
                        class="w-100 mt-1" rows="10"></textarea>
                  </div>

                  <div class="d-flex justify-content-center pb-2">
                    <vs-button type="submit"  block>
                   <i class="bx bxs-paper-plane mr-1"></i>
                      Send</vs-button>
                  </div>

                </form>
              </template>
            </vs-card>

          </div>

        </div>
</template>

<script>
export default {
  name: "Contact",
  data () {
    return {
      budget: ''
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      console.log('submit')
    }
  }
}
</script>

<style>
#contact .vs-card {
    border: 1px solid rgb(224, 224, 224);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 20px 0px;
    cursor: pointer;
    max-width: none;
}
</style>