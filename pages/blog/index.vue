<template>
  <section class="uk-container">
    <div>
      <Navbar/>
      <div v-if="page">
        <Components :page="$store.state.page" :components="$store.state.page.acf.components"/>
      </div>
      <Posts :posts="posts" />
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import Posts from '~/components/posts/posts.vue'
import wp from '~/api/wp'

export default {
  async asyncData ({ app, store, params }) {
    let { posts } = await wp.posts('posts', {
      _embed: true,
      per_page: 4
    })
    let page = await wp.page('blog', {})
    store.commit('setPage', page[0])
    return {
      page,
      posts
    }
  },
  components: {
    Posts,
    Navbar
  }
}
</script>

<style></style>
