<template>
<div class="uk-child-width-1-3@s uk-text-center" uk-grid>
  <div v-for="(post, index) in posts" :key="post.id">
    <Post :post="post"/>
  </div>
</div>
</template>

<script>
import Post from './post.vue'

export default {
  props: {
    posts: {
      type: Array
    }
  },
  components: {
    Post
  }
}
</script>

<style scoped></style>
