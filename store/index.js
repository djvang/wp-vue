/* eslint-disable eol-last */

import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    actions: {
      async nuxtServerInit ({ commit, state }) {
        let meta = await this.$axios.get(state.api.wordpress)
        commit('setMeta', meta.data)
        let menus = await this.$axios.get(`${state.api.wordpress}wp-api-menus/v2/menu-locations/primary_navigation`)
        commit('setMenus', { main: menus.data })
      }
    },
    state: {
      api: { wordpress: 'https://api.hooke.design/wp-json/' },
      meta: null,
      menus: null,
      page: null
    },
    mutations: {
      setMeta (state, data) {
        state.meta = data
      },
      setMenus (state, data) {
        state.menus = data
      },
      setPage (state, data) {
        state.page = data
      }
    }
  })
}

export default store