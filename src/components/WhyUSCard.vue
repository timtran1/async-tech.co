<template>
  <vs-card type="5">
    <template #title>
<!--      <h3>Pot with a plant</h3>-->
    </template>
    <template #img>
      <img :src="require(`@/assets/img/${$props.img}`)">
    </template>
    <template #text>
      <p>
      </p>
    </template>
  </vs-card>
</template>

<script>
export default {
  name: "WhyUsCard",
  props: {

    img: {
      type: String,
      default: "foto6.png"
    },
  },
}
</script>

<style>
.why-us .vs-card {
  max-width: none !important;
}

.why-us .vs-card__img img {
width: 450px !important;
}
</style>