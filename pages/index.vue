<template>
  <div class="mx-4 w-full rounded-lg shadow sm:w-2/3 sm:px-0 md:max-w-lg">
    <div class="bg-primary rounded-lg">
      <div class="px-3 text-4xl font-thin tracking-wide md:text-6xl">
        Publicaciones
      </div>
      <template v-for="(post, index) in posts">
        <div
          :class="{'rounded-b-lg': index === (posts.length - 1)}"
          :key="index"
          class="flex flex-col bg-white w-full">
          <nuxt-link
            :class="{'border-b-2': post.id < posts.length}"
            :to="{ name: 'posts-id', params: { id: post.id } }"
            class="text-xs font-bold p-4 hover:text-nuxt-light md:text-base">
            {{ post.title }}
          </nuxt-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import { mapState } from 'vuex';

export default {
  head() {
    return {
      title: 'Publicaciones'
    };
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    let posts = response.slice(0, 4);

    return {
      posts
    };
  }
};
</script>

<style>
</style>
