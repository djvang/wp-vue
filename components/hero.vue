<template>
    <section class="hero">
        <h1 class="hero-title">{{hero.title}}</h1>
        <div class="hero-content" v-html="hero.content"></div>
        <div class="hero-image">
            <img v-bind:src="hero.image.url" alt="">
        </div>
    </section>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object
    }
  }
}
</script>

<style scoped></style>
