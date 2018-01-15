<template>
  <section class="uk-container">
    <div>
      <Navbar/>
      <article class="uk-article">
        <h1 class="uk-article-title">{{post.title.rendered}}</h1>
        <p class="uk-article-meta">Written by <span>{{post._embedded.author[0].name}}</span> on {{post.date}}. Posted in <nuxt-link :to="`/blog`">Blog</nuxt-link></p>
        <div class="uk-acticle-content" v-html="post.content.rendered"></div>
    </article>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import wp from '~/api/wp'

export default {
  components: {
    Navbar
  },
  async asyncData ({ params }) {
    let { posts } = await wp.posts('posts', {
      _embed: true,
      slug: params.slug
    })
    return {
      post: posts[0]
    }
  },
  head () {
    return {
      title: `${this.post.title.rendered}`,
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.'
        }
      ]
    }
  }
}
</script>

<style></style>
