<template>
  <div class="flex flex-col items-center">
    <div class="w-full lg:w-4/5">
      <template v-if="post">
        <div class="bg-white p-10 rounded-lg shadow-lg bg-white">
          <h1 class="uppercase font-medium text-xl tracking-wide mb-4 sm:text-2xl md:text-4xl ">
            {{ post.title }}
          </h1>
          <div
            v-html="post.body"
            class="tracking-wide text-justify text-sm sm:text-base" />
        </div>
        <div class="ml-1 mt-8 underline uppercase text-xs tracking-widest">
          <nuxt-link to="/"> Atrás </nuxt-link>
        </div>
      </template>
      <template v-else>
        <div class="flex w-full justify-center items-center uppercase font-medium py-20 tracking-wide text-2xl sm:text-4xl">
          Publicación no existe
        </div>
        <div class="ml-1 mt-8 underline uppercase text-xs tracking-widest">
          <nuxt-link to="/"> Atrás </nuxt-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'PostLayout',
  computed: {
    post() {
      return this.$store.state.posts.find(
        p => parseInt(this.$route.params.id) === p.id
      );
    }
  }
};
</script>

<style>
</style>