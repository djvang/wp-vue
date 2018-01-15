<template>

<div v-if="components">
    <!-- <h3>Components on the <b>{{page.slug}}</b>:</h3>
    <ul v-for="component in components">
        <li>{{component.acf_fc_layout}}</li>
    </ul>
    <hr> -->
    <div v-for="component in components">
      <div v-if="component.acf_fc_layout === 'hero'">
        <Hero :hero="component.hero"/>
      </div>
      <div v-if="component.acf_fc_layout === 'cta'">
        <Cta :cta="component.cta"/>
      </div>
    </div>
</div>

</template>

<script>
import Hero from '~/components/hero.vue'
import Cta from '~/components/cta.vue'

export default {
  props: {
    page: {
      type: Object
    },
    components: {
      type: Array
    }
  },
  components: {
    Hero,
    Cta
  }
}
</script>

<style></style>
