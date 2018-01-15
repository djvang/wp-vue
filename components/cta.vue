<template>
    <section class="cta">
        <h2 class="cta-title">{{cta.title}}</h2>
        <div class="cta-body">
          <div class="cta-list">
            <div class="cta-card" v-for="item in cta.group">
              <h3 class="cta-card-title">{{item.title}}</h3>
              <div class="cta-card-description">{{item.description}}</div>
              <div class="cta-card-image">
                <img v-bind:src="item.image.url" alt="">
              </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  props: {
    cta: {
      type: Object
    }
  }
}
</script>

<style scoped>
.cta {
  background-color: tomato;
}
</style>
