<template>
  <div class="flex flex-col w-full items-center">
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
      </template>
      <template v-else>
        <div class="flex w-full justify-center items-center uppercase font-medium py-20 tracking-wide text-2xl sm:text-4xl">
          Publicación no existe
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  layout: 'PostLayout',
  computed: {
    ...mapState({
      posts: state => state.posts
    }),
    post() {
      return this.posts.find(p => parseInt(this.$route.params.id) === p.id);
    }
  }
};
</script>

<style>
</style>