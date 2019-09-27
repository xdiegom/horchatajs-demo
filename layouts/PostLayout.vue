<template>
  <div class="flex flex-col min-h-screen bg-gray-100">

    <!-- Toolbar -->
    <toolbar />

    <!-- Content -->
    <div class="flex flex-col flex-1 p-4 items-center md:p-8">
      <transition name="page">
        <nuxt />
      </transition>

      <!-- Post Pagination -->
      <div class="flex w-full justify-start mt-4 underline uppercase text-xs tracking-whide lg:w-4/5">
        <nuxt-link :to="{ name: 'index' }">
          Atrás
        </nuxt-link>
      </div>
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
  name: 'PostLayout',
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
  }
};
</script>
<style>
</style>
