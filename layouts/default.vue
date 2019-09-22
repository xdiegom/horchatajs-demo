<template>
  <div class="flex flex-col min-h-screen justify-between bg-gray-100">

    <!-- Toolbar -->
    <toolbar />

    <!-- Content -->
    <div class="container flex justify-center items-center mx-auto">
      <nuxt />
    </div>

    <!-- Footer -->
    <div class="flex w-full bg-gray-600 justify-center py-3 mx-auto items-center">
      <logo class="h-4 sm:h-6" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Toolbar from '~/components/Toolbar.vue';

export default {
  components: {
    Logo,
    Toolbar
  }
};
</script>
<style>
</style>
