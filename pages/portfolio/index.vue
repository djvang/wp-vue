<template>
  <section class="uk-container">
    <div>
      <Navbar/>
      <div v-if="page">
        <Components :page="$store.state.page" :components="$store.state.page.acf.components"/>
      </div>
      <Posts :posts="portfolio"/>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import Components from '~/components/components.vue'
import Posts from '~/components/posts/posts.vue'
import wp from '~/api/wp'

export default {
  async asyncData ({ app, store, params }) {
    let { portfolio } = await wp.posts('portfolio', {_embed: true})
    let page = await wp.page('portfolio', {})
    store.commit('setPage', page[0])
    return {
      page,
      portfolio
    }
  },
  components: {
    Navbar,
    Components,
    Posts
  }
}
</script>

<style></style>
