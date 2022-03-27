<template>
  <div
      @click="$router.history.push(href)"
      class="wrap img-card m-2 p-4 d-flex flex-column align-items-center"
      :style="{'background-image': `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${require('@/assets/img/'+img)})`,
        'background-size': 'cover',
      'background-repeat':'no-repeat',
'background-position': 'center center'}"
  >

    <div class="d-flex flex-column info w-100 p-2">
      <h3 class=" m-0 m-2">{{ title }}</h3>
      <p class="m-0 m-2">{{ text }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    img: String,
    text: String,
    href: String,
    color: String,
  },
  computed: {
    imgs() {
      return this.img.split(",");
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 2rem;
  color: white;
}

.info {
  max-width: 300px;
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
}

.wrap {
  /*background-color: rgb(246, 248, 250);*/
  width: 41%;
  height: 145px;
}

img {
  width: 100%;
  height: auto;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}

.img-card {
  border: 1px solid rgba(26, 92, 255, 0.15);
  /*box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));*/
  border-radius: 20px;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
}


.img {
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  max-width: 350px;

}


.img-card:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  transform: translate(0, 5px);
}
</style>