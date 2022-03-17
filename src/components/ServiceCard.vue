<template>
  <vs-card class="m-2">
    <template #title>
      <h3>{{ $props.title }}</h3>
    </template>
    <template #img>
      <img :src="require(`@/assets/img/${$props.img}`)" height="240" width="350" :alt="img">
    </template>
    <template #text>
      <p>
      </p>
    </template>
  </vs-card>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    title: {
      type: String,
      default: "Pot with a plant"
    },
    img: {
      type: String,
      default: "foto6.png"
    },
  },
}
</script>

<style>
.services .vs-card__img {
  background-color: rgb(46, 8, 92) !important;
}
</style>