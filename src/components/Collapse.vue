<template>
  <div class="wrap-collabsible">
    <input :id="id" class="toggle" type="checkbox">
    <label :for="id" class="lbl-toggle">
      <slot name="title">More Info</slot>
    </label>
    <div class="collapsible-content">
      <div class="content-inner">
        <slot name="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  data() {
    return {
      isOpen: false,
      id: null
    }
  },
  mounted() {
    this.id = this._uid
  }
}
</script>

<style scoped>
.wrap-collabsible {
  /*margin-bottom: 1.2rem;*/
  text-align: left;
}

label {
  text-align: left;

}

input[type='checkbox'] {
  display: none;
}

.lbl-toggle {
  display: block;
  text-align: left;
  padding: 1rem;
  background: rgb(246, 248, 250);
  cursor: pointer;
  border-radius: 7px;
  transition: all 0.25s ease-out;
}

.lbl-toggle:hover {
  color: rgb(0, 0, 238);
}

.lbl-toggle::before {
  content: ' ';
  display: inline-block;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);

  transition: transform .2s ease-out;
}

.toggle:checked + .lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 100vh;
  /*margin-top: 1rem;*/
}

.collapsible-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
  margin-bottom: 1rem;

}

.collapsible-content .content-inner {
  border: 1px solid rgb(0, 0, 238);
  border-radius: 7px;
  padding: 1rem;
}

</style>