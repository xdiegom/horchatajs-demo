<template>
  <div class="flex flex-col min-h-screen bg-gray-100">

    <!-- Toolbar -->
    <toolbar />

    <!-- Content -->
    <div class="flex flex-col flex-1 p-4 items-center md:p-8">
      <transition name="page">
        <nuxt v-if="show" />
      </transition>

      <!-- Post Pagination -->
      <div
        v-if="post"
        :class="{'justify-between': currentPostId > 1, 'justify-start': currentPostId === postsCount, 'justify-end': currentPostId === 1}"
        class="flex w-full mt-4 underline uppercase text-xs tracking-whide lg:w-4/5">
        <nuxt-link
          :to="{ name: 'posts-id', params: { id: prevPostId } }"
          v-if="currentPostId > 1">
          Anterior
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'posts-id', params: { id: nextPostId } }"
          v-if="currentPostId < postsCount">
          Siguiente
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
import { mapState } from 'vuex';

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
  },
  data() {
    return { show: false };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    }),
    post() {
      return this.posts.find(p => parseInt(this.$route.params.id) === p.id);
    },
    postsCount() {
      return this.posts.length;
    },
    currentPostId() {
      return parseInt(this.$route.params.id);
    },
    nextPostId() {
      return parseInt(this.$route.params.id) + 1;
    },
    prevPostId() {
      return parseInt(this.$route.params.id) - 1;
    }
  }
};
</script>
<style>
</style>
