<template>
  <div class="wrap-collabsible">
    <input id="collapsible" class="toggle" type="checkbox">
    <label for="collapsible" class="lbl-toggle">
      <slot name="title">More Info</slot>
    </label>
    <div class="collapsible-content">
      <div class="content-inner">
        <p>
          <slot name="content">
            QUnit is by calling one of the object that are embedded in JavaScript, and faster JavaScript program could
            also used with
            its elegant, well documented, and functional programming using JS, HTML pages Modernizr is a popular
            browsers without
            plug-ins. Test-Driven Development.
          </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  data() {
    return {
      isOpen: false
    }
  },
}
</script>

<style scoped>
.wrap-collabsible {
  /*margin-bottom: 1.2rem;*/
  text-align: left;
}

label {
  text-align: left;
  margin-bottom: 1rem;
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

.collapsible-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 100vh;
}

.collapsible-content .content-inner {
  border: 1px solid rgb(0, 0, 238);
  border-radius: 7px;
  padding: 1rem;
}

</style>