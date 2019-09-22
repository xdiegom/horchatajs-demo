<template>
  <div>
    <div v-if="post">
      Post {{ post.id }} page.
    </div>
    <div v-else>
      Post no existe
    </div>
  </div>
</template>

<script>
export default {
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