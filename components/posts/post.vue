<template>
  <article class="uk-card uk-card-default">
      <div class="uk-card-media-top">
        <img v-if="post._embedded['wp:featuredmedia']" v-bind:src="post._embedded['wp:featuredmedia'][0].source_url" alt="">
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">{{ post.title.rendered }}</h3>
        <div v-html="post.excerpt.rendered"></div>
        <nuxt-link :to="`/${post.type === 'post' ? 'blog': post.type}/${post.slug}`">read more</nuxt-link>
      </div>
  </article>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object
      }
    }
  }
</script>
<style scoped>
  .uk-card-media-top {
    height: 300px;
    overflow: hidden;
    background-color: whitesmoke;
  }

  .uk-card-media-top img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
</style>
