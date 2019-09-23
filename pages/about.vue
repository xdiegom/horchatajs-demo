<template>
  <div class="flex flex-col items-center text-center p-5 w-full">
    <div class="text-2xl font-medium tracking-wide uppercase mb-4">
      Demo
    </div>
    <div>
      Are you <b>Nuxt</b>?
    </div>
    <div class="text-sm font-thin italic">
      Introducción a Nuxt.js
    </div>
    <div class="text-xs mt-20">
      Por <b>Diego Melgar</b>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Acerca de',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Acerca de la demostración'
        }
      ]
    };
  }
};
</script>

<style>
</style>