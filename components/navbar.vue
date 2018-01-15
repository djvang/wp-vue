<template>
  <div>
    <div class="nav">
      Wordpress menu:
      <span v-for="item in $store.state.menus.main">
        <nuxt-link v-bind:to="item.title | slugify">{{item.title}} </nuxt-link>
      </span>
    </div>
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#">{{meta.name}}</a>
        <ul class="uk-navbar-nav">
          <li> 
            <nuxt-link to="/">home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
        </ul>
        <div class="uk-navbar-item">
          <button class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage">Info</button>
        </div>
        
      </div>
    </nav>
    <div class="uk-offcanvas-content">
        <div id="offcanvas-usage" uk-offcanvas="flip: true">
            <div class="uk-offcanvas-bar">
                <button class="uk-offcanvas-close" type="button" uk-close></button>
                <h3>Page</h3>
                <div>
                   {{$store.state.page.slug}}
                </div>
                <h4>Components</h4>
                <div v-if="$store.state.page.acf.components">
                  <div v-for="component in $store.state.page.acf.components">
                    {{component.acf_fc_layout}}
                  </div>
                </div>
            </div>
        </div>
    </div>  
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  computed: {
    meta () {
      return this.$store.state.meta
    }
  }
}
</script>

<style>
  .nuxt-link-exact-active {
    color: tomato !important;
  }
</style>
