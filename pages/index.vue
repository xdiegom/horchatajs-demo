<template>
  <section class="container">
    <div>
      <logo />
      <div class="text-6xl font-thin tracking-wide">
        horchata-js
      </div>
      <h2 class="p-2">
        My luminous Nuxt.js project
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
