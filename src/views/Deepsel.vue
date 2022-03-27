<template>
  <main>
    <NavBar/>
    <div class="wrapper p-4 mt-5">

      <h1 class="pt-4 pb-4">Deepsel</h1>
      <h2>E-commerce platform for growth</h2>
      <p class="pb-5">Deepsel is a ecommerce platform for future-concious business owners, with enterprise-grade
        features supporting complex business operations and ease of extension. The platform offers end-to-end management of core e-commerce
        operation from marketing, website management, to payments and shipping. Deepsel is built to be
        easily customized and adapt to the
        evolving
        unique needs of each business in the modern era. </p>

      <h3 class="mt-5 mb-3"><b>Home screen</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-home.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Theme selection</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-theme.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Orders list</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-orders.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Order management</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-order.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Products list</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-products.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Product management</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-product.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Promotion settings</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-promo.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Coupon settings</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-coupon.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Send mass mailing</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-mail.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>Customer management</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-customer.png`)">
      </div>

      <h3 class="mt-5 mb-3"><b>User settings</b></h3>
      <div class="img-card w-100 mb-4 mt-2">
        <img class="img" :src="require(`@/assets/img/ecom-settings.png`)">
      </div>

    </div>
    <Footer/>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "Deepsel",
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>
h1 {
  color: rgb(235, 47, 91);
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