<template>
  <div class="flex flex-col min-h-screen bg-gray-100">

    <!-- Toolbar -->
    <toolbar />

    <!-- Content -->
    <div class="flex-1 p-4 md:p-8">
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
  name: 'PostLayout',
  components: {
    Logo,
    Toolbar
  }
};
</script>
<style>
</style>
