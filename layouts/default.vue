<template>
  <div class="flex flex-col min-h-screen justify-between bg-gray-400">

    <!-- Toolbar -->
    <div class="w-full flex justify-between items-center p-6 bg-primary shadow">
      <nuxt-link to="/" class="link">
        Inicio
      </nuxt-link>
      <nuxt-link to="/about" class="link">
        Acerca de
      </nuxt-link>
    </div>

    <!-- Content -->
    <div class="container flex justify-center items-center mx-auto">
      <nuxt />
    </div>

    <!-- Footer -->
    <logo class="h-5 sm:h-8 mb-8 w-full" />
  </div>
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
</style>
