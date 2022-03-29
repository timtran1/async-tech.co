<template>
  <div id="contact" class="contact pt-5 pb-5 pl-2 pr-2" style="background-color: #2c3e50">
    <h2 class="text-white">Tell us about your project</h2>

    <div class=" d-flex justify-content-center pb-5">
      <vs-card class="contact-card">
        <template #text>
          <form class="p-4" name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact">

            <div class="d-flex justify-content-center pb-2 flex-wrap">

              <div class="input-row d-flex flex-column align-items-start mr-2">
                <b>Your name</b>
                <vs-input name="name" class="mt-1" v-model="form.name" required/>
              </div>

              <div class="input-row d-flex flex-column align-items-start mr-2">
                <b>Email</b>
                <vs-input name="email" v-model="form.email" type="email" class="mt-1" required/>
              </div>

              <div class="input-row d-flex flex-column align-items-start mr-2">
                <b>Budget</b>
                <select name="budget" class="mt-1" v-model="form.budget" required>
                  <option value="1kto5k">
                    $1,000 - $5,000s
                  </option>
                  <option value="5kto25k">
                    $5,000 - $25,000
                  </option>
                  <option value="25kto100k">
                    $25,000 - $100,000
                  </option>
                  <option value="100k">
                    $100,000+
                  </option>
                </select>
              </div>


            </div>

            <div class="d-flex flex-column align-items-start pb-2">
              <b>Message</b>
              <textarea
                  name="message"
                  style="border-radius: 20px;
                  padding:5px;
                   background-color: rgb(244, 247, 248);
                   border: 2px solid transparent;
                   color: rgb(44, 62, 80)"
                  class="w-100 mt-1" rows="10"></textarea>
            </div>

            <div class="d-flex justify-content-center pb-2">
              <vs-button type="submit" block>
                <i class="bx bxs-paper-plane mr-1"></i>
                Send
              </vs-button>
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
  data() {
    return {
      form: {
        name: '',
        email: '',
        budget: '',
        message: ''
      }
    }
  },
}
</script>

<style scoped>
select {
  border: 2px solid transparent;
  background: rgb(244, 247, 248, 1);
  color: rgba(var(--vs-text), 1);
  padding: 7px 13px;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  padding-left: 10px;
  width: 200px;
  outline: none;
  border-radius: 12px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>

<style>
#contact .vs-card {
  border: 1px solid rgb(224, 224, 224);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 20px 0px;
  cursor: pointer;
  max-width: none;
}

/*small screen*/
@media (max-width: 700px) {
  .contact-card .input-row {
    width: 100% !important;
  }

  .contact-card input {
    width: 100% !important;
  }

  .contact-card .vs-input {
    width: 100% !important;
  }

  .contact-card .vs-input-parent {
    width: 100% !important;
  }

  .contact-card .vs-input-content {
    width: 100% !important;
  }

  .contact-card select {
    width: 100% !important;
  }

  .contact-card .vs-select-content {
    width: 100% !important;
    max-width: none;
  }
}

.contact-card {
  max-width: 100% !important;
}
</style>