<template>
  <div class="flex flex-col min-h-screen justify-between bg-gray-100">

    <!-- Toolbar -->
    <toolbar />

    <!-- Content -->
    <div class="mt-20 container flex justify-center items-center mx-auto">
      <transition name="page">
        <nuxt />
      </transition>
    </div>

    <!-- Footer -->
    <div class="flex w-full justify-center w-1/6 mb-4 rounded-lg py-3 items-center">
      <logo class="h-6 sm:h-10" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Toolbar from '~/components/Toolbar.vue';

export default {
  head() {
    return {
      titleTemplate: '%s - Demo HorchataJS Septiembre 2019',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Demostración sobre charla: Are you Nuxt? Introducción a Nuxt.js'
        }
      ]
    };
  },
  components: {
    Logo,
    Toolbar
  },
  data() {
    return { show: false };
  },
  mounted() {
    this.show = true;
  }
};
</script>
<style>
</style>
