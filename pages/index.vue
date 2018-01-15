<template>
  <section class="uk-container">
    <div>
      <Navbar/>
      <div v-if="page">
        <Components :page="$store.state.page" :components="$store.state.page.acf.components"/>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import Components from '~/components/components.vue'
import wp from '~/api/wp'

export default {
  async asyncData ({ app, store, params }) {
    let page = await wp.page('homepage', {})
    store.commit('setPage', page[0])
    return {
      page
    }
  },
  components: {
    Navbar,
    Components
  }
}
</script>

<style></style>
